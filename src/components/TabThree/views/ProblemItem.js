import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';

import { ProblemStyle as styles } from '../styles/'

class ProblemItem extends PureComponent {

  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableOpacity onPress={() => { console.log('hhh') }}>
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