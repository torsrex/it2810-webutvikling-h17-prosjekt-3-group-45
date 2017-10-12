import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export class Contact extends React.Component{
    render(){
        return(
            <View>
                <Text>  {this.props.contactName} :
                        {this.props.contactEmail} :
                        {this.props.contactPhone}
                </Text>
            </View>
        )
    }
}
//<Text>{this.props.contactEmail}</Text>
//<Text>{this.props.contactPhone}</Text>
