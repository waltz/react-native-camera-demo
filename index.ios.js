import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

import Snapper from './snapper';
import Lander from './lander';

let pictures = [];

export default class mobile extends Component {
  resolveRoute(route, navigator) {
    switch (route.id) {
      case 'snapper':
        return(<Snapper navigator={navigator} pictures={pictures}></Snapper>);
      case 'lander':
        return(<Lander navigator={navigator} pictures={pictures}></Lander>);
      default:
        return(<Lander navigator={navigator} pictures={pictures}></Lander>);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'lander' }}
        renderScene={this.resolveRoute}
      />
    );
  }
}

AppRegistry.registerComponent('mobile', () => mobile);
