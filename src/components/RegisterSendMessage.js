
// import what we need
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { reduxForm, formValueSelector, reset } from 'redux-form/immutable';
import { connect } from 'react-redux';

//commomn 表单组件
import { FormInput } from './common/';

//引入Action constants
import { REGISTER_SEND_MESSAGE } from '../constants/';

//Form container style
import { ContainerStyle as styles} from './styles/';

//通过selector最小限度获取最需要的数据
import { getInputInitial } from '../selectors/';

//对组件进行二次封装，以应对不同的处理场景如：注册，登录等共用一套逻辑
class RegisterSendMessage extends PureComponent {

  componentWillUnmount() {
    this.props.dispatch(reset('Register'));
  }

  render() {
    const inputData = {
      icon: require('./common/img/verify_message.png'),
      title: '短信验证码'
    };
    return (
      <View style={styles.container}>
        <FormInput {...this.props} kind={REGISTER_SEND_MESSAGE} inputData={inputData}/>
      </View>
    )
  }
}


let RegisterSendMessageForm =  reduxForm({
  form: 'RegisterSendMessage',
})(RegisterSendMessage);

const selector = formValueSelector('RegisterSendMessage');

const mapStateToProps = (state) => {
  const usernameValue = selector(state, 'username');
  const passwordValue = selector(state, 'password');
  return {
    toast: getInputInitial(state),
    usernameValue,
    passwordValue,
  }
}

export default connect(mapStateToProps)(RegisterSendMessageForm);