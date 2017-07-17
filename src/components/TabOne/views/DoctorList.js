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
    dispatch({ type: GET_DOCTORS, payload: { token, refresh: true } });

    this.setState({
      loadingTop: true,
    });

    this.mountTimer = setTimeout(() => {
      this.setState({ loadingTop: false });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.mountTimer);
    clearTimeout(this.refreshTimer);
    clearTimeout(this.endReachedTimer);
  }


  renderNoMore() {
    return (
      <View style={styles.loadingMore}>
        <Text style={styles.loadingMoreText}>没有更多了...</Text>
      </View>
    )
  }

  hasMore = () => {
    const { doctors } = this.props;

    //only for doctors exist and then get the next for judge has more
    if (doctors) {
      const next = doctors.get('next');
      return next !== null;
    }

    //initial data return true to show blank page
    return true;
  }

  _onRefresh = () => {
    //judge whether is loading, if it is, wait for loading
    if (this.state.loadingTop) {
      return;
    }

    this.setState({ loadingTop: true });

    const { navigation, dispatch } = this.props;
    const { token } = navigation.state.params;

    dispatch({ type: GET_DOCTORS, payload: { token, refresh: true } });

    this.refreshTimer = setTimeout(() => {
      this.setState({ loadingTop: false });
    }, 2000);
  }

  _onEndReached = () => {
    //get loading for loading 
    const { doctors, isLoadingData } = this.props;

    if (!this.hasMore() || this.state.loadingTail) {
      return;
    }

    if(doctors) {
      const next = doctors.get('next');

      this.setState({ loadingTail: true });
      const { navigation, dispatch } = this.props;
      const { token } = navigation.state.params;
      const { query } = parse(next, true);


      dispatch({ type: GET_DOCTORS, payload: { token, refresh: false, query } })
      

      this.endReachedTimer = setTimeout(() => {
        this.setState({ loadingTail: false });
      }, 2000);
    }
  }


  renderFoot = () => {

    if (!this.hasMore()) {
      return this.renderNoMore();
    }

    const { doctors } = this.props;

    if (!doctors || !this.state.loadingTail) {
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