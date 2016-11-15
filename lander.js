import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  View,
} from 'react-native';
import Camera from 'react-native-camera';
import Gallery from './gallery';

export default class Lander extends Component {
  learnMore() {
    this.props.navigator.push({ id: 'snapper' });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Take a Picture" onPress={this.learnMore.bind(this)}></Button>
        <Gallery pictures={this.props.pictures} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
