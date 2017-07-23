import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { ProblemStyle as styles } from '../styles/'

class ProblemItem extends PureComponent {

  render() {
    const { item, navigation, token } = this.props;

    return (
      <TouchableOpacity onPress={() => { navigation.navigate('QuestionDetail', { id: item.id, token }) }}>
        <View style={styles.problemContainer}>
          <View style={styles.problemBox}>
            <Text style={styles.title}>{"               " + item.title}</Text>
            {
              item && (
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