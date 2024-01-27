import {Permission, PermissionsAndroid, Platform} from 'react-native';

export const requestPermission = async (
  permission: Permission,
  permissionName: string,
) => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.request(permission, {
        title: `Application requesting ${permissionName} Permission`,
        message: `Application needs access to your ${permissionName} `,
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission granted');
      } else {
        console.log('Permission denied');
      }
    }
  } catch (err) {
    console.warn(err);
  }
};
