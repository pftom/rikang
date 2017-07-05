import React from 'react';
import { StyleSheet } from 'react-native';

//single input style
export const InputStyle = StyleSheet.create({
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
});

//Form container style
export const ContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});