import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export class Contact extends React.Component{

    deleteContact(id){
      this.props.onDelete(id);
    }

    render(){
        return(
            <View style={styles.TextInput}>
                <Text style={{fontWeight: 'bold'}}>{this.props.contact.name} </Text>
                <Text>{this.props.contact.email} : {this.props.contact.phone}</Text>
                <Button color="red" title="Delete" circular icon="trash outline" onPress={this.deleteContact.bind(this, this.props.contact.id)} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  TextInput : {
    paddingLeft: 20,
    paddingTop : 20,
  },
});
