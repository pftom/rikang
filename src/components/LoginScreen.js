import React, { PropTypes, PureComponent } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Field, reduxForm, formValueSelector,  } from 'redux-form/immutable';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import {
  required,
  minLength5,
  maxLength15,
  number,
  validate
} from '../utils/validate.js';
import submit from '../utils/submit';
import asyncValidate from '../utils/asyncValidate';
import { load as loadAccount } from '../actions/account';

const styles = StyleSheet.create({
  container: {
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250,
    marginTop: 10,
  },
  asyncValidating: {
    borderColor: 'red',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250,
  },
  hint: {
    fontSize: 18,
    color: '#000'
  }
});


const data = {
  username: '13786684946',
  password: 'redux-form',
}

const HintMessage = (hintMessage) => (
  <Text style={styles.hint}>{hintMessage.text}</Text>
);

const renderInput = ( { label, input: { onChange, value, ...restInput }, meta: { touched, error, warning, asyncValidating } } ) => (
  <View>
    <TextInput 
      {...restInput} 
      style={[ styles.input, asyncValidating && styles.asyncValidating ]} 
      onChangeText={onChange} 
      placeholder={label}
      placeholderTextColor={'#989898'}
    />
    {touched && ((error && <HintMessage text={error} />) || (warning && <HintMessage text={warning} />))}
  </View>
);

class LoginScreen extends PureComponent {

  handleLogin() {
    this.props.navigation.dispatch({ type: 'Login' });
  }

  render() {
    const {  handleSubmit, pristine, load, submitting, error, dispatch } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => load(data)}>
          <Text style={styles.button}>Load Account</Text>
        </TouchableOpacity>
        <Field 
          name="username" 
          component={renderInput} 
          label="请输入你的用户名" />
        <Field 
          name="password" 
          component={renderInput} 
          label="请输入你的密码" />
        {error && <Text>{error}</Text>}
        <TouchableOpacity onPress={handleSubmit(submit)} disabled={submitting}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

LoginScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

LoginScreen.navigationOptions = {
  title: 'Log In',
};

let LoginForm =  reduxForm({
  form: 'Login',
  enableReinitialize: true,
  asyncBlurFields: ['username'],
})(LoginScreen);

const selector = formValueSelector('Login');

LoginForm = connect(
  state => {
    const username = selector(state, 'username');
    console.log('username', username);
    return {
      username: username
    }
  },
  { load: loadAccount }
)(LoginForm);

export default LoginForm;