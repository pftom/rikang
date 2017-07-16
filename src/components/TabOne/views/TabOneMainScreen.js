import React, { PureComponent } from 'react';
import { 
  View,
  Text,
  NetInfo,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  SectionList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { connect } from 'react-redux';
import parse from 'url-parse';

//import list component
import { UltimateListView } from '../../common/';

//import selector to get selected data
import { getHomeSelector } from '../../../selectors/';
import LoginStatusMessage from '../../LoginStatusMessage';
import AuthButton from '../../AuthButton';

//import async actions constants
import { GET_DOCTORS, GET_POSTS } from '../../../constants/'

//impor style from styles
import { MainScreenStyle as styles } from '../../styles/';

//import header
import Header from '../../common/Header';

//import data handle func
import {
  headerTitleData,
  handleNearby,
  handleHealthPost,
} from '../data/';

//import headerTitle component
import HeaderSection from './HeaderSection';
//import nearby doc
import NearByDoctorSection from './NearByDoctorSection';
//import post section 
import PostSection from './PostSection';
//import section component
import { SectionComponent } from '../../common/';

class HomeMainScreen extends PureComponent {

  componentDidMount() {

    const { token, dispatch } = this.props;
    //pull to refresh 
    dispatch({ type: GET_DOCTORS, payload: { token, refresh: true } });
    dispatch({ type: GET_POSTS, payload: { token, refresh: true } });
  }



  render() {
    const { loadingError, isLoadingData, doctors, posts, navigation, token, dispatch } = this.props;

    //handle healthPost data
    let healthPost = [];
    if (posts) {
      healthPost = handleHealthPost(posts.get('results'));
    }

    //handle nearbyDoctor data
    let nearbyDoctor = [];
    if (doctors) {
      //the second params for horizontal show ten item,
      nearbyDoctor = handleNearby(doctors.get('results'), true);
    }

    //render section data
    const section = [
            { data: [{ nearbyDoctor, key: '1' }], key: '推荐医生', spread: true, renderItem: ({ item }) => <NearByDoctorSection navigation={navigation} nearbyDoctor={item.nearbyDoctor} token={token} /> },
            { data: healthPost, key: '健康咨询', spread: false ,renderItem: ({ item }) =>  <PostSection navigation={navigation} healthPostItem={item} token={token} /> },
    ];

    //render header component
    const header = () => <HeaderSection navigation={navigation} headerTitleData={headerTitleData} token={token} />;

    return (
      <View style={styles.container}>
        <Header 
          navigation={navigation}
          showGradient={true}
        />
        <UltimateListView
          header={header}
          section={section}
          data={posts}
          method={GET_POSTS}
          enableRefresh={true}
          refreshMethod={[GET_DOCTORS, GET_POSTS]}
          dispatch={dispatch}
          token={token}
          navigation={navigation}
          jumpToScreen={'DoctorList'}
        />
      </View>
    )
  }
}

export default connect(
  (state) => getHomeSelector(state),
)(HomeMainScreen);
