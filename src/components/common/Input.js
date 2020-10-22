import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const Input = ({label, value, onChangeText, secureTextEntry, placeholder}) => {
  return (
    <View styles={style.containerStyle}>
      <Text styles={style.labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        styles={style.inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const style = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 10,
    lineHeight: 23,
    flex: 2,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
});

export {Input};
