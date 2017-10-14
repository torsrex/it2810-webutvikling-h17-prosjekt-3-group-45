import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Header from './Components/Header';
import Name from './Components/Name';
import Todos from './Components/Todos';
import Notes from './Components/Notes';
import Contacts from './Components/Contacts';

const MainScreenNavigator = TabNavigator({
  //Welcome: {screen: Header}, //Each screen shows a separate component
  Todo: {screen: Todos},
  Notes: {screen: Notes},
  Contacts: {screen : Contacts},
  //Calendar: { screen: Calendar },
});

const PersonalManager = StackNavigator({
    Home: {
      screen: MainScreenNavigator, //Adds navigator to top
      navigationOptions: {
        title: 'Personal manager', //Sets title of app
        backgroundColor : 'red',
      },
    },
  });

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: 'Bortne',
    }
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(name){
    this.setState({name: name});
  }

  render() {
    if (this.state.name === '') {
      return (
        <View style={styles.container}>
          <Header />
          <Name name={this.state.name} changeName={this.handleNameChange}/>
        </View>
      );
    }
      return (
        <PersonalManager />
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
