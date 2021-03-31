import React, { useEffect, useState } from 'react';
import {
  Alert, FlatList,
} from 'react-native';
import axios from 'axios';
import YoutubeList from '../components/YoutubeList';
import { youtubeApiKey2 } from '../../env';

export default function SometalkScreen() {
  const [articles, setArticles] = useState([]);
  const URL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCwGqHJi5UTWw2cIeYRum-vA&maxResults=10&order=date&q=ソメトーーク&key=${youtubeApiKey2}&fields=items/snippet/title,items/snippet/thumbnails/high/url,items/snippet/publishedAt,items/id/videoId`;

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
