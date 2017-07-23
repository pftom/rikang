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

//import tag box
import { TagBox } from '../../common/';

//import action constants
import {
  STAR_SINGLE_QUESTION,
  CANCEL_STAR_SINGLE_QUESTION,
} from '../../../constants/';

class QuestionListItem extends PureComponent {
  
  render() {
    const { navigation, token, item, dispatch, question, questionFav } = this.props;
    let whetherStarred = false;

    //whether have fav this doctor
    questionFav.map(question => {
      if (question && question.get('id') === item.id) {
        whetherStarred = true;
      }
    })

    return (
      <TouchableWithoutFeedback onPress={() => { navigation.navigate('QuestionDetail', { id: item.key, token })}} style={styles.touchBox}>
        <View style={styles.container}>
            <View style={styles.QuestionBox}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.tagContainer}>
                <TagBox 
                  star={true} 
                  item={item} 
                  btnText={"关注"}
                  navigation={navigation}
                  token={token}
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

export default QuestionListItem;