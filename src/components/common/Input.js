import React, { Component } from 'react';
import { TextInput, View } from 'react-native';

import { InputStyle as styles } from '../styles/';
import { HintMessage } from './HintMessage';

class RenderInput extends Component {
  render() {
    const { label, kind, returnKeyType, passwdRef, onSubmit, input: { onChange, value, ...restInput }, meta: { touched, error, warning, asyncValidating } } = this.props;
    return (
      <View>
        <TextInput 
          {...restInput} 
          ref={passwdRef}
          onSubmitEditing={onSubmit}
          style={[ styles.input ]} 
          onChangeText={onChange}
          keyboardType={kind === 'password' ? 'default' : 'numbers-and-punctuation'}
          secureTextEntry={kind === 'password' && true} 
          returnKeyType={returnKeyType}
          placeholder={label}
          clearTextOnFocus={false}
          placeholderTextColor={'#989898'}
        />
        {touched && ((error && <HintMessage text={error} />) || (warning && <HintMessage text={warning} />))}
      </View>
    )
  }
}

export default RenderInput