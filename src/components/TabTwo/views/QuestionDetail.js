import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GET_SINGLE_QUESTION,
  GET_SINGLE_QUESTION_ALL_IMG,
  STAR_SINGLE_QUESTION,
} from '../../../constants/'

//import selector for computing data
import { getSingleQaSelector } from '../../../selectors/'


class QuestionDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    dispatch({ type: GET_SINGLE_QUESTION, payload: { token, id }});
    dispatch({ type: GET_SINGLE_QUESTION_ALL_IMG, payload: { token, id }});
  }

  render() {
    const { question, AllImg, dispatch, navigation } = this.props;
    const { token, id } = navigation.state.params;
    return (
      <View>
        <Text>{question && question.get('title')}</Text>
        <TouchableOpacity onPress={() => { dispatch({ type: STAR_SINGLE_QUESTION, payload: { token, id, question }})}}>
          <Text>关注</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  state => getSingleQaSelector(state),
)(QuestionDetail);