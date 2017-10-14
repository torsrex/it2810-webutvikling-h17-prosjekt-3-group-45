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
      this.setState({name : '', email: '', phone: ''})
      this.textInputRef1.clear();
      this.textInputRef2.clear();
      this.textInputRef3.clear();
    });
  }

  render(){
    return(
      <View style={styles.TextInput}>
        <Text>Add Contact</Text>

        <TextInput
          label = "name"
          placeholder = "Enter name"
          autoCapitalize = 'sentences'
          returnKeyType = {"next"}
          onChangeText={(text) => this.setState({name:text})}
          ref={ref => this.textInputRef1 = ref}
          value={this.state.title}
        />

        <TextInput
          ref='SecondInput'
          label = "email"
          placeholder = "Enter email"
          autoCapitalize = 'none'
          keyboardType = 'email-address'
          returnKeyType = {"next"}
          onChangeText={(text) => this.setState({email:text})}
          ref={ref => this.textInputRef2 = ref}
          value={this.state.email}
        />

        <TextInput
          ref='ThirdInput'
          label = "phone"
          placeholder = "Enter phone number"
          keyboardType = 'phone-pad'
          returnKeyType = {"done"}
          onChangeText={(text) => this.setState({phone:text})}
          onSubmitEditing={(event) => {
            this.handleSubmit();
            keyboardType = 'none'
          }}
          ref={ref => this.textInputRef3 = ref}
          value={this.state.phone}
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
