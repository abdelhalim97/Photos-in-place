import React from 'react';
import {Image, StyleSheet} from 'react-native';
export const Logo = () => {
  return (
    <Image
      source={require('../../assets/images/splashicon.png')}
      style={style.logo}
      resizeMode="contain"
    />
  );
};
const style = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    marginTop: 50,
  },
});
