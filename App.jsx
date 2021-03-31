import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import SometalkScreen from './src/screens/SometalkScreen';
import YoutubeList from './src/components/YoutubeList';
import YoutubeWebScreen from './src/screens/YoutubeWebScreen';

export default function App() {
  return (
    <SafeAreaView>
      <SometalkScreen />
    </SafeAreaView>
  );
}
