import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function YoutubeWebScreen() {
  return (
    <SafeAreaView>
      <WebView source={{ uri: 'https://www.yahoo.co.jp/' }} />
    </SafeAreaView>
    // <View>
    //   <Text>こんにちわ</Text>
    // </View>
  );
}
