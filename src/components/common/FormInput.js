
// import what we need
import React, { PropTypes, Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { Field } from 'redux-form/immutable';
import { Button, Toast } from 'antd-mobile';

import { NavigationActions } from 'react-navigation';

//sync submit validate function
import submit from '../../utils/submit';

//single field async validate function
import asyncValidate from '../../utils/asyncValidate';

import { phoneNumber, number } from '../../utils/validate';

//Component styles
import { PutQuestionStyle as styles } from '../styles/';

//Field input component
import RenderInput from './Input';

//import action constants
import { LOGIN, REGISTER, CLEAR_STATE, CLEAR, REGISTER_SEND_MESSAGE } from '../../constants/';


//our FormInput component
class FormInput extends Component {
  constructor(props) {
    super(props);
  
    this.jump = this.jump.bind(this);
    this.selectSubmit = this.selectSubmit.bind(this);
    // this.failToast = this.failToast.bind(this);
  }

  jump() {
    const { navigation, kind } = this.props;
    if (kind === REGISTER_SEND_MESSAGE) {
      navigation.goBack();
    } else if (kind === LOGIN) {
      navigation.navigate('RegisterSendMessage');
    } else if (kind === REGISTER) {
      navigation.navigate('Login');
    }
  }

  selectSubmit(values) {
    const { kind, dispatch, toast } = this.props;
    const { phone } = toast;
    if (kind === REGISTER) {
      console.log('hhh', REGISTER);
      return submit(values, kind, dispatch, phone)
    }
    Keyboard.dismiss();
    return submit(values, kind, dispatch);
  }

  componentWillReceiveProps(nextProps) {
    const { toast, error, kind } = nextProps;
    console.log('error', error);
    const { loginError, loginSuccess, isLoadingData, registerError, registerSuccess, requestSmsCodeError, requestSmsCodeSuccess } = toast;

    //get verify state
    const { isVerifyCode, verifyCodeSuccess, verifyCodeError, phone } = toast;


    if (kind === REGISTER) {
      if (error) {
        this.failToast('两次密码不匹配');
      }
    }

    if (isVerifyCode) {
      this.loadingToast();
    }

    if (verifyCodeSuccess) {
      this.successToast('验证成功');
      const { navigation } = this.props;
      navigation.navigate('Register');
    }

    if (verifyCodeError) {
      this.failToast('验证失败');
    }

    if (loginError) {
      this.failToast('账号密码错误');
    }

    if (error) {
      this.failToast(error)
    }

    if (isLoadingData) {
      this.loadingToast();
    }

    if(loginSuccess) {
      this.successToast('登录成功');
    }

    if(registerError) {
      this.failToast('注册失败');
    }

    // if (requestSmsCodeError) {
    //   this.failToast('发送验证码失败');
    // }

    if (requestSmsCodeSuccess) {
      this.props.dispatch({ type: CLEAR_STATE });
    }

    if (registerSuccess) {
      this.props.dispatch({ type: CLEAR_STATE });
    }
  }

  successToast(msg) {
    this.props.dispatch({ type: CLEAR_STATE });
    Toast.success(msg, 1);
  }

  failToast(msg) {
    this.props.dispatch({ type: CLEAR_STATE });
    Toast.fail(msg, 1);
  }

  loadingToast() {
    Toast.loading('请稍后...', 1);
  }

  render() {
    const {  handleSubmit, inputData, toast, initialValues, pristine, load, submitting, kind, reset } = this.props;
    //get field value
    const { usernameValue, passwordValue } = this.props;
    const item = {
      icon: kind === REGISTER ? require('./img/setting_passwd.png') : require('./img/verify_phone.png'),
      title: kind === REGISTER ? '设定密码' : '手机号码',
    }

    let renderNext = null;

    if (kind === REGISTER_SEND_MESSAGE) {
      renderNext = <Image source={require('../TabOne/img/next.png')} />
    }

    if (kind === REGISTER) {
      renderNext = <Image source={require('./img/create_account.png')} />
    }

    if (kind === LOGIN) {
      renderNext = <Image source={require('./img/submit.png')} />
    }

    return (
      <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={-227} style={{ backgroundColor: '#F5F6F7', flex: 1 }}>
          <View style={styles.container}>
            <Text style={styles.titleText}>
            {
              kind === LOGIN 
              ? '登录'
              : '注册账户'
            }
          </Text>
          <Text style={styles.subTitleText}>健康生活，从日康开始</Text>
          <View style={styles.inputBox}>
              <Field 
              item={item}
              name="username" 
              component={RenderInput}
              kind="username"
              represent={kind}
              isNew={pristine}
              usernameValue={usernameValue}
              returnKeyType="next"
              dispatchMethod={this.props.dispatch}
              
              onSubmit={() => this.passwd.focus()}
              label={ kind === REGISTER ? "在此输入您的账户密码" : "在此输入您的手机号码"} />
            <Field 
              item={inputData}
              passwdRef={pd => this.passwd = pd}
              name="password"
              dispatchMethod={this.props.dispatch}
              component={RenderInput} 
              kind={kind === REGISTER_SEND_MESSAGE ? 'register' : "password"}
              onSubmit={handleSubmit(this.selectSubmit)}
              returnKeyType="default"
              passwordValue={passwordValue}
              label={ kind === REGISTER_SEND_MESSAGE ? '输入您收到的短信验证码' : "在此输入您的密码"} />
            </View>
          <View style={styles.nextBox}>
            <TouchableOpacity onPress={handleSubmit(this.selectSubmit)} disabled={pristine || submitting}>
              {renderNext}
            </TouchableOpacity>
          </View>
          <View style={styles.tintBox}>
            <Text style={styles.tintText}>{kind !== LOGIN ? '已经有账户了？' : '还没有账户？'}</Text>
            <TouchableOpacity onPress={this.jump}>
              <Text style={styles.jumpText}>{kind !== LOGIN ? '点击登录' : '点击注册'}</Text>
            </TouchableOpacity>
          </View>
          </View>
        </KeyboardAvoidingView>
    )
  }
}

export default FormInput;