
// import what we need
import React, { PropTypes, Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { Field } from 'redux-form/immutable';
import { Button, Toast } from 'antd-mobile';

import { NavigationActions } from 'react-navigation';

//sync submit validate function
import submit from '../../utils/submit';

//single field async validate function
import asyncValidate from '../../utils/asyncValidate';

//Component styles
import { InputStyle as styles } from '../styles/'

//Field input component
import RenderInput from './Input';

//import action constants
import { LOGIN, REGISTER } from '../../constants/';


//our FormInput component
class FormInput extends Component {
  constructor(props) {
    super(props);
  
    this.jump = this.jump.bind(this);
    this.selectSubmit = this.selectSubmit.bind(this);
  }

  jump() {
    const { navigation, kind } = this.props;
    if (kind === REGISTER) {
      navigation.goBack();
    } else {
      navigation.navigate('Register');
    }
  }

  selectSubmit(values) {
    const { kind, dispatch } = this.props;
    Keyboard.dismiss();
    submit(values, kind, dispatch);
  }

  componentWillReceiveProps(nextProps) {
    const { toast } = nextProps;
    const { loginError, loginSuccess, isLoadingData } = toast;
    if (loginError) {
      this.failToast();
    }

    if (isLoadingData) {
      this.loadingToast();
    }

    if(loginSuccess) {
      this.loginSuccess();
    }
  }

  successToast() {
    Toast.success('登录成功', 1);
  }

  failToast() {
    Toast.fail('账号密码错误', 1);
  }

  loadingToast() {
    Toast.loading('请稍后...', 1, () => {
      console.log('登录成功');
    });
  }

  render() {
    const {  handleSubmit, toast, initialValues, pristine, load, submitting, error, kind, reset } = this.props;
    console.log('toast', toast);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.jump}>
          <Text>{kind === REGISTER ? '返回' : '新用户注册'}</Text>
        </TouchableOpacity>
        <Field 
          name="username" 
          component={RenderInput}
          kind="username" 
          returnKeyType="next"
          onSubmit={() => this.passwd.focus()}
          label="在此输入您的手机号码" />
        <Field 
          passwdRef={pd => this.passwd = pd}
          name="password" 
          component={RenderInput} 
          kind="password"
          onSubmit={handleSubmit(this.selectSubmit)}
          returnKeyType="default"
          label="在此输入您的密码" />
        {error && <Text>{error}</Text>}
        <Button type="ghost" onClick={handleSubmit(this.selectSubmit)} disabled={pristine || submitting}>
          Submit
        </Button>
      </View>
    )
  }
}

export default FormInput;