import React from 'react';
import { Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <Text>Squadteam 45!</Text>
        <Text>It seems that you are new here. What's your name? </Text>
      </View>
    );
  }
}
