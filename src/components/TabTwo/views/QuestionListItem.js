import React, { PureComponent } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';

import { connect } from 'react-redux';
//import selector for questionFav data
import { getQuestionFavSelector } from '../../../selectors/';


//import style
import { QuestionListStyle as styles } from '../styles/';

//import selector
import { getQuestionListSelector } from '../../../selectors/';

//import tag box
import { TagBox } from '../../common/';

//import action constants
import {
  STAR_SINGLE_QUESTION,
  CANCEL_STAR_SINGLE_QUESTION,
} from '../../../constants/';

class QuestionListItem extends PureComponent {
  
  render() {
    const { navigation, questionFav, token, item, dispatch, question, questionStarredFav } = this.props;
    let whetherStarred = false;

    //whether have fav this doctor
    questionStarredFav.map(question => {
      if (question && question.get('id') === item.id) {
        whetherStarred = true;
      }
    });

    let isMine = false;
    if (questionFav) {
      questionFav.map(ques => {
        if (ques.get('id') === item.id) {
          isMine = true;
        }
      })
    }

    const { 
      isStarSingleQuestion, 
      starSingleQuestionSuccess, 
      starSingleQuestionError,
      isCancelStarSingleQuestion,
      cancelStarSingleQuestionSuccess,
      cancelStarSingleQuestionError,
     } = this.props;


    let httpStatus = {
      isStarSingleQuestion,
      starSingleQuestionSuccess,
      starSingleQuestionError,
      isCancelStarSingleQuestion,
      cancelStarSingleQuestionSuccess,
      cancelStarSingleQuestionError,
    };

    return (
      <TouchableWithoutFeedback onPress={() => { navigation.navigate('QuestionDetail', { id: item.key, token, questionFav })}} style={styles.touchBox}>
        <View style={styles.container}>
            <View style={styles.QuestionBox}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.tagContainer}>
                <TagBox 
                  star={true} 
                  item={item} 
                  btnText={"关注"}
                  isMine={isMine}
                  navigation={navigation}
                  token={token}
                  httpStatus={httpStatus}
                  dispatch={dispatch}
                  whetherStarred={whetherStarred}
                  handleCancelStar={() => { dispatch({ type: CANCEL_STAR_SINGLE_QUESTION, payload: { token, id: item.id } }) }}
                  handleAddStar={() => { dispatch({ type: STAR_SINGLE_QUESTION, payload: { token, id: item.id, question } }) }}
                />
              </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default connect(
  state => getQuestionListSelector(state),
)(QuestionListItem);