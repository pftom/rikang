import React, { PureComponent } from 'react';
import { TextInput, View, Text, TouchableWithoutFeedback } from 'react-native';

import { BottomButtonStyle as styles } from '../styles/';

class BottomButton extends PureComponent {

  handleBtn = () => {
    const { kind, navigation, token, dispatch, data, jumpToScreen } = this.props;

    if (kind === 'jumpPay') {
      navigation.navigate(jumpToScreen, { token, data, dispatch })
    }

    if (kind === 'popUpPayingPage') {
      this.props.showModal();
    }

    if (kind === 'goPay') {
      this.props.handlePayPage(this.props.isAlipay)
    }
  }

  render() {
    const { jumpToScreen, content, navigation, isPay, data } = this.props;

    return (
      <View style={[ styles.BottomBox, this.props.boxStyle ]}>
        <TouchableWithoutFeedback onPress={() => { this.handleBtn() }} style={styles.buttonContainer}>
          <View style={styles.buttonBox}>
            <Text style={[ styles.content, this.props.textStyle ]}>{content}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

export default BottomButton;