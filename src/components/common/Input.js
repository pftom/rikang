import React from 'react';
import { TextInput, View } from 'react-native';

import { InputStyle as styles } from '../styles/';
import { HintMessage } from './HintMessage';

export const renderInput = ( { label, input: { onChange, value, ...restInput }, meta: { touched, error, warning, asyncValidating } } ) => (
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