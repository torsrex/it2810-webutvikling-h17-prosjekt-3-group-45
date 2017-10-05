import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Name from './Name';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: "Jeff",
      todos: [],
      contacts: []
    }
  }

  handleNameChange(name){
    this.setState({name: name});
  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Name name={this.state.name} changeName={this.handleNameChange.bind(this)}/>

        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
