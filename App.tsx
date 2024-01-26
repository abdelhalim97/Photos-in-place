/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Config from 'react-native-config';
import BootSplash from 'react-native-bootsplash';
import {Home} from './src/screens/HomeScreen';

function App(): React.JSX.Element {
  useEffect(() => {
    BootSplash.hide({fade: true});
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
