import React from 'react';
import { WebView } from 'react-native-webview';

export default function YoutubeWebScreen({ route }) {
  const { articleS, articleU } = route.params;
  console.log(articleS);
  console.log(articleU);
  const videoId = articleS === undefined
    ? articleU.snippet.resourceId.videoId : articleS.id.videoId;
  const uri = `https://www.youtube.com/watch?v=${videoId}`;
  return (
    <WebView
      source={{ uri }}
      style={{ marginTop: 20 }}
    />
  );
}
