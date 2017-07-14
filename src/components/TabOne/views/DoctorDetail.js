import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  Animated,
  Platform,
  Dimensions,
  Image,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';

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

import AnswerList from './AnswerList';


//import styles 
import { DoctorDetailStyle as styles } from '../../styles/';
//import header
import Header from '../../common/Header';

const { width, height } = Dimensions.get('window');


class DoctorDetail extends PureComponent {

  constructor(props) {
    super(props);

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
    dispatch({ type: GET_SINGLE_DOCTOR_ANSWERS, payload: { token, id }});
    dispatch({ type: GET_SINGLE_DOCTOR_COMMENTS, payload: { token, id }});

    let { scrollY } = this.refs.answerList.state;

    this.setState({
      activeOpacity: scrollY.interpolate({inputRange: [0, 200],outputRange: [1, 0]}),
      imgOpacity: scrollY.interpolate({inputRange: [0, 200-10, 200],outputRange: [0, 0, 1]}),
      scrollY: scrollY.interpolate({inputRange: [0, 200, 200],outputRange: [0, -200, -200]}),
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

  renderQAList = () => {
    const { doctor } = this.props;

    let style = {
      transform: [{
        translateY: this.state.scrollY
      }]
    }

    if (Platform.OS === 'android') {
      style.height = height + 80;
    }

    return (
      <Animated.View style={[ styles.topView, style ]}>
        <View style={{
          width: width,
          marginTop: 200,
          height: height - 81,
        }}>
          <ScrollableTabView 
            page={0} 
            renderTabBar={() => <CustomTabBar />}
          >
            <AnswerList ref="answerList" tabLabel="回答的问题" name={doctor && doctor.name} />
            <AnswerList tabLabel="患者评论" />
          </ScrollableTabView>
        </View>
      </Animated.View>
    )
  }

  render() {
    const { navigation, comments, answers, doctor, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    console.log('doctor', doctor && doctor.toJS());
    return (
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#23BCBB', '#45E994']}
        style={styles.gradientBox}>
        <Header logoLeft={true} navigation={navigation} showGradient={false} />
        { doctor && this.renderIntroSection()}
        {this.renderQAList()}
    </LinearGradient>
    )
  }
}

//之后做answers和comments的展现，以及IM之后的new comment

export default connect(
  state => getDoctorSelector(state),
)(DoctorDetail);