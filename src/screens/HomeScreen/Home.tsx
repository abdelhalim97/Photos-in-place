import React, {useRef, useState} from 'react';
import {Logo, CustomButton, MapMarker} from '../../components';
import {StyleSheet, View, Image, ScrollView, Platform} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import MapboxGL, {Camera, UserTrackingMode} from '@rnmapbox/maps';
import RNFS from 'react-native-fs';
import {decode} from 'base64-arraybuffer';
import Config from 'react-native-config';
//@ts-ignore
import ExifReader from '../../../node_modules/exifreader/src/exif-reader.js';

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
    //open the camera
    launchCamera({mediaType: 'mixed', includeExtra: true}, handlePictureTaken);
  };

  const handleGallerySelect = () => {
    // Open the gallery
    launchImageLibrary(
      {mediaType: 'mixed', includeExtra: true},
      handlePictureTaken,
    );
  };

  const handlePictureTaken = async (response: any) => {
    const imageURI = response.assets[0].uri;
    setImageUrl(imageURI);
    //extracting the exif data
    const b64Buffer = await RNFS.readFile(imageURI, 'base64');
    const fileBuffer = decode(b64Buffer);
    const tags = await ExifReader.load(fileBuffer, {
      expanded: true,
      includeUnknown: true,
    });

    const currentLatitude = tags?.gps?.Latitude;
    const currentLongitude = tags?.gps?.Longitude;

    currentLatitude ? setLatitude(currentLatitude) : setLatitude(0);
    currentLongitude ? setLongitude(currentLongitude) : setLongitude(0);
  };

  return (
    <ScrollView style={style.scrollView} ref={scrollRef}>
      <Logo />

      {/* Selection Buttons */}
      <View style={style.buttonOptions}>
        <CustomButton content="📸" onPress={handleCameraSelect} />
        <CustomButton content="🎞" onPress={handleGallerySelect} />
      </View>

      {/* the selected or phtographed image */}
      {imageUrl && (
        <Image
          source={{uri: imageUrl}}
          style={style.pickedImage}
          resizeMode="cover"
        />
      )}

      {/* The map goes here !*/}
      <View style={style.mapParent}>
        <MapboxGL.MapView
          zoomEnabled={true}
          // this code to fix problem where the map navigation doesnt work anymore when the scrollView is scrollable
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
          //
          style={style.mapProvider}>
          {/* if photo's geolacation isnt availbale we display user position otherwise we display the photo exif geolocatyion+ */}
          {isGeolocationAvailbale ? (
            <>
              <Camera centerCoordinate={[longitude, latitude]} zoomLevel={10} />
              <MapMarker latitude={latitude} longitude={longitude} />
            </>
          ) : (
            <>
              <Camera
                zoomLevel={10}
                followUserLocation={true}
                followUserMode={UserTrackingMode.Follow}
              />
              <MapboxGL.LocationPuck
                pulsing={'default'}
                visible={true}
                puckBearingEnabled={true}
                puckBearing="heading"></MapboxGL.LocationPuck>
            </>
          )}
        </MapboxGL.MapView>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#EEF5FF',
  },
  mapParent: {
    width: '90%',
    marginVertical: 20,
    borderColor: '#8c9fdc',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
  mapProvider: {
    width: '100%',
    height: 300,
  },
  buttonOptions: {
    marginTop: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickedImage: {
    width: '90%',
    height: 300,
    marginTop: 20,
    borderColor: '#8c9fdc',
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
});

export default Home;
