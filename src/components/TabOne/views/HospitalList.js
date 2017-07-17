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
  GET_HOSPITALS,  
} from '../../../constants/'

//import selector for computing data
import { getHospitalsSelector } from '../../../selectors/'

//import header common component
import { Header } from '../../common/';
//import stylesheet
import { DoctorListStyle as styles } from '../../styles/';

//import data handle func
import {
  handleNearby,
} from '../data/';

//import render doctor list item
import HospitalListItem from './HospitalListItem';

//import list item
import UltimateFlatList from '../../common/UltimateFlatList';


class HospitalList extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      loadingTop: false,
      loadingTail: false,
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    //get the token from the navigate
    const { token } = navigation.state.params;
    //pull to refresh 
    dispatch({ type: GET_HOSPITALS, payload: { token, refresh: true } });
  }

  render() {
    const { hospitals, navigation } = this.props;
    const { token } = navigation.state.params;

    let nearbyHospital = [];
    if (hospitals) {
      //the second params for horizontal(true) show ten item,
      nearbyHospital = handleNearby(hospitals.get('results'), false, true);
    }

    return (
      <View style={styles.hospitalContainer}>
        <Header
          headerText="附近医院"
          logoLeft={true}
          showGradient={true}
          navigation={navigation}
        />
        <UltimateFlatList
            listStyle={{
              flex: 1,
              backgroundColor: '#F5F6F7',
            }}
            renderItem={(item) => <HospitalListItem  item={item} navigation={navigation} token={token} />}
            listData={nearbyHospital}
            method={GET_HOSPITALS}
            data={hospitals}
            enableRefresh={true}
            refreshMethod={[ GET_HOSPITALS ]}
            dispatch={this.props.dispatch}
            token={token}
        />
      </View>
    )
  }
}

export default connect(
  state => getHospitalsSelector(state),
)(HospitalList);