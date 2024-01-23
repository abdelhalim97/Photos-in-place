import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  Camera,
  CameraPermissionRequestResult,
  useCameraDevice,
} from 'react-native-vision-camera';

export const CameraVision = () => {
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionRequestResult>();

  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);

  const cameraDevice = useCameraDevice('front');

  const handleTakePhoto = () => {
    try {
      if (cameraRef.current == null) throw new Error('Camera ref is null!');

      const photo = cameraRef.current.takePhoto();
    } catch (e) {
      console.error('Failed to take photo!', e);
    }
  };

  return (
    <>
      {cameraDevice && cameraPermission === 'granted' && (
        <View style={StyleSheet.absoluteFill}>
          {/* <Camera
            ref={cameraRef}
            photo={true}
            style={{width: '100%', height: 200, backgroundColor: 'red'}}
            device={cameraDevice}
            isActive={true}
          /> */}
          <TouchableOpacity
            onPress={() => handleTakePhoto()}
            style={style.takePhoto}>
            <Text>Capture photo</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};
const style = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    width: '100%',
  },
  takePhoto: {
    flex: 1,
    width: '100%',
    backgroundColor: 'red',
  },
});
