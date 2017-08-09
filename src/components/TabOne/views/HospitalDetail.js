import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  Image,
  FlatList,
  Animated,
  Platform,
  StatusBar,
  ActivityIndicator,
  RefreshControl,
  Dimensions,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import parse from 'url-parse';

import { transferHospitalClass } from '../../../utils/transferAbbr';

//import custom tabbar
import CustomTabBar from './CustomTabBar';

//import Header
import { Header } from '../../common/';

import px2dp from '../../../utils/px2dp';

//import selector for computing data
import { getHospitalSelector } from '../../../selectors/';

//import async action constants
import { GET_SINGLE_HOSPITAL, GET_SINGLE_HOSPITAL_DOCTORS } from '../../../constants/'

//import Hospital Doctor lists
import HospitalDoctors from './HospitalDoctors';


//import style
import { HospitalDetailStyle as styles } from '../../styles/';

//import doctor list item
import DoctorListItem from './DoctorListItem';


import {
  handleNearby,
  handleHospitalDoctors,
} from '../data/'


//for nav bar bifield
const items = [
  {
    id: 1,
    content: "医院介绍",
  },
  {
    id: 2,
    content: "入驻医生",
  },
];

const { width, height } = Dimensions.get('window');


class HospitalDetail extends PureComponent {

  constructor(props) {
    super(props);


    this.scrollViewY = new Animated.Value(0);

    this.state = {
      scrollY: 0,
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    dispatch({ type: GET_SINGLE_HOSPITAL, payload: { token, id }});
    dispatch({ type: GET_SINGLE_HOSPITAL_DOCTORS, payload: { token, id, refresh: true }})


    this.setState({
      scrollY: this.scrollViewY.interpolate({inputRange: [0, px2dp(136), px2dp(136)],outputRange: [0, px2dp(-136), px2dp(-136)]}),
    })
  }


  renderIntroSection = () => {
    const { hospital } = this.props;

    const rank = transferHospitalClass[hospital.get('rank')];

    let touchItems = [];
    //   {
    //     img: require('../img/phone.png'),
    //     content: '电话咨询',
    //   },
    //   {
    //     img: require('../img/location_opacity.png'),
    //     content: '查看地图',
    //   },
    // ];

    return (
      <Image source={{ uri: hospital.get('photo') }} style={styles.introSectionBox}>
        <View style={styles.introSectionContainer}>
          <View style={styles.identicalBox}>
            <Text style={styles.name}>{hospital.get('name')}</Text>
            <View style={styles.rankBox}>
              <Text style={styles.rank}>{rank[0] + rank[2]}</Text>
            </View>
          </View>
            <Text style={styles.location}>{hospital.get('location')}</Text>
            <View style={styles.touchBox}>
              {
                touchItems.map((item, key) => (
                  <TouchableOpacity key={key} onPress={() => { console.log('hhh' )}}>
                    <View style={styles.contentBox} >
                      <Image source={item.img} />
                      <Text style={styles.content}>{item.content}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </View>
        </View>
      </Image>
    )
  }

  renderDescription = (rowData) => {
    return (
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionBox}>
          <Text style={styles.description}>{rowData.description}</Text>
        </View>
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
    const { hospitalDoctors } = this.props;

    //only for posts exist and then get the next for judge has more
    if (hospitalDoctors) {
      const next = hospitalDoctors.get('next');
      return next !== null;
    }

    //initial data return true to show blank page
    return true;
  }


  _onEndReached = () => {
    //get loading for loading 
    const { isLoadingData } = this.props;

    //use id for discriminate answers and comments
    let { hospitalDoctors } = this.props;
    console.log('hospitalDcotors', hospitalDoctors);

    if (!this.hasMore() || this.state.loadingTail) {
      return;
    }

    if(hospitalDoctors) {
      const next = hospitalDoctors.get('next');

      this.setState({ loadingTail: true });
      const { navigation, dispatch } = this.props;
      const { token, id } = navigation.state.params;

      const { query } = parse(next, true);


      dispatch({ type: GET_SINGLE_HOSPITAL_DOCTORS, payload: { token, refresh: false, query, id } })
      

      this.endReachedTimer = setTimeout(() => {
        this.setState({ loadingTail: false });
      }, 2000);
    }
  }

  renderFoot = () => {
    if (!this.hasMore()) {
      return this.renderNoMore();
    }

    //use  for discriminate answers and comments
    let { hospitalDoctors } =  this.props;

    if (!hospitalDoctors || !this.state.loadingTail) {
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
    const { hospital, navigation, dispatch, hospitalDoctors } = this.props;
    const { token, id } = navigation.state.params;

    //for header opacity
    let animatedOpacity = this.scrollViewY.interpolate({
      inputRange: [0, px2dp(60), px2dp(136)],
      outputRange: [0, 0.6, 1],
    });

    //handle hospital data, only intro
    let hospitalIntro = [];
    if (hospital) {
      hospitalIntro.push({
        key: 1,
        description: hospital.get('description'),
      });
    }

    //handle hospital doctor lists data
    let hospitalDoctorLists = [];

    if (hospitalDoctors) {
      hospitalDoctorLists = handleHospitalDoctors(hospitalDoctors.get('results'));
      console.log('hospitalDoctorLists', hospitalDoctorLists);
    }

    let dataSource = [
      hospitalIntro,
      hospitalDoctorLists,
    ]


    let scrollY = this.scrollViewY.interpolate({
      inputRange: [px2dp(-90), px2dp(-50), 0, 0],
      outputRange: [px2dp(-90), px2dp(-50), 0, 0],
    });

    let style1 = {
      transform: [
        { translateY: this.state.scrollY }
      ]
    };

    let style2 = {
      transform: [{
        translateY: scrollY,
      }]
    };

    //
    if (Platform.OS === 'android') {
      style1.height = height + px2dp(80);
    }



    return (  
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />

        { hospital && this.renderIntroSection() }

        <Animated.View
          style={[ styles.topView, styles.topView1, style1]}
        >
          <View style={[ styles.listBox, styles.listBoxx]}>
            <ScrollableTabView
              style={{ backgroundColor: '#F5F6F7'}}
              renderTabBar={() => <CustomTabBar 
                                    custom={true}
                                  />}
            >
              {
                items.map((row, key) => (
                  <Animated.View
                  key={row.id}
                  tabLabel={row.content}
                   style=  {[ styles.listBox1, style2 ]}
              >
                <View style={ [styles.listBox2, styles.listBox5, key === 0 && styles.listBox7]}>
                  <FlatList
                      data={dataSource[key]}
                      enableEmptySections
                      removeClippedSubviews={false}
                      ListFooterComponent={() => this.renderFoot()}
                      onEndReached={() => {
                          //because of bug of the flatlist or sectionlist, will triger twice on scroll to end
                          //so, I add the onEndReachedCalledDuringMomentum for fix this bug
                          if (!this.onEndReachedCalledDuringMomentum) {
                            this._onEndReached();
                            this.onEndReachedCalledDuringMomentum = true;
                          }
                        }
                      }
                      
                      showsVerticalScrollIndicator={false}
                      automaticallyAdjustContentInsets={false}
                      onEndReachedThreshold={10}
                      onMomentumScrollBegin={() => { this.onEndReachedCalledDuringMomentum = false; }}
                      renderItem={({ item, index }) => {
                        console.log('item', item, index);
                        if (item.description) {
                          return this.renderDescription(item);
                        }
                        return <DoctorListItem  token={token} item={item} navigation={navigation} dispatch={dispatch} />
                      }}
                      onScroll={
                      Animated.event(
                        [{nativeEvent: {contentOffset: {y: this.scrollViewY }}}]
                      )
                    }
                      scrollEventThrottle={16}
                    />
                    </View>
                  </Animated.View>
                ))
              }
          </ScrollableTabView>
        </View>
        </Animated.View>


        <Header 
          headerText={hospital && hospital.get('name')}
          logoLeft={true} 
          animatedOpacity={animatedOpacity}
          navigation={navigation} 
          showGradient={true} 
        />
      </View>
    )
  }
}

export default connect(
  state => getHospitalSelector(state),
)(HospitalDetail);