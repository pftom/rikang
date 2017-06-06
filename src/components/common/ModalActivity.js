import React, { Component } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Bubbles } from 'react-native-loader';

class ModalActivity extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Modal
          animationType='fade'
          transparent={true}
          visible={this.props.modalVisibile}
        >
          <View style={[styles.container, styles.modalBackground]}>
            <Bubbles size={15} color="#FFF" />
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems: 'center',
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})

export default ModalActivity;