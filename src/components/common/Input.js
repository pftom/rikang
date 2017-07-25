import React, { Component } from 'react';
import { TextInput, View, Image, Text, TouchableHighlight } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { PutQuestionStyle as styles } from '../styles/';
import { HintMessage } from './HintMessage';

import { Toast } from 'antd-mobile';

import { REGISTER_SEND_MESSAGE, REQUEST_SMS_CODE, REGISTER, CLEAR_STATE } from '../../constants/';

//import countdown component for count
import CountDownText from './CountDownText';



class RenderInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countDown: true,
    }
  }

  componentDidMount() {
    console.log(this.countDown);
  }

  componentWillReceiveProps(nextProps) {
    const { meta: { touched, error, warning, asyncValidating }, represent } = this.props;

    if (represent === REGISTER) {
      if (error) {
        this.failToast('两次密码不匹配');
      }
    }
  }

  failToast(msg) {
    this.props.dispatchMethod({ type: CLEAR_STATE });
    Toast.fail(msg, 1);
  }

  handleSendVerify = () => {
    const { dispatchMethod, usernameValue } = this.props;
    this.setState({
      countDown: false,
    })

    dispatchMethod({ type: REQUEST_SMS_CODE, payload: { phone: usernameValue }})
  }

  render() {
    const { item, label, isNew, represent, kind, returnKeyType, passwdRef, onSubmit, input: { onChange, value, ...restInput }, meta: { touched, error, warning, asyncValidating } } = this.props;
    return (
      <View style={styles.itemBox}>
        <LinearGradient
              start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
              colors={['#23BCBB', '#45E994']}
              style={styles.linearGradient} />
        <View style={styles.rightBox}>
          <View style={styles.topBox}>
            <Image source={item.icon} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.bottomBox}>
            <TextInput 
                {...restInput} 
                ref={passwdRef}
                onSubmitEditing={onSubmit}
                style={[ styles.department, styles.textInput ]}
                onChangeText={onChange}
                keyboardType={kind === 'password' ? 'default' : ( represent === REGISTER ? 'default' : 'phone-pad')}
                secureTextEntry={kind === 'password' && true} 
                returnKeyType={returnKeyType}
                placeholder={label}
                clearTextOnFocus={false}
                placeholderTextColor={'#989898'}
              />
          </View>
        </View>

       {
         represent && represent === REGISTER_SEND_MESSAGE && (
          this.state.countDown 
                ? ( //For every field use sync submit
                  <TouchableHighlight onPress={() => { this.handleSendVerify() }} style={styles.verifyContainer} disabled={ (isNew && isNew) || (error) }>
                    <View style={[ styles.verifyBox, ((isNew && isNew) || (error)) && { backgroundColor: '#CCC', shadowOpacity: 0}]}>
                      <Text style={styles.cd}>获取验证码</Text>
                    </View>
                  </TouchableHighlight>
                )
                : (
                  <View style={styles.verifyBox}>
                    <CountDownText
                        
                      style={styles.cd}
                      countType='seconds' // 计时类型：seconds / date
                      afterEnd={() => { this.setState({
                        countDown: true
                      })}} // 结束回调
                      timeLeft={5} // 正向计时 时间起点为0秒
                      step={-1} // 计时步长，以秒为单位，正数则为正计时，负数为倒计时
                      startText='获取验证码' // 开始的文本
                      endText='获取验证码' // 结束的文本
                      intervalText={(sec) => sec + '秒重新获取'} // 定时的文本回调
                    />
                  </View>
                )
         )
       }
      </View>
    )
  }
}

export default RenderInput