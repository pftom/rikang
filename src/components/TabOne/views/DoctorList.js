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
import { Header, SelectBox } from '../../common/';
//import stylesheet
import { DoctorListStyle as styles } from '../../styles/';

//import common list
import { UltimateFlatList } from '../../common/'

//import data handle func
import {
  handleNearby,
} from '../data/';

//import tranfer
import { opppsiteDepartment } from '../../../utils/transferAbbr';

//import render doctor list item
import DoctorListItem from './DoctorListItem';

const sortData = [
  {
    label: '默认排序',
    value: '默认排序',
  },
  {
    label: '帮助患者最多',
    value: '帮助患者最多',
  },
  {
    label: '价格由高到低',
    value: '价格由高到低',
  },
  {
    label: '价格由低到高',
    value: '价格由低到高'
  },
  {
    label: '从医时间最长',
    value: '从医时间最长'
  }
];


class DoctorList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      sort: '默认排序',
      dep: '全部科室',
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    //get the token from the navigate
    const { token } = navigation.state.params;
    //pull to refresh 
    dispatch({ type: GET_DOCTORS, payload: { token, refresh: true } });
  }

  handleSelectSort = (sort) => {
    this.setState({
      sort,
    })
  }

  handleSelectDep = (dep) => {
    this.setState({
      dep,
    })
  }


  render() {
    const { doctors, navigation } = this.props;
    const { token } = navigation.state.params;

    const { dep, sort } = this.state;
    console.log('dep', sort, opppsiteDepartment);

    let nearbyDoctor = [];
    if (doctors) {
      //the second params for horizontal(true) show ten item,
      nearbyDoctor = handleNearby(doctors.get('results'), false, false , opppsiteDepartment[dep], sort);
    }

    return (
      <View style={styles.hospitalContainer}>
        <UltimateFlatList
            listStyle={{
              flex: 1,
              backgroundColor: '#F5F6F7',
              marginTop: 81 + 49,
            }}
            listData={nearbyDoctor}
            method={GET_DOCTORS}
            data={doctors}
            enableRefresh={true}
            refreshMethod={[ GET_DOCTORS ]}
            dispatch={this.props.dispatch}
            token={token}
            footText={"到底了哦"}
            renderItem={(item) => <DoctorListItem token={token} navigation={navigation} item={item} />}
        />
        
        <SelectBox 
          titleLeft={"全部科室"}
          titleRight={"默认排序"}
          selectStyle={{
            position: 'absolute',
            top: 81,
            left: 0,
            right: 0,
          }}
          sortData={sortData}
          handleSelectDep={this.handleSelectDep}
          handleSelectSort={this.handleSelectSort}
        />

        <Header
          headerText="附近医生"
          logoLeft={true}
          showGradient={true}
          navigation={navigation}
          headerStyle={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        />
      
      </View>
    )
  }
}

export default connect(
  state => getDoctorsSelector(state),
)(DoctorList);