import React, { PureComponent } from 'react';
import { 
  TouchableWithoutFeedback, 
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

//import custom tabbar
import CustomTabBar from './CustomTabBar';

//import selector for computing data
import { getHospitalSelector } from '../../../selectors/';

//import async action constants
import { GET_SINGLE_HOSPITAL, GET_SINGLE_HOSPITAL_DOCTORS } from '../../../constants/'

//import Hospital Doctor lists
import HospitalDoctors from './HospitalDoctors';

//import list data
import AnswerListItem from './AnswerListItem';
import CommentListItem from './CommentListItem';

import { HospitalDetailStyle as styles } from '../../styles/'


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

    let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.scrollViewY = new Animated.Value(0);
      
    this.state = {
      scrollY: 0,
      activeOpacity: 1,
      dataSource1: ds.cloneWithRows(lists),
      dataSource2: ds.cloneWithRows(Commentlists),
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    console.log('single', token);
    dispatch({ type: GET_SINGLE_HOSPITAL, payload: { token, id }});


    this.setState({
      activeOpacity: this.scrollViewY.interpolate({inputRange: [0, 100, 200],outputRange: [1, 0.3, 0]}),
      scrollY: this.scrollViewY.interpolate({inputRange: [0, 200, 200],outputRange: [0, -200, -200]}),
    })
  }


  renderIntroSection = () => {
    const { hospital } = this.props;
    return (
      <View style={styles.introSectionBox}>
        <View style={{ 
          height: 20, width: 20,
          shadowColor: '#BABABA',
    shadowOffset: { width: 2, height: 3},
    shadowRadius: 10,
    shadowOpacity: 1,
        }}>
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
    let hospitalDoctors = this.props;

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
    let hospitalDoctors =  this.props;

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
    const { hospital, navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;


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
          <View style={styles.listBox}>
            <ScrollableTabView
              page={0}
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
                      dataSource={item.id === 1 ? this.state.dataSource1 : this.state.dataSource2}
                      enableEmptySections
                      renderFooter={() => this.renderFoot(item.id)}
                      onEndReached={() => this._onEndReached(item.id)}
                      showsVerticalScrollIndicator={false}
                      automaticallyAdjustContentInsets={false}
                      onEndReachedThreshold={10}
                      renderRow={(rowData) => {
                        if (item.id === 1) {
                          return <AnswerListItem item={rowData} key={rowData.id} />
                        }
                        return <CommentListItem item={rowData} key={rowData.id} />
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
      </View>
    )
  }
}

export default connect(
  state => getHospitalSelector(state),
)(HospitalDetail);