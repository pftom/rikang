import React, { PureComponent } from 'react';
import { TextInput, View, Text, TouchableHighlight } from 'react-native';

import { BottomButtonStyle as styles } from '../styles/';

class BottomButton extends PureComponent {
  render() {
    const { jumpToScreen, content, navigation, isPay } = this.props;

    return (
      <View style={styles.BottomBox}>
        <TouchableHighlight onPress={() => { navigation.navigate(jumpToScreen)}} style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Text style={styles.content}>{content}</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

export default BottomButton;