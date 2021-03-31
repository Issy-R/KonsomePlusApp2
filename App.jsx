import React from 'react';
import { SafeAreaView } from 'react-native';
import SometalkScreen from './src/screens/SometalkScreen';
import YoutubeList from './src/components/YoutubeList';

export default function App() {
  return (
    <SafeAreaView>
      <YoutubeList />
    </SafeAreaView>
  );
}
