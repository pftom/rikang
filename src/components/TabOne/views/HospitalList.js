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
import Header from '../../common/Header';
//import stylesheet
import { DoctorListStyle as styles } from '../../styles/';

//import data handle func
import {
  handleNearby,
} from '../data/';

//import render doctor list item
import HospitalListItem from './HospitalListItem';


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

    this.setState({
      loadingTop: true,
    });

    this.mountTimer = setTimeout(() => {
      this.setState({ loadingTop: false });
    }, 2000);
  }


  renderNoMore() {
    return (
      <View style={styles.loadingMore}>
        <Text style={styles.loadingMoreText}>没有更多了...</Text>
      </View>
    )
  }

  hasMore = () => {
    const { hospitals } = this.props;

    //only for doctors exist and then get the next for judge has more
    if (hospitals) {
      const next = hospitals.get('next');
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

    dispatch({ type: GET_HOSPITALS, payload: { token, refresh: true } });

    this.refreshTimer = setTimeout(() => {
      this.setState({ loadingTop: false });
    }, 2000);
  }

  _onEndReached = () => {
    //get loading for loading 
    const { hospitals, isLoadingData } = this.props;

    if (!this.hasMore() || this.state.loadingTail) {
      return;
    }

    if(hospitals) {
      const next = hospitals.get('next');

      this.setState({ loadingTail: true });
      const { navigation, dispatch } = this.props;
      const { token } = navigation.state.params;
      const { query } = parse(next, true);


      dispatch({ type: GET_HOSPITALS, payload: { token, refresh: false, query } })
      

      this.endReachedTimer = setTimeout(() => {
        this.setState({ loadingTail: false });
      }, 2000);
    }
  }


  renderFoot = () => {

    if (!this.hasMore()) {
      return this.renderNoMore();
    }

    const { hospitals } = this.props;

    if (!hospitals || !this.state.loadingTail) {
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
    const { hospitals, navigation } = this.props;
    const { token } = navigation.state.params;

    let nearbyHospital = [];
    if (hospitals) {
      //the second params for horizontal(true) show ten item,
      nearbyHospital = handleNearby(hospitals.get('results'), false, true);
      console.log('nearbyDoctor', nearbyHospital);
    }

    return (
      <FlatList
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
          refreshControl={
            <RefreshControl
              refreshing={this.state.loadingTop}
              onRefresh={this._onRefresh}
              title='拼命加载中...'
            />
          }
          onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
          ListFooterComponent={this.renderFoot}
          renderItem={({ item, key }) => <HospitalListItem key={key}  item={item} navigation={navigation} token={token} />}
          data={nearbyHospital}
      />
    )
  }
}

HospitalList.navigationOptions = ({ navigation }) => ({
  headerTitle: (
    <View style={styles.headerTitle}>
      <Header 
        headerText="附近医院"
        logoLeft={require('../../common/img/back.png')}
        navigation={navigation}
      />
    </View>
  ),
})

export default connect(
  state => getHospitalsSelector(state),
)(HospitalList);