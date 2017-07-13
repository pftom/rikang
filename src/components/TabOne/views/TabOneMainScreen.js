import React, { PureComponent } from 'react';
import { 
  View,
  Text,
  NetInfo,
  TouchableWithoutFeedback,
  Image,
  SectionList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import parse from 'url-parse';


//import selector to get selected data
import { getHomeSelector } from '../../../selectors/';
import LoginStatusMessage from '../../LoginStatusMessage';
import AuthButton from '../../AuthButton';

//import async actions constants
import { GET_DOCTORS, GET_POSTS } from '../../../constants/'

//impor style from styles
import { MainScreenStyle as styles } from '../../styles/';

//import data handle func
import {
  headerTitleData,
  nearbyDoctor,
  handleHealthPost,
} from '../data/TabOneMainScreen_data.js';

//import headerTitle component
import HeaderSection from './HeaderSection';
//import nearby doc
import NearByDoctorSection from './NearByDoctorSection';
//import post section 
import PostSection from './PostSection';

class HomeMainScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      loadingTail: false,
    };

    this._onRefresh = this._onRefresh.bind(this);
  }

  componentDidMount() {

    const { token, dispatch } = this.props;
    //pull to refresh 
    dispatch({ type: GET_DOCTORS, payload: { token, refresh: true } });
    dispatch({ type: GET_POSTS, payload: { token, refresh: true } });

    this.setState({
      loading: true,
    });

    this.mountTimer = setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.mountTimer);
    clearTimeout(this.refreshTimer);
    clearTimeout(this.endReachedTimer);
  }

  renderSectionComponent(item, right) {
    //item represent data should be renderItem
    // right represent show right navigate label

    return (
      <View style={styles.sectionBox}>
        <View style={styles.sectionLeftBox}>
          <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['#23BCBB', '#45E994']}
            style={styles.sectionGradient}
          />
          <Text style={styles.sectionTitle}>{item.key}</Text>
        </View>
        {
          right && (
            <View style={styles.sectionRightBox}>
              <Text style={styles.seeAll}>查看全部</Text>
              <Image source={require('../img/rightArrow.png')} style={styles.sectionImg} />
            </View>
          )
        }
      </View>
    )
  }

  renderNoMore() {
    return (
      <View style={styles.loadingMore}>
        <Text style={styles.loadingMoreText}>没有更多了...</Text>
      </View>
    )
  }

  hasMore = () => {
    const { posts } = this.props;

    //only for posts exist and then get the next for judge has more
    if (posts) {
      const next = posts.get('next');
      return next !== null;
    }

    //initial data return true to show blank page
    return true;
  }

  _onRefresh() {
    //judge whether is loading, if it is, wait for loading
    if (this.state.loading) {
      return;
    }

    this.setState({ loading: true });

    const { token, dispatch } = this.props;

    dispatch({ type: GET_POSTS, payload: { token, refresh: true } });
    dispatch({ type: GET_DOCTORS, payload: { token, refresh: true } });

    this.refreshTimer = setTimeout(() => {
      this.setState({ loading: false });
    }, 2000);
  }

  _onEndReached = () => {
    //get loading for loading 
    const { posts, isLoadingData } = this.props;
    const next = posts.get('next');

    if (!this.hasMore() || this.state.loadingTail) {
      return;
    }

    this.setState({ loadingTail: true });
    const { dispatch, token } = this.props;
    const { query } = parse(next, true);


    dispatch({ type: GET_POSTS, payload: { token, refresh: false, query } })
    

    this.endReachedTimer = setTimeout(() => {
      this.setState({ loadingTail: false });
    }, 2000);
  }

  renderFoot = () => {

    if (!this.hasMore()) {
      return this.renderNoMore();
    }

    const { posts } = this.props;

    if (!posts || !this.state.loadingTail) {
      return <View style={styles.loadingMore} />
    }

    return (
      <View style={styles.loadingMore}>
        <ActivityIndicator />
        <View style={styles.loadingTextBox}>
          <Text style={styles.loadingText}>加载中...</Text>
        </View>
      </View>
    )
  }

  render() {
    const { loadingError, isLoadingData, doctors, posts, navigation, token, dispatch } = this.props;

    let healthPost = [];
    if (posts) {
      healthPost = handleHealthPost(posts.get('results'));
    }

    return (
      <View style={styles.container}>
        <LinearGradient
            start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
            colors={['#23BCBB', '#45E994']}
            style={styles.linearGradient}>
        </LinearGradient>
        <SectionList
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={(info) => {
            //because of bug of the flatlist or sectionlist, will triger twice on scroll to end
            //so, I add the onEndReachedCalledDuringMomentum for fix this bug
            if (!this.onEndReachedCalledDuringMomentum) {
              this._onEndReached();
              this.onEndReachedCalledDuringMomentum = true;
            }
          }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={16}
          ListFooterComponent={() => this.renderFoot()}
          refreshControl={
            <RefreshControl
            refreshing={this.state.loading}
            onRefresh={this._onRefresh}
            title='拼命加载中...'
          />
          }
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          ListHeaderComponent={() => <HeaderSection navigation={navigation} headerTitleData={headerTitleData} />}
          sections={[
            { data: [{ nearbyDoctor, key: 1 }], key: '推荐医生', renderItem: ({ item }) => <NearByDoctorSection navigation={navigation} nearbyDoctor={item.nearbyDoctor} /> },
            { data: healthPost, key: '健康咨询', renderItem: ({ item }) =>  <PostSection navigation={navigation} healthPostItem={item} /> },
          ]}
          renderSectionHeader={({ section }) => {
            if (section.key === '推荐医生') {
              return this.renderSectionComponent(section, true);
            }

            if (section.key === '健康咨询') {
              return this.renderSectionComponent(section, false);
            }

            return null;
          }}
        />
      </View>
    )
  }
}

HomeMainScreen.navigationOptions = {
  header: null,
};

export default connect(
  (state) => getHomeSelector(state),
)(HomeMainScreen);
