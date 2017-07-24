import React, { Component } from 'react';
import { TextInput, View, Image, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { PutQuestionStyle as styles } from '../styles/';
import { HintMessage } from './HintMessage';

class RenderInput extends Component {
  render() {
    const { item, label, kind, returnKeyType, passwdRef, onSubmit, input: { onChange, value, ...restInput }, meta: { touched, error, warning, asyncValidating } } = this.props;

    return (
      <View style={styles.itemBox}>
        <LinearGradient
              start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}}
              colors={['#23BCBB', '#45E994']}
              style={styles.linearGradient} />
        <View style={styles.rightBox}>
          <View style={styles.topBox}>
            <Image source={item.icon} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.bottomBox}>
            <TextInput 
                {...restInput} 
                ref={passwdRef}
                onSubmitEditing={onSubmit}
                style={[ styles.department, styles.textInput ]}
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
        </View>
      </View>
    )
  }
}

export default RenderInput