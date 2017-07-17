import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GET_DOCTORS,  
} from '../../../constants/'

//import selector for computing data
import { getDoctorsSelector } from '../../../selectors/'

//import header common component
import { Header } from '../../common/';
//import stylesheet
import { DoctorListStyle as styles } from '../../styles/';

//import common list
import { UltimateFlatList } from '../../common/'

//import data handle func
import {
  handleNearby,
} from '../data/';

//import render doctor list item
import DoctorListItem from './DoctorListItem';


class DoctorList extends PureComponent {
  componentDidMount() {
    const { navigation, dispatch } = this.props;
    //get the token from the navigate
    const { token } = navigation.state.params;
    //pull to refresh 
    dispatch({ type: GET_DOCTORS, payload: { token, refresh: true } });
  }


  render() {
    const { doctors, navigation } = this.props;
    const { token } = navigation.state.params;

    let nearbyDoctor = [];
    if (doctors) {
      //the second params for horizontal(true) show ten item,
      nearbyDoctor = handleNearby(doctors.get('results'), false);
    }

    return (
      <View style={styles.hospitalContainer}>
        <Header
          headerText="附近医生"
          logoLeft={true}
          searchIcon={true}
          showGradient={true}
          navigation={navigation}
        />
        <UltimateFlatList
            listStyle={{
              flex: 1,
              backgroundColor: '#F5F6F7',
            }}
            listData={nearbyDoctor}
            method={GET_DOCTORS}
            data={doctors}
            enableRefresh={true}
            refreshMethod={[ GET_DOCTORS ]}
            dispatch={this.props.dispatch}
            token={token}
            renderItem={(item) => <DoctorListItem token={token} navigation={navigation} item={item} />}
        />
      
      </View>
    )
  }
}

export default connect(
  state => getDoctorsSelector(state),
)(DoctorList);