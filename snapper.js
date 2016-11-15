import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Camera from 'react-native-camera';

export default class Snapper extends Component {
  takePicture() {
    this.camera.capture()
      .then((data) => {
        this.props.pictures.push(data);
      })
      .then(() => {
        this.props.navigator.push({ id: 'lander' });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          captureTarget={Camera.constants.CaptureTarget.disk}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text
            style={styles.capture}
            onPress={this.takePicture.bind(this)}>
            Snap
          </Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
