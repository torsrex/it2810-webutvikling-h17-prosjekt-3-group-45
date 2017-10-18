import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Header from './Components/Header';
import Name from './Components/Name';
import Todos from './Components/Todos';
import Notes from './Components/Notes';
import Welcome from './Components/Welcome';
import Contacts from './Components/Contacts';
import AgendaScreen from './Components/Agenda'

const MainScreenNavigator = TabNavigator({
  Todo: {
    screen: Todos,
    navigationOptions:{
      tabBarLabel: 'Todo',
    }
  },
  Notes: {screen: Notes},
  Contacts: {screen : Contacts},
  Agenda: { screen: AgendaScreen }},
  {
    tabBarOptions : {
      style: {
        backgroundColor: 'red',
      }
    }
  });

const PersonalManager = StackNavigator({
    Home: {
      screen: MainScreenNavigator,
      navigationOptions: {
        title: 'Personal shit mangager!',
      },
    },
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
      backgroundColor: '#F5F5F5',
    }
  }
);

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
          <PersonalManager name={this.state.name} style = {{backgroundColor: 'green'}} ref={nav => {this.navigator = nav;}}/>
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
