import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  Animated,
  Platform,
  Dimensions,
  Image,
  ScrollView,
  ListView,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import px2dp from '../../../utils/px2dp';

//import custom tabbar
import CustomTabBar from './CustomTabBar';

//import selector for computing data
import { getDoctorSelector } from '../../../selectors/';

//import transfer doctor
import {
  transferDepartment,
  transferTitle,
} from '../../../utils/transferAbbr';

//import async action constants
import { 
  GET_SINGLE_DOCTOR,
  GET_SINGLE_DOCTOR_ANSWERS,
  GET_SINGLE_DOCTOR_COMMENTS,

  ADD_SINGLE_DOCTOR_FAV,
} from '../../../constants/';

//import list data
import AnswerListItem from './AnswerListItem';
import CommentListItem from './CommentListItem';


//import styles 
import { DoctorDetailStyle as styles } from '../../styles/';
//import header
import { Header } from '../../common/';
//import Bottom buttom
import { BottomButton } from '../../common/'

const { width, height } = Dimensions.get('window');

//import handle data
import {
  handleAnswers,
} from '../../TabTwo/data/'

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
    content: "回答的问题",
  },
  {
    id: 2,
    content: "患者评论",
  },
];


class DoctorDetail extends PureComponent {

  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.scrollViewY = new Animated.Value(0);
      
    this.state = {
      scrollY: 0,
      activeOpacity: 1,
      imgOpacity: 0,
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    
    dispatch({ type: GET_SINGLE_DOCTOR, payload: { token, id }});
    dispatch({ type: GET_SINGLE_DOCTOR_ANSWERS, payload: { token, id, refresh: true }});
    dispatch({ type: GET_SINGLE_DOCTOR_COMMENTS, payload: { token, id, refresh: true }});

    this.setState({
      activeOpacity: this.scrollViewY.interpolate({inputRange: [0, 100, 200],outputRange: [1, 0.3, 0]}),
      imgOpacity: this.scrollViewY.interpolate({inputRange: [0, 200-20, 200],outputRange: [0, 0, 1]}),
      scrollY: this.scrollViewY.interpolate({inputRange: [0, 200, 200],outputRange: [0, -200, -200]}),
    })
  }

  renderIntroBottom = (item) => {
    return (
      <View style={styles.contentBox}>
        <Text style={styles.content}>{item.content}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    )
  }

  renderIntroSection = () => {
    const { doctor } = this.props;

    let bottomData = [
      {
        title: '从医时间',
        content: doctor.get('years'),
      },
      {
        title: '用户评分',
        content: doctor.get('ratings'),
      },
      {
        title: '已帮助患者',
        content: doctor.get('patient_num'),
      },
    ];


    const { navigation } = this.props;
    const { token, id } = navigation.state.params;

    return (
      <View style={styles.introBox}>
        <Animated.View style={[ styles.introTransferBox, { opacity: this.state.activeOpacity } ]}>

          <View style={styles.introContainer}>
              <View style={styles.introTopBox}>
                <View style={styles.introTopLeftBox}>
                  <Image source={{ uri: doctor.get('avatar') }} style={styles.avatar} />
                </View>
                <View style={styles.introTopRightBox}>

                  <View style={styles.identicalBox}>
                    <Text style={styles.name}>{doctor.get('name')}</Text>
                    <Text style={styles.identical}>{transferDepartment[doctor.get('department')]} {transferTitle[doctor.get('title')]}</Text>
                  </View>

                  <View style={styles.hospitalBox}>
                    <Text style={styles.hospitalName}>{doctor.get('hospital_name')}</Text>
                  </View>

                  <TouchableOpacity onPress={() => { navigation.navigate('DoctorDetailInfo', { token, id }) }}>
                    <View style={styles.goDetailBox}>
                      <Text style={styles.goDetailText}>查看详细资料</Text>
                      <Image source={require('../img/go.png')} />
                    </View>
                  </TouchableOpacity>
                </View>
             </View>

            <View style={styles.introBottomBox}>
              {
                this.renderIntroBottom(bottomData[0])
              }
              <View style={styles.border} />
              {
                this.renderIntroBottom(bottomData[1])
              }
              <View style={styles.border} />
              {
                this.renderIntroBottom(bottomData[2])
              }
            </View>
          </View>
          
        </Animated.View>
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

  hasMore = (id) => {
    let data = id === 1 ? this.props.answers : this.props.comments;

    //only for posts exist and then get the next for judge has more
    if (data) {
      const next = data.get('next');
      return next !== null;
    }

    //initial data return true to show blank page
    return true;
  }


  _onEndReached = (id) => {
    //get loading for loading 
    const { isLoadingData } = this.props;

    //use id for discriminate answers and comments
    let data = id === 1 ? this.props.answers : this.props.comments;

    if (!this.hasMore(id) || this.state.loadingTail) {
      return;
    }

    if(data) {
      const next = data.get('next');

      this.setState({ loadingTail: true });
      const { navigation, dispatch } = this.props;
      const { token, id } = navigation.state.params;
      const { query } = parse(next, true);


      dispatch({ type: id === 1 ? GET_SINGLE_DOCTOR_ANSWERS : GET_SINGLE_DOCTOR_COMMENTS, payload: { token, id, refresh: false, query } })
      

      this.endReachedTimer = setTimeout(() => {
        this.setState({ loadingTail: false });
      }, 2000);
    }
  }

  renderFoot = (id) => {
    //id for discriminate list kind
    if (!this.hasMore(id)) {
      return this.renderNoMore();
    }

    //use id for discriminate answers and comments
    let data = id === 1 ? this.props.answers : this.props.comments;

    if (!data || !this.state.loadingTail) {
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
    const { navigation, comments, answers, doctor, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    let scrollY = this.scrollViewY.interpolate({
      inputRange: [-90, -50, 0, 0],
      outputRange: [-90, -50, 0, 0],
    });

    let style1 = {
      transform: [
        { translateY: this.state.scrollY }
      ]
    }

    let style2 = {
      transform: [{
        translateY: scrollY,
      }]
    }

    let answerList = [];
    if (answers) {
      answerList = handleAnswers(answers.get('results'));
    }

    answerList = this.ds.cloneWithRows(answerList);

    let commentList = [];
    if (comments) {
      commentList = handleAnswers(comments.get('results'));
    }

    commentList = this.ds.cloneWithRows(commentList);

    //
    if (Platform.OS === 'android') {
      style.height = height + 80;
    }

    console.log('doctor', doctor && doctor.toJS());
    return (
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#23BCBB', '#45E994']}
        style={styles.gradientBox}>


        { doctor && this.renderIntroSection() }


        <Animated.View
          style={[ styles.topView, style1]}
        >
          <View style={styles.listBox}>
            <ScrollableTabView
              page={0}
              renderTabBar={() => <CustomTabBar custom={false} />}
            >
              {
                items.map((item, key) => (
                  <Animated.View
                  key={item.id}
                  tabLabel={item.content}
                   style=  {[ styles.listBox1, style2 ]}
              >
                <View style={[ styles.listBox2 ]}>
                  <ListView
                      dataSource={item.id === 1 ? answerList : commentList}
                      enableEmptySections
                      renderFooter={() => this.renderFoot(item.id)}
                      onEndReached={() => this._onEndReached(item.id)}
                      showsVerticalScrollIndicator={false}
                      automaticallyAdjustContentInsets={false}
                      onEndReachedThreshold={10}
                      renderRow={(rowData) => {
                        if (item.id === 1) {
                          return <AnswerListItem token={token} navigation={navigation} item={rowData} key={rowData.id} name={doctor && doctor.get('name')} />
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


        <Header 
          logoLeft={true} 
          shareHeart={true}
          share={true}
          imgOpacity={this.state.imgOpacity}
          leftImg={doctor && doctor}
          navigation={navigation} 
          showGradient={false} 
          animatedOpacity={false}
        />

        <BottomButton content="向他求助" navigation={navigation} jumpToScreen="ConsultOrder" isPay={false} />
    </LinearGradient>
    )
  }
}

//之后做answers和comments的展现，以及IM之后的new comment

export default connect(
  state => getDoctorSelector(state),
)(DoctorDetail);