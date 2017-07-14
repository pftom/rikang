import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, 
  Text, 
  View, 
  Animated,
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import LinearGradient from 'react-native-linear-gradient';

//import selector for computing data
import { getDoctorSelector } from '../../../selectors/';

//import async action constants
import { 
  GET_SINGLE_DOCTOR,
  GET_SINGLE_DOCTOR_ANSWERS,
  GET_SINGLE_DOCTOR_COMMENTS,

  ADD_SINGLE_DOCTOR_FAV,
} from '../../../constants/';


//import styles 
import { DoctorDetailStyle as styles } from '../../styles/';
//import header
import Header from '../../common/Header';


class DoctorDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    
    dispatch({ type: GET_SINGLE_DOCTOR, payload: { token, id }});
    dispatch({ type: GET_SINGLE_DOCTOR_ANSWERS, payload: { token, id }});
    dispatch({ type: GET_SINGLE_DOCTOR_COMMENTS, payload: { token, id }});
  }

  renderIntroSection = () => {
    return (
      <View style={styles.introBox}>
        <Animated.View style={styles.introTransferBox}>
          <Text style={styles.text}>hhhh</Text>
        </Animated.View>
      </View>
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
    </LinearGradient>
    )
  }
}

//之后做answers和comments的展现，以及IM之后的new comment

export default connect(
  state => getDoctorSelector(state),
)(DoctorDetail);