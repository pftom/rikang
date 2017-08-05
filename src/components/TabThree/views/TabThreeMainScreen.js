import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, Platform, } from 'react-native';
import { connect } from 'react-redux';


import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import CustomTabBar from '../../TabOne/views/CustomTabBar';
import UltimateListView from '../../common/UltimateListView';

//import fav doc
import NearByDoctorSection from '../../TabOne/views/NearByDoctorSection';
//import post section
import PostSection from '../../TabOne/views/PostSection';
//import problem item
import ProblemItem from './ProblemItem';
//import Service item
import PaidServiceItem from './PaidServiceItem';
//IMPORT underway service item
import ServiceItem from './ServiceItem';

import WaitForAcceptListItem from './WaitForAcceptListItem';

import FinishedListItem from './FinishedListItem';

//import px to dp
import px2dp from '../../../utils/px2dp';

//import action constants
import {
  GET_PATIENT_PROFILE,
  GET_PATIENT_FAV_DOCTORS,
  GET_PATIENT_FAV_POSTS,
  GET_PATIENT_QUESTIONS,
  GET_PATIENT_STARRED_QUESTIONS,
  GET_PATIENT_SERVICES,
 } from '../../../constants/'

//import selector from select data
import { getPatientSelector } from '../../../selectors/';

import TabThreeHeaderSection from './TabThreeHeaderSection';

//use fake data

//import handle data func
import {
  handleUserData,
  ITEMS,
  jumpToScreenLists,
} from '../data/'

import {
  handleNearby,
  handleHealthPost,
} from '../../TabOne/data/TabOneMainScreen_data.js'


//for im init
import AV from 'leancloud-storage';
import { Realtime } from 'leancloud-realtime';
import { TypedMessagesPlugin } from 'leancloud-realtime-plugin-typed-messages';

AV.init({
  appId: 'QpmY5B86OewxLjxu2Yo6izF4-gzGzoHsz',
  appKey:'gT9756x6BXMEAlAnNVyfS6q7',
});

const realtime = new Realtime({
  appId: 'QpmY5B86OewxLjxu2Yo6izF4-gzGzoHsz',
  plugins: [TypedMessagesPlugin], // 注册富媒体消息插件
  region: 'cn',
});

const LeanRT = {};
LeanRT.realtime = realtime;
LeanRT.imClient = null;
LeanRT.currentConversation = null;



class UserScreen extends PureComponent {

  componentDidMount() {

    const { dispatch, navigation, token } = this.props;

    //init leancloud im

    const { userId } = this.props;
    console.log('userId', userId, )
    LeanRT.realtime.createIMClient(String(userId))
      .then(userClient => {
        LeanRT.imClient = userClient;

        console.log('LeanRT', LeanRT);
      })
      .catch(console.error.bind(console));

    dispatch({ type: GET_PATIENT_PROFILE, payload: { token } });
    dispatch({ type: GET_PATIENT_FAV_DOCTORS, payload: { token} });
    dispatch({ type: GET_PATIENT_FAV_POSTS, payload: { token, refresh: true } });
    dispatch({ type: GET_PATIENT_QUESTIONS, payload: { token } });
    dispatch({ type: GET_PATIENT_STARRED_QUESTIONS, payload: { token } });
    dispatch({ type: GET_PATIENT_SERVICES, payload: { token } });
  }

  render() {
    const { dispatch, navigation, token,  patientProfile  } = this.props;
    //get faved data
    const { postFav, doctorFav, questionFav, questionStarredFav, servicesFav } = this.props;
    //get fetch data and doctor
    const { postFetch, doctors} = this.props;

    //get post data
    // if not fetch or lose network, use
    let patientFavPostsData = {
      data: [],
      count: 0,
    };
    if (postFav.size > 0) {
      patientFavPostsData = handleHealthPost(postFav, true);
    }

    let patientFavDoctorsData = {
      data: [],
      count: 0,
    };
    if (doctorFav.size > 0) {
      patientFavDoctorsData = handleNearby(doctorFav, false, true);
    }

    let patientUnsolvedQuestionsData = {
      data: [],
      count: 0,
    };
    let patientSolvedQuestionsData = {
      data: [],
      count: 0,
    };
    if (questionFav.size > 0) {
      patientUnsolvedQuestionsData = handleUserData(questionFav, 'questions', 'unsolved');
      // the second params for handle  solved status question
      patientSolvedQuestionsData = handleUserData(questionFav, 'questions', 'solved');
      console.log('patientSolvedQuestionsData', patientSolvedQuestionsData);
    }

    let patientStarredQuestionsData = {
      data: [],
      count: 0,
    }
    if (questionStarredFav.size > 0) {
      patientStarredQuestionsData = handleUserData(questionStarredFav);
    }

    let patientUnderWayServicesData = {
      data: [
        {
          key: 1,
          name: '汤婷',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
          service_object: {
              "doctor": 1,
              "patient": 1
          },
          owner: 1,
        },
        {
          key: 2,
          name: '汤婷',
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
          service_object: {
              "doctor": 1,
              "patient": 1
          },
          owner: 1,
        },
      ],
      count: 0,
    };
    let patientPaidServicesData = {
      data: [
        {
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
          name: '汤婷',
          key: 1,
        },
        {
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
          name: '汤婷',
          key: 2,
        }
      ],
      count: 0,
    };
    let patientFinishedServicesData = {
      data: [
        {
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
          name: '汤婷',
          key: 1,
          comment: null,
        },
        {
          avatar: 'https://facebook.github.io/react/img/logo_og.png',
          name: '汤婷',
          key: 2,
          comment: {
              "anonymous": false,
              "body": "好啊",
              "created": "2017-08-02",
              "id": 1,
              "patient": {
                  "age": null,
                  "avatar": null,
                  "id": 1,
                  "medical_history": "",
                  "name": "阿哲",
                  "phone": "18321025181",
                  "sex": "M"
              },
              "ratings": 5
          },
        }
      ],
      count: 0,
    };
    // service for later handle
    // if (servicesFav.size > 0) {
    //   console.log('servicesFav', servicesFav && servicesFav.toJS());
    //   patientUnderWayServicesData = handleUserData(servicesFav, 'services', 'underway', doctors);
    //   patientPaidServicesData = handleUserData(servicesFav, 'services', 'paid', doctors)
    //   patientFinishedServicesData = handleUserData(servicesFav, 'services', 'finished', doctors);

    //   console.log('patientUnderWayServicesData', patientUnderWayServicesData);
    //   console.log('patientPaidServicesData', patientPaidServicesData);
    //   console.log('patientFinishedServicesData', patientFinishedServicesData);
    // }


    const SectionLists = [
      [
        { data: patientUnsolvedQuestionsData.data, key: `未解决（${patientUnsolvedQuestionsData.count}）`, seeMore: true, renderItem: ({ item }) => <ProblemItem navigation={navigation} item={item} token={token} noHintBar={patientUnsolvedQuestionsData.count === 0} /> },
        { data: patientStarredQuestionsData.data, key: `关注的问题（${patientStarredQuestionsData.count}）`, seeMore: true, renderItem: ({ item }) => <ProblemItem navigation={navigation} item={item} token={token} noHintBar={patientStarredQuestionsData.count === 0} /> },
        { data: patientSolvedQuestionsData.data, key: `已解决（${patientSolvedQuestionsData.count}）`, seeMore: true, renderItem: ({ item }) => <ProblemItem navigation={navigation} item={item} token={token} noHintBar={patientSolvedQuestionsData.count === 0}/> },
      ],
      [
        { data: patientUnderWayServicesData.data, key: `进行中（${patientUnderWayServicesData.count}）`, seeMore: true, renderItem: ({ item }) => <ServiceItem LeanRT={LeanRT} userId={this.props.userId} navigation={navigation} item={item} token={token} /> },
        { data: patientPaidServicesData.data, key: `等待接受预约（${patientPaidServicesData.count}）`, seeMore: true, renderItem: ({ item }) => <WaitForAcceptListItem navigation={navigation} item={item} token={token} /> },
        { data: patientFinishedServicesData.data, key: `已完成（${patientFinishedServicesData.count}）`, seeMore: true, renderItem: ({ item }) => <FinishedListItem navigation={navigation} item={item} token={token} /> },
      ],
      [
        { data: [{ favDoctors: patientFavDoctorsData.data, key: '1' }], key: `收藏的医生（${patientFavDoctorsData.count}）`, spread: true, renderItem: ({ item }) => <NearByDoctorSection noYear={true} navigation={navigation} nearbyDoctor={item.favDoctors} token={token} /> },
        { data: patientFavPostsData.data, key: `收藏的文章（${patientFavPostsData.count}）`, spread: false, renderItem: ({ item }) =>  <PostSection navigation={navigation} healthPostItem={item} token={token} /> },
      ],
    ]


    return (
      <View style={{ flex: 1, backgroundColor: '#F5F6F7'}}>
        {
          <TabThreeHeaderSection
            patientProfile={patientProfile}
            navigation={navigation}
            token={token}
            dispatch={dispatch}
          />
        }
        <ScrollableTabView
          page={0}
          style={ Platform.OS === 'ios' ? { marginTop: px2dp(148) } : { marginTop: px2dp(147) }}
          renderTabBar={
            () => <CustomTabBar
                      multiCustom={true}
                      underlineStyle={
                        Platform.OS === 'ios'
                        ? { marginLeft: px2dp(28) }
                        : { marginLeft: 0 }
                      }
                      tabTextStyle={{
                        fontSize: px2dp(18),
                      }}
                  />
          }
        >
          {
            ITEMS.map((item, key) => (
              <UltimateListView
                key={key}
                tabLabel={item}
                section={SectionLists[key]}
                simplify={key !== 2 && true}
                data={postFetch}
                method={GET_PATIENT_FAV_POSTS}
                sectionNoBorder={true}
                enableRefresh={false}
                dispatch={dispatch}
                token={token}
                navigation={navigation}
                jumpToScreen={jumpToScreenLists[key]}
              />
            ))
          }
        </ScrollableTabView>
      </View>
    )
  }
}

export default connect(
  state => getPatientSelector(state),
)(UserScreen);
