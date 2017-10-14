import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export class AddContact extends React.Component{
  constructor(){
    super();
    this.state= {
      name : '',
      email : '',
      phone : '',
      newContact:{}
    }
  }

  handleSubmit(e){
    this.setState({newContact:{
      name:this.state.name,
      email:this.state.email,
      phone:this.state.phone
    }}, function(){
      this.props.addContact(this.state.newContact);
    });
  }

  render(){
    return(
      <View style={styles.TextInput}>
        <Text>Add Contact</Text>

        <TextInput
          label = "name"
          placeholder = "Enter name"
          onChangeText={(text) => this.setState({name:text})}
        />

        <TextInput
          label = "email"
          placeholder = "Enter email"
          onChangeText={(text) => this.setState({email:text})}
        />

        <TextInput
          label = "phone"
          placeholder = "Enter phone number"
          onChangeText={(text) => this.setState({phone:text})}
        />

          <Button
            title = "Add contact"
            onPress={() => this.handleSubmit()}
          />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  TextInput : {
    justifyContent: 'center',
    alignSelf: 'center',
    width : 300,
    paddingTop : 50,
    paddingBottom: 30,
  },
});
