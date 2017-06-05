import React, { Component } from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import LinearGradient from 'react-native-linear-gradient';


const MAX_POINTS = 300;

class ProgressChart extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const fill = 300 / MAX_POINTS * 100;
    return (
      <View>
        <AnimatedCircularProgress
          size={85}
          width={3}
          fill={fill}
          tintColor="#FF0467"
          style={styles.modalContainer}
          >
          {
            (fill) => {
              if(Math.abs(100 - fill) < 5) {
                return (
                  <View style={styles.modalBox}>
                    <Text style={styles.modalText}>{this.props.modalTitle}</Text>
                    <TouchableOpacity
                      onPress={() => { 
                        this.props.changeStatus();
                      }}
                      style={[styles.btn]}
                    >
                      <Text style={styles.btnText}>{this.props.modalBtn}</Text>
                    </TouchableOpacity>
                  </View>
                )
              }
              return <Text style={styles.loadText}>{this.props.progressText}</Text>
            }
          }
        </AnimatedCircularProgress>

      </View>
  )
  }
}

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
            <View style={[styles.innerContainer]}>
              <ProgressChart changeStatus={this.props.changeStatus} {...this.props} />
            </View>
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
  },
  modalBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  innerContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  progressText: {
    backgroundColor: 'black'
  },
  modalBox: {
    position: 'absolute',
    width: 290,
    height: 100,
    backgroundColor: '#FFF',
    marginLeft: -100,
  },
  modalText: {
    marginBottom: 20,
    fontFamily: 'PingFangSC-Light',
    fontSize: 18,
    marginLeft: 25,
    color: '#FF0467',
  },
  btn: {
    alignItems: 'center',
    marginTop: 10
  },
  btnText: {
    fontSize: 18,
    margin: 10,
  },
  loadText: {
    marginTop: 10,
  }
})

export default ModalActivity;