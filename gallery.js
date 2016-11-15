import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Gallery extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.pictures.length}</Text>
        { this.props.pictures.map(picture => <Image style={styles.image} key={picture.path} source={{ uri: picture.path }} />) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 100,
    height: 100
  }
});
