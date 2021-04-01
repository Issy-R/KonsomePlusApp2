import React from 'react';
import {
  Text, StyleSheet, View, Dimensions, Image, TouchableOpacity,
} from 'react-native';
import { func, string } from 'prop-types';

const { width } = Dimensions.get('window');

export default function YoutubeList(props) {
  const {
    title, publishedAt, uri, ch, onPress,
  } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.listContainer}>
        <Image
          style={styles.thumbnailContainer}
          source={{
            uri,
          }}
        />
        <View style={styles.footerContainer}>
          <Image
            style={styles.chIcon}
            source={{ uri: 'https://yt3.ggpht.com/ytc/AAUvwngSW72PIHG0Ou4vJmJs9AoJEBppVxq4pxOUGxaQ=s88-c-k-c0x00ffffff-no-rj' }}
          />
          <View style={styles.footerRight}>
            <Text
              style={styles.title}
              numberOfLines={2}
            >
              {title}
            </Text>
            <View style={styles.underContainer}>
              <Text style={styles.underText}>{ch}</Text>
              <Text style={styles.underText}>{publishedAt}</Text>
            </View>
          </View>

        </View>
      </View>
    </TouchableOpacity>
  );
}

YoutubeList.propTypes = {
  onPress: func,
};

YoutubeList.defaultProps = {
  onPress: null,
};

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
  footerContainer: {
    width: width - 48,
    flexDirection: 'row',
    paddingVertical: 8,
    // backgroundColor: 'red',
  },
  chIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  footerRight: {
    width: width - 48 - 60,
    // backgroundColor: 'blue',
    paddingLeft: 8,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: 'bold',
    // alignSelf: 'flex-start',
    paddingTop: 8,
    // backgroundColor: 'red',
  },
  underContainer: {
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
