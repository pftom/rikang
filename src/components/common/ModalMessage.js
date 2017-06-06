import React, { Component } from 'react';
import { TouchableWithoutFeedback, Modal, View, Text } from 'react-native';

import { submitConfirm } from '../actions/user';

class ModalMessage extends Component {
  render() {
    return (
      <Modal
          animationType={'fade'}
          visible={!!failure}
          transparent={true}
        >
          <TouchableWithoutFeedback onPress={() => this.props.dispatch(submitConfirm())}>
            <View style={styles.box}>
            <View style={styles.modalBox}>
                <View style={styles.btnBox}>
                  <Text style={styles.btnText}>{this.props.message}</Text>
                </View>
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>
    )
  }
}