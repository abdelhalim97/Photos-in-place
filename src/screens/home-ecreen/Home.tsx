import React, {useState} from 'react';
import {Logo, Button} from '../../components';
import {StyleSheet, Text, View, Image} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const Home = () => {
  const [cameraShown, setCameraShown] = useState<Boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const handleCameraSelect = () => {
    setCameraShown(!cameraShown);
    launchCamera({mediaType: 'photo'}, handlePictureTaken);
  };

  const handleGallerySelect = () => {
    // Open the gallery
    launchImageLibrary({mediaType: 'photo'});
  };

  const handlePictureTaken = (response: any) => {
    setImageUrl(response.assets[0].uri);
    console.log(response);
  };

  return (
    <View style={style.container}>
      <Logo />

      {/* Selection Buttons */}
      <View style={style.sourceSelector}>
        <Button content="📸" onPress={handleCameraSelect} />
        <Button content="🎞" onPress={handleGallerySelect} />
      </View>

      {/* <CameraVision /> & Image Placeholder */}
      {imageUrl !== '' && (
        <Image source={{uri: imageUrl}} style={style.imageContainer} />
      )}

      {/* The map goes here !*/}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FF',
  },
  sourceSelector: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});

export default Home;
