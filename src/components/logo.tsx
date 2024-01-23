import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
const imgTest = '../../assets/images/bootsplash.png';
export const Logo = () => {
  return (
    <FastImage
      source={require(imgTest)}
      style={styles.logo}
      resizeMode="contain"
    />
  );
};
const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  logo: {
    width: 200,
    height: 200,
  },
});
