import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const CustomButton = (props: any) => {
  const {content, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.content}>{content}</Text>
    </TouchableOpacity>
  );
};
const style = StyleSheet.create({
  button: {
    flex: 1,
    height: 60,
    borderColor: '#8c9fdc',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: '#0635c9',
    fontSize: 26,
  },
});
