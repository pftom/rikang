import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  Image,
  ListView,
  Animated,
  Platform,
  StatusBar,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import { transferHospitalClass } from '../../../utils/transferAbbr';

//import custom tabbar
import CustomTabBar from './CustomTabBar';

//import Header
import { Header } from '../../common/';

//import selector for computing data
import { getHospitalSelector } from '../../../selectors/';

//import async action constants
import { GET_SINGLE_HOSPITAL, GET_SINGLE_HOSPITAL_DOCTORS } from '../../../constants/'

//import Hospital Doctor lists
import HospitalDoctors from './HospitalDoctors';

//import list data
import AnswerListItem from './AnswerListItem';
import CommentListItem from './CommentListItem';

//import style
import { HospitalDetailStyle as styles } from '../../styles/';

//import doctor list item
import DoctorListItem from './DoctorListItem';

import {
  handleNearby,
} from '../data/'


const lists = [];
for (let i = 0; i < 40; i++) {
  lists.push({
    "id": 1,
    "question": 1,
    "question_title": "为什么每次我进行撞墙练习后都会头痛",
    "diagnosis": "疾病预测",
    "prescription": "药物选择",
    "advice": "指导建议",
    "course": "推荐疗程",
    "picked": false,
    "upvotes": 3,
    "commentsCount": 4,
  });
};


const Commentlists = [];
for (let i = 0; i < 40; i++) {
  Commentlists.push({
    "id": 1,
    "patient": {
        "avatar": "http://localhost:8000/media/avatars/weappbig.png",
        "id": 3,
        "name": "example"
    },
    "ratings": 5,
    "anonymous": false,
    "body": "good",
    "created": "2017-07-03"
  });
};

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


class HospitalDetail extends PureComponent {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.scrollViewY = new Animated.Value(0);

    this.state = {
      scrollY: 0,
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    dispatch({ type: GET_SINGLE_HOSPITAL, payload: { token, id }});
    dispatch({ type: GET_SINGLE_HOSPITAL_DOCTORS, payload: { token, id }})


    this.setState({
      scrollY: this.scrollViewY.interpolate({inputRange: [0, 139, 139],outputRange: [0, -139, -139]}),
    })
  }


  renderIntroSection = () => {
    const { hospital } = this.props;

    const rank = transferHospitalClass[hospital.get('rank')];

    let touchItems = [
      {
        img: require('../img/phone.png'),
        content: '电话咨询',
      },
      {
        img: require('../img/location_opacity.png'),
        content: '查看地图',
      },
    ];

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
          <Text style={styles.description}>{rowData}</Text>
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

    if (!this.hasMore() || this.state.loadingTail) {
      return;
    }

    if(hospitalDoctors) {
      const next = hospitalDoctors.get('next');

      this.setState({ loadingTail: true });
      const { dispatch, token } = this.props;
      const { query } = parse(next, true);


      dispatch({ type: GET_SINGLE_HOSPITAL_DOCTORS, payload: { token, refresh: false, query } })
      

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
      inputRange: [0, 60, 139],
      outputRange: [0, 0.6, 1],
    });

    //handle hospital data, only intro
    let hospitalIntro = [];
    if (hospital) {
      hospitalIntro.push(hospital.get('description'));
    }

    //handle hospital doctor lists data
    let hospitalDoctorLists = [];
    if (hospitalDoctors) {
      hospitalDoctorLists = handleNearby(hospitalDoctors.get('results'));
    }

    let dataSource = [
      this.ds.cloneWithRows(hospitalIntro || []),
      this.ds.cloneWithRows(hospitalDoctorLists || [])
    ]


    let scrollY = this.scrollViewY.interpolate({
      inputRange: [-90, -50, 0, 0],
      outputRange: [-90, -50, 0, 0],
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
      style.height = height + 80;
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
              page={0}
              style={{ backgroundColor: '#F5F6F7'}}
              renderTabBar={() => <CustomTabBar custom={true} />}
            >
              {
                items.map((item, key) => (
                  <Animated.View
                  key={item.id}
                  tabLabel={item.content}
                   style=  {[ styles.listBox1, style2 ]}
              >
                <View style={ styles.listBox2}>
                  <ListView
                      dataSource={dataSource[key]}
                      enableEmptySections
                      renderFooter={() => this.renderFoot()}
                      onEndReached={() => this._onEndReached()}
                      showsVerticalScrollIndicator={false}
                      automaticallyAdjustContentInsets={false}
                      onEndReachedThreshold={10}
                      renderRow={(rowData) => {
                        if (item.id === 1) {
                          return this.renderDescription(rowData);
                        }
                        return <DoctorListItem item={rowData} token={token} key={rowData.id} navigation={navigation} />
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
          phone={true}
          navigate={true}
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