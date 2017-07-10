import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GET_SINGLE_QUESTION_ANSWER
} from '../../../constants/'

//import selector for computing data
import { getSingleQaSelector } from '../../../selectors/'


class AnswerDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;
    
    dispatch({ type: GET_SINGLE_QUESTION_ANSWER, payload: { token, id }});
  }

  render() {
    // const { question, AllImg, dispatch, navigation, answers } = this.props;
    // const { token, id } = navigation.state.params;
    return (
      <View>
        <Text>hhh</Text>
      </View>
    )
  }
}

export default connect(
  state => getSingleQaSelector(state),
)(AnswerDetail);