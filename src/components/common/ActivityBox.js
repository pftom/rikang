import React, { Component } from 'react';
import { Text, Image, Modal, Dimensions, RefreshControl, ActivityIndicator,  View, TouchableOpacity, ListView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';

import RefreshListView from './RefreshListView';
import Header from './Header';
import ModalActivity from './ModalActivity';
import { handleTime } from '../../util/index';
import ModalMessage from './ModalMessage';


import { submitConfirm } from '../../actions/user';
import { fetchEventsActive } from '../../actions/home';
import {  fetchAttend } from '../../actions/content';

const { width, height } = Dimensions.get('window');

const MODAL_TEXT = {
  modalTitle: '加载完成了喽😀！开始签到吧！',
  modalBtn: '确认签到',
  progressText: '努力签到中....',
};

class ActivityItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: false,
    }

    this.changeStatus = this.changeStatus.bind(this);
    this.dispatchAttend = this.dispatchAttend.bind(this);
  }

  changeStatus() {
    const that = this;
    this.timer1 = setTimeout(() => {
      that.setState({
        status: true,
      })
    }, 1700);
  }

  dispatchAttend() {
    const { dispatch, token, id } = this.props;
    dispatch(fetchAttend(id, token));
  }

  componentWillUnmount() {
    clearTimeout(this.timer1);
  }

  render() {
    const { attend } = this.props;
    const renderStatus = (
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#FF0467', '#FC7437']}
        style={styles.gradient}
      >
        <Text style={styles.gradientText}>
          {
            !this.state.status 
            ? "签到"
            : "已签到"
          }
        </Text>
      </LinearGradient>
    );
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("TabOneScreenTwo", { data: { type: 0, id: this.props.id }, title: '校园活动' })}>
        <View style={styles.containerItem} >
        <Image source={{ uri: this.props.photo }} style={styles.pic} />
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
          style={styles.picBox}
         />
        <Text style={styles.title}>{this.props.title}</Text>
        <View style={styles.statusBox}>
          <Text style={styles.time}>{handleTime(this.props.created)}</Text>
        </View>
        <View style={styles.btnBox}>
          {
            !this.state.status 
            ? (
              <TouchableOpacity onPress={this.dispatchAttend}>
                {renderStatus}
              </TouchableOpacity>
            )
            : TouchableWith
          }
        </View>
        </View>
      </TouchableOpacity>
    )
  }
}

class ActivityBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false,
    }
  }

  componentDidMount() {
    this._onRefresh('INIT');
  }

  waitRefreshing() {
    const that = this;
    this.timers = setTimeout(() => {
      that.setState({
        isRefreshing: false,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timers);
  }

  _renderNoMore() {
    return (
      <View style={styles.loadingMore}>
        <Text style={styles.loadingMoreText}>没有更多了</Text>
      </View>
    )
  }

  _renderFooter() {
    let { activeEvents } = this.props;
    if (activeEvents && !activeEvents.next) {
        return this._renderNoMore();
      } else {
        return <ActivityIndicator style={styles.loadingMore} />
      }
  }

  _onRefresh = (type) => {
    let that = this;
    if (type === 'INIT') {
        that.setState({
          isRefreshing: true,
        });
        this.waitRefreshing();
      this.props.dispatch(fetchEventsActive());
    } else {
      that.setState({
        isRefreshing: true,
      });
      this.waitRefreshing();
      let { activeEvents } = this.props;
      if (!activeEvents.next) {
        return;
      }
      
      this.props.dispatch(fetchEventsActive(activeEvents.next[activeEvents.next.length - 1]));
    }
    
  }

  ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
  });
  
  render() {
    const { navigation, activeEvents, isFetching, dispatch, attend,   } = this.props;
    let dataSource = this.ds.cloneWithRows(activeEvents.results || []);
    return (
    <View style={styles.container}>
      <ModalMessage failure={attend.err} message={'签到失败，请检查网络连接'} dispatch={dispatch}/>
      <ListView
        refreshControl={
                        <RefreshControl
                          refreshing={this.state.isRefreshing}
                          onRefresh={() => this._onRefresh()}
                        />
                      }
        enableEmptySections={true}
        renderFooter={() => this._renderFooter()}
        onEndReached={this._onRefresh}
        contentContainerStyle={styles.listView}
        dataSource={dataSource}
        onEndReachedThreshold={10}
        showsVerticalScrollIndicator={false}
        renderRow={(rowData) => {
          return <ActivityItem {...this.props} {...rowData} key={rowData.id} navigation={navigation} />
        }}
      />
  </View>
  )
  }
}

ActivityBox.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="活动签到"
        logoLeft={require('../TabOne/img/back.png')}
        navigation={navigation}
      />
    </View>
  ),
})

const styles = StyleSheet.create({
  headerTitle: {
    top: -10,
  },
  container: {
    alignItems: 'center',
  },
  listView: {
    alignItems: 'center',
  },
  containerItem: {
    paddingBottom: 20,
    marginBottom: 9.75,
    marginTop: 15.5,
    borderBottomWidth: 0.5,
    borderBottomColor: '#C1C1C1',
  },
  title: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#000000',
    marginTop: 17,
    marginBottom: 6,
    width: 313,
  },
  time: {
    fontFamily: 'PingFangSC-Light',
    fontSize: 14,
    color: 'rgba(152,152,152,0.80)',
    marginLeft: 2,
  },
  already: {
    fontFamily: 'PingFangSC-Thin',
    fontSize: 14,
    color: '#000000',
    marginRight: 5,
  },
  statusBox: {
    flexDirection: 'row',
    marginBottom: 17,
    justifyContent: 'flex-end',
  },
  pic: {
    width: 313,
    height: 176,
    borderRadius: 5,
  },
  detailBox: {
    width: 150,
    height: 42,
    backgroundColor: '#4990E2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 2,
  },
  detail: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#FFFFFF',
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gradient: {
    width: 313,
    height: 42,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  gradientText: {
    backgroundColor: 'transparent',
    fontFamily: 'PingFangSC-Regular',
    fontSize: 20,
    color: '#FFFFFF',
  },
  picBox: {
    width: 313,
    height: 176,
    borderRadius: 5,
    position: 'absolute',
  },
  loadingMore: {
    marginTop: 10,
  },
  loadingMoreText: {
    color: '#777',
    textAlign: 'center',
  }
})

const mapStateToProps = (state) => ({
  activeEvents: state.home.events.activeEvents,
  isFetching: state.home.events.isFetching,
  token: state.auth.token,
  attend: state.content.attend,
});

export default connect(mapStateToProps)(ActivityBox);