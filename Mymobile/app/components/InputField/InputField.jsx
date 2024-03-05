import React from 'react';
import { TextInput } from 'react-native';

const InputField = ({ placeholder, onChangeText }) => {
  return <TextInput placeholder={placeholder} onChangeText={onChangeText} />;
};

export default InputField;
