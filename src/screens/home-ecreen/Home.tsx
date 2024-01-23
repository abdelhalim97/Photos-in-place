import React from 'react';
import {CameraVision, Logo} from '../../components';
import {StyleSheet, Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Logo />

      {/* Selection Buttons */}

      {/* <CameraVision /> & Image Placeholder */}

      {/* The map goes here !*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FF',
  },
});

export default Home;
