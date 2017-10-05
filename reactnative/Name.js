import React from 'react';
import { Text, View, TextInput } from 'react-native';

export default class Name extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <TextInput
          style={{height: 40, width: 100}}
          placeholder="Change name!"
          onChangeText={(text) => this.props.changeName(text)}
        />
      </View>
    );
  }
}
