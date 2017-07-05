
// import what we need
import React, { PropTypes, Component } from 'react';
import {
  Button,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Field } from 'redux-form/immutable';

import { NavigationActions } from 'react-navigation';

//single field sync validate function
import {
  required,
  minLength5,
  maxLength15,
  number,
  validate
} from '../../utils/validate.js';

//sync submit validate function
import submit from '../../utils/submit';

//single field async validate function
import asyncValidate from '../../utils/asyncValidate';

//Component styles
import { InputStyle as styles } from '../styles/'

//Field input component
import { renderInput } from './Input';


//our FormInput component
class FormInput extends Component {
  constructor(props) {
    super(props);
  
    this.jump = this.jump.bind(this);
  }

  jump() {
    const { navigation, kind } = this.props;
    if (kind === 'Register') {
      navigation.goBack();
    } else {
      navigation.navigate('Register');
    }
  }

  render() {
    const {  handleSubmit, pristine, load, submitting, error, kind } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.jump}>
          <Text>{kind === 'Register' ? '返回' : '新用户注册'}</Text>
        </TouchableOpacity>
        <Field 
          name="username" 
          component={renderInput} 
          label="在此输入您的手机号码" />
        <Field 
          name="password" 
          component={renderInput} 
          label="在此输入您的密码" />
        {error && <Text>{error}</Text>}
        <TouchableOpacity onPress={handleSubmit(submit)} disabled={pristine || submitting}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default FormInput;