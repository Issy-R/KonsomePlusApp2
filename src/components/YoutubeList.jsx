import React from 'react';
import {
  Text, StyleSheet, View, Dimensions, Image,
} from 'react-native';
import { string } from 'prop-types';

const { width } = Dimensions.get('window');

export default function YoutubeList(props) {
  const {
    title, publishedAt, uri, ch,
  } = props;
  return (
    <View style={styles.listContainer}>
      <Image
        style={styles.thumbnailContainer}
        source={{
          uri,
        }}
      />
      <Text
        style={styles.title}
        numberOfLines={2}
      >
        {title}
      </Text>
      <View style={styles.underContainer}>
        <Text style={styles.underText}>{publishedAt}</Text>
        <Text style={styles.underText}>{ch}</Text>
      </View>
    </View>
  );
}

YoutubeList.propTypes = {
  title: string,
  publishedAt: string,
  uri: string,
  ch: string,
};

YoutubeList.defaultProps = {
  title: 'タイトルなし',
  publishedAt: '0000-00-00',
  uri: 'https://i.ytimg.com/vi/Y8G9Y12nhRA/hqdefault.jpg',
  ch: 'KONSOME＋',
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    height: ((width - 48) * 0.5625) + 126,
    padding: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
  },
  thumbnailContainer: {
    width: width - 48,
    height: (width - 48) * 0.5625,
    backgroundColor: 'blue',
  },
  title: {
    width: width - 48,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingTop: 8,
    // backgroundColor: 'red',
  },
  underContainer: {
    width: width - 48,
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor: 'green',
  },
  underText: {
    fontSize: 16,
    lineHeight: 20,
    paddingVertical: 4,
    color: 'rgba(0,0,0,0.6)',
  },
});
