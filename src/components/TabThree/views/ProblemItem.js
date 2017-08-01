import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image, Platform } from 'react-native';

import { ProblemStyle as styles } from '../styles/'

class ProblemItem extends PureComponent {

  render() {
    const { item, navigation, token } = this.props;

    let hint = item.title;
    if (item && item.answer_num) {
      if (Platform.OS === 'ios') {
        hint = "               " + hint;
      } else {
        hint = "                    " + hint;
      }
    }

    let showHint = false;
    if (item && item.answer_num !== 0) {
      showHint = true;
    }

    return (
      <TouchableOpacity onPress={() => { navigation.navigate('QuestionDetail', { id: item.id, token }) }}>
        <View style={styles.problemContainer}>
          <View style={styles.problemBox}>
            <Text style={styles.title}>{hint}</Text>
            {
              showHint && (
                <View style={styles.answerCountBox}>
                  <Text style={styles.answerCount}>{item.answer_num}个新回答</Text>
                </View>
              )
            }
          </View>
        </View>
      </TouchableOpacity>
    )
  }

}

export default ProblemItem;