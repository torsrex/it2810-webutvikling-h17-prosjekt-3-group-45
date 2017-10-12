import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export default class Name extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
    }
  }

ChangeName(text){
  this.setState({
    name: text
  },
    () => {
      console.log(this.state.name);
    }
  )
}

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <TextInput
          style={{height: 40, width: 100}}
          placeholder="Change name!"
          onChangeText={
            (text) => {
              this.ChangeName(text);
          }}
        />
        <Button
          onPress= {() => this.props.changeName(this.state.name)}
          title="Submit name"
        />
      </View>
    );
  }
}
//onChangeText={(text) => this.props.changeName(text)}
