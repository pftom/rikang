import React, { Component } from 'react';
import { Text, View, AsyncStorage, Modal, Button , TextInput, Keyboard ,TouchableWithoutFeedback, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { submitComfirm } from '../actions/user';

import { fetchLogin } from '../actions/user';

class Login extends Component {

    constructor(props) {
      super(props);

      this.state = {
        value1: '',
        value2: '',
      }

      this.submit = this.submit.bind(this);
    }

    handleValueChange(value, key) {
      this.setState({
        [key]: value,
      });
    }
    

    submit() {
      this.props.dispatch(fetchLogin({
        username: this.state.value1,
        password: this.state.value2,
      }))
    }

    render() {
      const { failure, isFetching, dispatch } = this.props;
      return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Modal
            animationType={'fade'}
            visible={failure}
            transparent={true}
          >
            <TouchableWithoutFeedback onPress={() => dispatch(submitComfirm())}>
              <View style={styles.box}>
              <View style={styles.modalBox}>
                  <View style={styles.btnBox}>
                    <Text style={styles.btnText}>用户名或密码错误</Text>
                  </View>
              </View>
            </View>
            </TouchableWithoutFeedback>
          </Modal>
          <Image source={require('../components/img/logo.png')} style={styles.logo} />
          <View style={styles.textInputBox}>
                  <TextInput
                      onChangeText={value => this.handleValueChange(value, 'value1')}
                      clearButtonMode="while-editing"
                      placeholder="请输入您的学号"
                      placeholderTextColor="#989898"
                      blurOnSubmit={false}
                      autoCapitalize={'none'}
                      maxLength={9}
                      keyboardType={'number-pad'}
                      style={[styles.textInput, styles.addBorder]} 
                      returnKeyType="next" />
                  <TextInput style={[styles.textInput, styles.addBorder]}
                    clearButtonMode="while-editing"
                    secureTextEntry={true} 
                    returnKeyType="done"
                    placeholder="请输入您的密码"
                    maxLength={15}
                    placeholderTextColor='#989898'
                    onChangeText={value => this.handleValueChange(value, 'value2')}
                    onSubmitEditing={() => this.submit()}
                  />
          </View>
          <TouchableOpacity onPress={() => this.submit()}>
            <LinearGradient
              colors={['#FF0467', '#FC7437']}
              start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
              style={styles.textInput}
            >
              <Text style={styles.login}>登   录</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={styles.textBox}><Text style={styles.text}>初始密码为学号，登录后请立即修改</Text></View>
        </View>
      </TouchableWithoutFeedback>
    )
    }
}

Login.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
    alignItems: 'center',
  },
  logo: {
    marginTop: 102,
  },  
  login: {
    fontFamily: 'PingFangSC-Regular',
    fontSize: 24,
    color: '#FFFFFF',
    backgroundColor: 'transparent',
  },
  textInput: {
    width: 280,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addBorder: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    marginTop: 14,
    textAlign: 'center',
  },
  textInputBox: {
    marginBottom: 26,
    marginTop: 64,
  },
  text: {
    fontFamily: 'PingFangSC-Thin',
    fontSize: 14,
    color: '#000000',
  },
  textBox: {
    marginTop: 49
  },
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



const mapStateToProps = state => ({
  failure: state.auth.failure,
  isFetching: state.auth.isFetching,
});

export default connect(mapStateToProps)(Login);