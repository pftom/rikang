import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  Animated,
  Platform,
  Dimensions,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';
import ScrollableTabView from 'react-native-scrollable-tab-view';

//import custom tabbar
import CustomTabBar from './CustomTabBar';

//import selector for computing data
import { getDoctorSelector } from '../../../selectors/';

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
      activeOpacity: scrollY.interpolate({inputRange: [0, 189],outputRange: [1, 0]}),
      imgOpacity: scrollY.interpolate({inputRange: [0, 189-10, 189],outputRange: [0, 0, 1]}),
      scrollY: scrollY.interpolate({inputRange: [0, 189, 189],outputRange: [0, -189, -189]}),
    })
  }

  renderIntroSection = () => {
    return (
      <View style={styles.introBox}>
        <Animated.View style={[ styles.introTransferBox, { opacity: this.state.activeOpacity } ]}>
          <Text style={styles.text}>hhhh</Text>
        </Animated.View>
      </View>
    )
  }

  renderQAList = () => {

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
          marginTop: 189,
          height: height - 81,
        }}>
          <ScrollableTabView 
            page={0} 
            renderTabBar={() => <CustomTabBar />}
          >
            <AnswerList ref="answerList" tabLabel="回答的问题" />
            <AnswerList tabLabel="患者的评论" />
          </ScrollableTabView>
        </View>
      </Animated.View>
    )
  }

  render() {
    const { navigation, comments, answers, doctor, dispatch } = this.props;
    const { token, id } = navigation.state.params;


    return (
      <LinearGradient
        start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
        colors={['#23BCBB', '#45E994']}
        style={styles.gradientBox}>
        <Header logoLeft={true} navigation={navigation} showGradient={false} />
        {this.renderIntroSection()}
        {this.renderQAList()}
    </LinearGradient>
    )
  }
}

//之后做answers和comments的展现，以及IM之后的new comment

export default connect(
  state => getDoctorSelector(state),
)(DoctorDetail);