import React, { PureComponent } from 'react';
import { TextInput, View, Text, TouchableWithoutFeedback } from 'react-native';

import { BottomButtonStyle as styles } from '../styles/';

class BottomButton extends PureComponent {
  render() {
    const { jumpToScreen, content, navigation, isPay, data } = this.props;

    return (
      <View style={styles.BottomBox}>
        <TouchableWithoutFeedback onPress={() => { navigation.navigate(jumpToScreen, { data, })}} style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Text style={styles.content}>{content}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default BottomButton;