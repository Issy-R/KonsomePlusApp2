import React, { useEffect, useState } from 'react';
import {
  Alert, FlatList,
} from 'react-native';
import axios from 'axios';
import YoutubeList from '../components/YoutubeList';
import { youtubeApiKey } from '../../env';

export default function SometalkScreen() {
  const [articles, setArticles] = useState([]);
  const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PLHFvtaNlqGSt104p3U2RbTxDqOxTNw8uz&key=${youtubeApiKey}&fields=items/snippet/title,items/snippet/thumbnails/high/url,items/snippet/publishedAt,items/snippet/resourceId/videoId`;

  useEffect(() => {
    fetchArticles();
    // console.log(articles);
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.items);
    } catch (error) {
      Alert.alert('記事の読み込みに失敗しました。');
    }
  };

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => (
        <YoutubeList
          title={item.snippet.title}
          publishedAt={item.snippet.publishedAt}
          uri={item.snippet.thumbnails.high.url}
          ch="KONSOME＋ch."
        />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

// https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PLHFvtaNlqGSsxmuj6SMLs5CblJS895emh&order=viewCount&key=AIzaSyDxTGGGIS6pmPUv79YiUJ_tJTYu2VGZtfM&fields=items/snippet/title,items/snippet/thumbnails/high/url,items/snippet/publishedAt,items/snippet/resourceId/videoId

// `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PLHFvtaNlqGSsxmuj6SMLs5CblJS895emh&key=${youtubeApiKey}&fields=items/snippet/title,items/snippet/thumbnails/high/url,items/snippet/publishedAt,items/snippet/resourceId/videoId`;

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwGqHJi5UTWw2cIeYRum-vA&maxResults=10&order=date&q=ソメトーーク&key=AIzaSyBYB07AAPZliO1numI8Eluc5mPIlUVMG3Y

// GET https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=PLHFvtaNlqGSt104p3U2RbTxDqOxTNw8uz&key=AIzaSyBYB07AAPZliO1numI8Eluc5mPIlUVMG3Y
