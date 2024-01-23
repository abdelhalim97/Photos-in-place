import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Camera,
  CameraPermissionRequestResult,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';

const CameraVision = () => {
  const [cameraPermission, setCameraPermission] =
    useState<CameraPermissionRequestResult>();
  const {hasPermission, requestPermission} = useCameraPermission();
  useEffect(() => {
    (async () => {
      const cameraPermissionStatus = await Camera.requestCameraPermission();
      setCameraPermission(cameraPermissionStatus);
    })();
  }, []);

  const cameraDevice = useCameraDevice('front');

  return (
    <>
      {cameraDevice && cameraPermission === 'granted' && (
        <>
          <View>
            <Text>test</Text>
          </View>
          <Camera
            photo={true}
            style={{width: 200, height: 200, backgroundColor: 'red'}}
            device={cameraDevice}
            isActive={true}
          />
        </>
      )}
    </>
  );
};

export default CameraVision;
