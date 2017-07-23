import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
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
import ServiceItem from './ServiceItem'

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



class UserScreen extends PureComponent {

  componentDidMount() {

    const { dispatch, navigation, token } = this.props;

    dispatch({ type: GET_PATIENT_PROFILE, payload: { token } });
    dispatch({ type: GET_PATIENT_FAV_DOCTORS, payload: { token} });
    dispatch({ type: GET_PATIENT_FAV_POSTS, payload: { token, refresh: true } });
    dispatch({ type: GET_PATIENT_QUESTIONS, payload: { token } });
    // dispatch({ type: GET_PATIENT_STARRED_QUESTIONS, payload: { token } });
    // dispatch({ type: GET_PATIENT_SERVICES, payload: { token } });
  } 

  render() {
    const { dispatch, navigation, token,  patientProfile  } = this.props;
    //get faved data
    const { postFav, doctorFav, questionFav, questionStarredFav, servicesFav } = this.props;
    //get fetch data
    const { postFetch } = this.props;

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
      data: [],
      count: 0,
    };
    let patientPaidServicesData = {
      data: [],
      count: 0,
    };
    let patientFinishedServicesData = {
      data: [],
      count: 0,
    };
    //service for later handle
    // if (patientServices) {
    //   patientUnderWayServicesData = handleUserData(patientServices.get('results'), 'services', 'underway');
    //   patientPaidServicesData = handleUserData(patientServices.get('results'), 'services', 'paid')
    //   patientFinishedServicesData = handleUserData(patientServices.get('results'), 'services', 'finished');
    // }


    const SectionLists = [
      [
        { data: patientUnsolvedQuestionsData.data, key: `未解决（${patientUnsolvedQuestionsData.count}）`, seeMore: true, renderItem: ({ item }) => <ProblemItem navigation={navigation} item={item} token={token} /> },
        { data: patientStarredQuestionsData.data, key: `关注的问题（${patientStarredQuestionsData.count}）`, seeMore: true, renderItem: ({ item }) => <ProblemItem navigation={navigation} item={item} token={token} /> },
        { data: patientSolvedQuestionsData.data, key: `已解决（${patientSolvedQuestionsData.count}）`, seeMore: true, renderItem: ({ item }) => <ProblemItem navigation={navigation} item={item} token={token} /> },
      ],
      [
        { data: patientUnderWayServicesData.data, key: `进行中（${patientUnderWayServicesData.count}）`, seeMore: true, renderItem: ({ item }) => <ServiceItem navigation={navigation} item={item} token={token} /> },
        { data: patientPaidServicesData.data, key: `等待接受预约（${patientPaidServicesData.count}）`, seeMore: true, renderItem: ({ item }) => <PaidServiceItem navigation={navigation} item={item} token={token} /> },
        { data: patientFinishedServicesData.data, key: `已完成（${patientFinishedServicesData.count}）`, seeMore: true, renderItem: ({ item }) => <ServiceItem navigation={navigation} item={item} token={token} /> },
      ],
      [
        { data: [{ favDoctors: patientFavDoctorsData.data, key: '1' }], key: `收藏的医生（${patientFavDoctorsData.count}）`, spread: true, renderItem: ({ item }) => <NearByDoctorSection navigation={navigation} nearbyDoctor={item.favDoctors} token={token} /> },
        { data: patientFavPostsData.data, key: `收藏的文章（${patientFavPostsData.count}）`, spread: false, renderItem: ({ item }) =>  <PostSection navigation={navigation} healthPostItem={item} token={token} /> },
      ],
    ]
    
    
    return (
      <View style={{ flex: 1, backgroundColor: '#F5F6F7'}}>
        {
          <TabThreeHeaderSection patientProfile={patientProfile} />
        }
        <ScrollableTabView
          page={0}
          style={{ marginTop: 148 }}
          renderTabBar={
            () => <CustomTabBar 
                      multiCustom={true} 
                      underlineStyle={{
                        marginLeft: 28,
                      }}
                      tabTextStyle={{
                        fontSize: 18,

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
        <TouchableOpacity onPress={() => { dispatch({ type: 'LOGOUT' })}}>
          <Text style={{ position: 'absolute', top: 100, left: 100, fontSize: 40, }}>Logout</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  state => getPatientSelector(state),
)(UserScreen);
