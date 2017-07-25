
// import what we need
import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { reduxForm, reset } from 'redux-form/immutable';
import { connect } from 'react-redux';

//commomn 表单组件
import { FormInput } from './common/';

//引入Action constants
import { REGISTER } from '../constants/';

//Form container style
import { ContainerStyle as styles} from './styles/';

//通过selector最小限度获取最需要的数据
import { getInputInitial } from '../selectors/';

//import validate func
import { validate } from '../utils/validate';

//对组件进行二次封装，以应对不同的处理场景如：注册，登录等共用一套逻辑
class Register extends PureComponent {

  componentWillUnmount() {
    this.props.dispatch(reset('Register'));
  }
  
  render() {
    const inputData = {
      icon: require('./common/img/affirm_passwd.png'),
      title: '确认密码'
    };
    return (
      <View style={styles.container}>
        <FormInput {...this.props} kind={REGISTER} inputData={inputData}/>
      </View>
    )
  }
}


let RegisterForm =  reduxForm({
  form: 'Register',
})(Register);

const mapStateToProps = (state) => ({
    toast: getInputInitial(state),
});

export default connect(mapStateToProps)(RegisterForm);