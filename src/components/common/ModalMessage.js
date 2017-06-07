import React, { Component } from 'react';
import { TouchableWithoutFeedback, Modal, View, Text, StyleSheet } from 'react-native';

import { submitConfirm } from '../../actions/user';

class ModalMessage extends Component {

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  hideModal() {
    this.timer = setTimeout(() => {
      this.props.dispatch(submitConfirm());
    }, 1500)
  }

  render() {
    if (this.props.failure) {
      this.hideModal();
    }
    return (
      <Modal
          animationType={'fade'}
          visible={this.props.failure}
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

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalBox: {
    width: 160,
    padding: 30,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    backgroundColor: '#000',
    opacity: 0.8
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  }
})

export default ModalMessage;