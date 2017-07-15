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
import Header from '../../common/Header';

const { width, height } = Dimensions.get('window');

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

const items = ["回答的问题", "患者评论"];


class DoctorDetail extends PureComponent {

  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.scrollViewY = new Animated.Value(0);
      
    this.state = {
      scrollY: 0,
      activeOpacity: 1,
      imgOpacity: 0,
      dataSource: ds.cloneWithRows(lists),
    }
  }

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    
    dispatch({ type: GET_SINGLE_DOCTOR, payload: { token, id }});
    dispatch({ type: GET_SINGLE_DOCTOR_ANSWERS, payload: { token, id }});
    dispatch({ type: GET_SINGLE_DOCTOR_COMMENTS, payload: { token, id }});

    this.ds
    this.setState({
      activeOpacity: this.scrollViewY.interpolate({inputRange: [0, 200],outputRange: [1, 0]}),
      imgOpacity: this.scrollViewY.interpolate({inputRange: [0, 200-10, 200],outputRange: [0, 0, 1]}),
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

                  <View style={styles.goDetailBox}>
                    <Text style={styles.goDetailText}>查看详细资料</Text>
                    <Image source={require('../img/go.png')} />
                  </View>
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

  

  render() {
    const { navigation, comments, answers, doctor, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    let scrollY = this.scrollViewY.interpolate({
      inputRange: [-90, -50, 0, 0],
      outputRange: [-90, -50, 0, 0],
    })

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
              renderTabBar={() => <CustomTabBar />}
            >
              {
                items.map((item, key) => (
                  <Animated.View
                  key={key}
                  tabLabel={item}
                   style=  {[ styles.listBox1, style2 ]}
              >
                <View style={ styles.listBox2}>
                  <ListView
                      dataSource={this.state.dataSource}
                      enableEmptySections
                      showsVerticalScrollIndicator={false}
                      automaticallyAdjustContentInsets={false}
                      onEndReachedThreshold={10}
                      renderRow={(rowData) => <CommentListItem item={rowData} key={rowData.id} name={doctor && doctor.get('name')} />}
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
        <Header logoLeft={true} navigation={navigation} showGradient={false} />
    </LinearGradient>
    )
  }
}

//之后做answers和comments的展现，以及IM之后的new comment

export default connect(
  state => getDoctorSelector(state),
)(DoctorDetail);