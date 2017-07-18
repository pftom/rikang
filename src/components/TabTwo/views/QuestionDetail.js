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
import { getSingleQaSelector } from '../../../selectors/';

import { Header } from '../../common/';

//import tag box
import { TagBox } from '../../common/';

//import handle func
import { handleQuestion, handleAnswers } from '../data/';

//import style
import { QaDetailStyle as styles } from '../styles/';


//import list
import { UltimateFlatList } from '../../common/';

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

    let answerList = [];
    if (answers) {
      answerList = handleAnswers(answers);
    }

    const solvedFlag = question && question.has('solved') && question.get('solved');

    return (
      <View style={styles.container}>
        <Header
          logoLeft={true}
          headerText={"问题详情"}
          navigation={navigation}
          showGradient={true}
        />

        {
          question && (
            <View style={styles.questionContainer}>
              <View style={styles.topBox}>
                  <Text style={styles.title}>
                    {question.get('title')}
                    {
                      solvedFlag && (
                        <Text style={styles.solved}>（已解决）</Text>
                      )
                    }
                  </Text>  
                  
                </View>
                <View style={styles.body}>
                  <Text style={styles.content}>{question.get('body')}</Text>
                </View>
                <TagBox star={true} item={handleQuestion(question)} />
            </View>
          )
        }

        {
          answers && (
            <UltimateFlatList
              listStyle={{
                flex: 1,
                backgroundColor: '#F5F6F7',
              }}

            />
          )
        }
      </View>
    )
  }
}

export default connect(
  state => getSingleQaSelector(state),
)(QuestionDetail);