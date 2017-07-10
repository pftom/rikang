import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, } from 'react-native';

import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

//import async action constants
import { 
  GET_SINGLE_QUESTION,

  GET_SINGLE_QUESTION_ALL_IMG,

  STAR_SINGLE_QUESTION,

  GET_SINGLE_QUESTION_ALL_ANSWERS,

  GET_SINGLE_QUESTION_ANSWER,
  GET_SINGLE_QUESTION_ANSWER_SUCCESS,
  GET_SINGLE_QUESTION_ALL_IMG_ERROR,
} from '../../../constants/'

//import selector for computing data
import { getSingleQaSelector } from '../../../selectors/'


class QuestionDetail extends PureComponent {

  componentDidMount() {
    const { navigation, dispatch } = this.props;
    const { token, id } = navigation.state.params;

    dispatch({ type: GET_SINGLE_QUESTION, payload: { token, id }});
    dispatch({ type: GET_SINGLE_QUESTION_ALL_IMG, payload: { token, id }});
    dispatch({ type: GET_SINGLE_QUESTION_ALL_ANSWERS, payload: { token, id }});
  }

  render() {
    const { question, AllImg, dispatch, navigation, answers } = this.props;
    const { token, id } = navigation.state.params;
    return (
      <View>
        <Text>{question && question.get('title')}</Text>
        <TouchableOpacity onPress={() => { dispatch({ type: STAR_SINGLE_QUESTION, payload: { token, id, question }})}}>
          <Text>关注</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { navigation.navigate('AnswerDetail', { token, id })}}>
          <Text>获取单个回答</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default connect(
  state => getSingleQaSelector(state),
)(QuestionDetail);