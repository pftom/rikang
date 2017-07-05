
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
// import submit from '../../utils/submit';

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
    
    this.submit = this.submit.bind(this);
  }

  submit(values) {
    this.props.dispatch({ type: 'Login' });
    console.log('hhh');
  }

  render() {
    const {  handleSubmit, pristine, load, submitting, error } = this.props;
    return (
      <View style={styles.container}>
        <Field 
          name="username" 
          component={renderInput} 
          label="在此输入您的手机号码" />
        <Field 
          name="password" 
          component={renderInput} 
          label="在此输入您的密码" />
        {error && <Text>{error}</Text>}
        <TouchableOpacity onPress={handleSubmit(this.submit)} disabled={pristine || submitting}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default FormInput;