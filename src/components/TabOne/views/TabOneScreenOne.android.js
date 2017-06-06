import React, { Component } from 'react';
import { 
  Text, 
  View, 
  RefreshControl, 
  Dimensions, 
  ActivityIndicator, 
  StyleSheet, 
  Animated, 
  ListView, 
  ScrollView, 
  TouchableOpacity, 
  Platform,
} from 'react-native';
import ScrollViewTabView from './ScrollViewTabView';
import ScrollViewTabView1 from 'react-native-scrollable-tab-view';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { connect } from 'react-redux';

import Carousel from './Carousel';
import MidTitle from './MidTitle';
import NewsItem from './NewsItem';
import Header from '../../common/Header';
import ScrollHeader from './ScrollHeader';
import DefaultTabBar from './DefaultTabBar';
import px2dp from '../../../util';
import { commonApi, header } from '../../../util/config';
import request from '../../../util/request';


import { fetchEvents, fetchNews } from '../../../actions/home';
import {
  REQUEST_NEWS,
  REQUEST_EVENTS,
} from '../../../constants';


const TAB = [
  {
    id: 0,
    title: '党建活动',
  }, 
  {
    id: 1,
    title: '时事新闻',
  }
];

var cachedResults = {
  items: [],
  total: 0,
}

const ACTIONS = [REQUEST_EVENTS, REQUEST_NEWS];


const { width, height } = Dimensions.get('window');

class TabOneScreenOne extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <View style={styles.headerTitle}>
        <Header 
          headerText="党国风采"
          navigation={navigation}
        />
      </View>
    ),
  })
  
  constructor(props) {
    super(props);

    this.scrollY = new Animated.Value(0)
    this.state = {
      scrollY: 0,
      imgOpacity: 1,
      currentPage: 0,
      isRefreshing: false,
    };

    this._onRefresh = this._onRefresh.bind(this)
  }

  componentDidMount() {
    this.setState({
      scrollY: this.scrollY.interpolate({
        inputRange: [0, 184, 184 ],
        outputRange: [0, -184, -184]
      }),
      imgOpacity: this.scrollY.interpolate({
        inputRange: [0, 90, 184],
        outputRange: [1, 0.5, 0],
      })
    })
  }

  _onRefresh(id) {
    this.setState({
      isRefreshing: true,
    })
    this.waitRefreshing();
    if (ACTIONS[id] === REQUEST_NEWS) {
      let { news } = this.props.news;
      if (!news.next) {
        return;
      }
      
      this.props.dispatch(fetchNews(news.next[news.next.length - 1]));
    } else if (ACTIONS[id] === REQUEST_EVENTS) {
      let { events } = this.props.events;
      if (!events.next) {
        return
      }
      this.props.dispatch(fetchEvents(events.next[events.next.length - 1]));
    }
  }

  waitRefreshing() {
    const that = this;
    this.timers = setTimeout(() => {
      that.setState({
        isRefreshing: false,
      });
    }, 1500);
  }

  componentWillUnmount() {
    clearTimeout(this.timers);
  }

  getCurrentPage(currentPage) {
    this.setState({
      currentPage,
    })
  }

  ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
  })

  _renderRow(rowData, navigation, item) {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('TabOneScreenTwo', { data: { type: this.state.currentPage, id: rowData.id } , title: item.title })}>
        <NewsItem {...rowData} key={rowData.id} />
      </TouchableOpacity>
    )
  }

  _renderNoMore() {
    return (
      <View style={styles.loadingMore}>
        <Text style={styles.loadingMoreText}>没有更多了</Text>
      </View>
    )
  }

  _renderFooter(currentPage) {
    if (currentPage == 0) {
      if (!this.props.events.events.next) {
        return this._renderNoMore();
      } else {
        return <ActivityIndicator style={styles.loadingMore} />
      }
    } else {
      if (!this.props.news.news.next) {
        return this._renderNoMore();
      } else {
        return <ActivityIndicator style={styles.loadingMore}/>
      }
    }
  }

  render() {
    const { navigation, events, news, dispatch } = this.props;
    let dataSource = [
      this.ds.cloneWithRows(events.events.results || []),
      this.ds.cloneWithRows(news.news.results || [])
    ];

    let currentPage = this.state.currentPage;

    let isFetching = currentPage == 0 ? events.isFetching : news.isFetching;
    let scrollY = this.scrollY.interpolate({
      inputRange: [-90, -50, 0, 0],
      outputRange: [-90, -50, 0, 0],
    })

    let style1 = {
      transform: [
        { translateY: this.state.scrollY }
      ]
    }
    let style2 = {
      transform: [{
        translateY: scrollY,
      }]
    }
    return (
      <View style={styles.container}>
        <ScrollViewTabView1
              ref={(listView) => this.listView = listView}
              isFetching={isFetching}
              dispatch={dispatch}
              getCurrentPage={this.getCurrentPage.bind(this)}
              imgOpacity={this.state.imgOpacity}
              renderTabBar={() => <DefaultTabBar  />}
            >
              {
                TAB.map(item => (
                  <Animated.View
                  tabLabel={item.title}
                  key={item.id}
                style={[ styles.listBox1, style2 ]}
              >
                <View style={ styles.listBox2}>
                  <ListView
                      dataSource={dataSource[item.id]}
                      enableEmptySections
                      refreshControl={
                        <RefreshControl
                          tintColor="#fff"
                          onRefresh={() => this._onRefresh(this.state.currentPage)}
                          refreshing={this.state.isRefreshing}
                        />
                      }
                      showsVerticalScrollIndicator={false}
                      automaticallyAdjustContentInsets={false}
                      onEndReachedThreshold={10}
                      onEndReached={() => this._onRefresh(this.state.currentPage)}
                      renderFooter={() => this._renderFooter(this.state.currentPage)}
                      renderRow={(rowData) => this._renderRow(rowData, navigation, item)}
                      onScroll={
                      Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.scrollY }}}]
                      )
                    }
                    scrollEventThrottle={16}
                    />
                    </View>
                  </Animated.View>
                ))
              }
          </ScrollViewTabView1>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  carousel: {
    top: 0,
    zIndex: 10,
  },
  header: {
    marginBottom: 16,
  },
  scrollView: {
    marginTop: 125,
    height: 300,
  },
  headerTitle: {
    top: -10,
  },
  topView: {
    top: -92,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  listBox: {
    marginTop: 92,
    height: px2dp(height + 99),
    width,
    backgroundColor: '#fff'
  },
  listBox1: {
    height: px2dp(height - 90 - 49),
    width,
  },
  listBox2: {
    height: px2dp(height - 90 - 49),
    width,
    marginBottom: 90
  },
  indicatorBox: {
    height: 61,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorText: {
    marginTop: 5,
    marginLeft: 5
  },
  loadingMore: {
    marginTop: 10,
    marginBottom: 200
  },
  loadingMoreText: {
    color: '#777',
    textAlign: 'center',
  }
})

const mapStateToProps = (state) => ({
  events: state.home.events,
  news: state.home.news,
});

export default connect(mapStateToProps)(TabOneScreenOne);