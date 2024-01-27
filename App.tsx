/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {PermissionsAndroid, SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import BootSplash from 'react-native-bootsplash';
import {Home} from './src/screens/HomeScreen';
import {requestPermission} from './src/permissions/request-permission';
import DeviceInfo from 'react-native-device-info';

function App(): React.JSX.Element {
  useEffect(() => {
    BootSplash.hide({fade: true});
    const requestPermissions = async () => {
      await requestPermission(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        'location',
      );
      await requestPermission(
        PermissionsAndroid.PERMISSIONS.ACCESS_MEDIA_LOCATION,
        'media geolocation',
      );
      if (Number(DeviceInfo.getSystemVersion()) >= 13)
        await requestPermission(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          'read images',
        );
      else {
        await requestPermission(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          'read media',
        );
      }
    };
    requestPermissions();
  }, []);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Home />
    </SafeAreaView>
  );
}

export default App;
