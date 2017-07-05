
// import what we need
import React, { Component } from 'react';
import { View } from 'react-native';
import { reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';

//commomn 表单组件
import { FormInput } from './common/';

//Form container style
import { ContainerStyle as styles} from './styles/'

//对组件进行二次封装，以应对不同的处理场景如：注册，登录等共用一套逻辑
class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FormInput {...this.props} />
      </View>
    )
  }
}


let LoginForm =  reduxForm({
  form: 'UserForm',
  asyncBlurFields: ['username'],
})(LoginScreen);

export default connect()(LoginForm);