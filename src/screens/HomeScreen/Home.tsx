import React, {useRef, useState} from 'react';
import {Logo, CustomButton} from '../../components';
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MapboxGL, {Camera, Location} from '@rnmapbox/maps';
import RNFS from 'react-native-fs';
import {decode} from 'base64-arraybuffer';
import Config from 'react-native-config';
//@ts-ignore
import ExifReader from '../../../node_modules/exifreader/src/exif-reader.js';

const markerIcon = require('../../../assets/images/icons8-location-96.png');
MapboxGL.setAccessToken(Config.MAPBOX_BOX_KEY || null);

const Home = () => {
  const scrollRef = useRef<ScrollView>(null);
  const handleScroll = (scrollEnabled: boolean) => {
    if (Platform.OS === 'android') {
      scrollRef.current?.setNativeProps({scrollEnabled});
    }
  };

  const [imageUrl, setImageUrl] = useState<string>();
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);
  const isGeolocationAvailbale = latitude !== 0 && longitude !== 0;
  const handleCameraSelect = () => {
    launchCamera({mediaType: 'mixed'}, handlePictureTaken);
  };
  console.log(isGeolocationAvailbale);
  const handleGallerySelect = () => {
    // Open the gallery
    launchImageLibrary({mediaType: 'mixed'}, handlePictureTaken);
  };

  //any?
  const handlePictureTaken = async (response: any) => {
    const imageURI = response.assets[0].uri;
    setImageUrl(imageURI);
    const b64Buffer = await RNFS.readFile(imageURI, 'base64');
    const fileBuffer = decode(b64Buffer);
    const tags = ExifReader.load(fileBuffer, {expanded: true});
    console.log(tags);
    console.log('___ THIS IS LATITUDE __');
    console.log(tags.gps.Latitude);
    console.log('___ THIS IS LONGITUDE ___');
    console.log(tags.gps.Longitude);
    if (tags.gps.Latitude) setLatitude(tags.gps.Latitude);
    if (tags.gps.Longitude) setLongitude(tags.gps.Longitude);
  };

  const renderMapMarker = () => {
    return (
      <Image source={markerIcon} style={style.marker} resizeMode="cover" />
    );
  };

  return (
    <ScrollView style={style.container} ref={scrollRef}>
      <Logo />

      {/* Selection Buttons */}
      <View style={style.sourceSelector}>
        <CustomButton content="📸" onPress={handleCameraSelect} />
        <CustomButton content="🎞" onPress={handleGallerySelect} />
      </View>

      {/* <CameraVision /> & Image Placeholder */}
      {imageUrl && (
        <Image
          source={{uri: imageUrl}}
          style={style.imageContainer}
          resizeMode="cover"
        />
      )}

      {/* The map goes here !*/}
      <View style={style.mapContainer}>
        <MapboxGL.MapView
          onMoveShouldSetResponder={() => true}
          onStartShouldSetResponder={() => true}
          onResponderGrant={() => {
            handleScroll(false);
          }}
          onResponderEnd={() => {
            handleScroll(true);
          }}
          onResponderStart={() => {
            handleScroll(false);
          }}
          style={style.map}
          // pointerEvents="none"
          // scrollEnabled={false}
          // pitchEnabled={false}
          // rotateEnabled={false}
        >
          {isGeolocationAvailbale ? (
            <>
              <Camera centerCoordinate={[longitude, latitude]} zoomLevel={5} />
              <MapboxGL.MarkerView
                coordinate={[longitude, latitude]}
                isSelected>
                {renderMapMarker()}
              </MapboxGL.MarkerView>
            </>
          ) : (
            <MapboxGL.LocationPuck
              visible={true}
              puckBearingEnabled={true}
              puckBearing="heading"></MapboxGL.LocationPuck>
          )}
        </MapboxGL.MapView>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FF',
  },
  mapContainer: {
    width: '90%',
    marginVertical: 20,
    borderColor: '#8c9fdc',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  map: {
    width: '100%',
    height: 300,
  },
  sourceSelector: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '90%',
    height: 300,
    marginTop: 20,
    borderColor: '#8c9fdc',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  pin: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  text: {
    color: 'black',
  },
  marker: {
    width: 50,
    height: 50,
  },
});

export default Home;
