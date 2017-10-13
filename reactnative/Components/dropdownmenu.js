import React from 'react';
import { Text, View , Picker} from 'react-native';

export default class Dropdownmenu extends React.Component{
  constructor(){
    super();
    this.state = {
      category : 'Technology'
    }
  }

  onValueChange(key,value){
    console.log(key+ ':'+value);
    this.setState({category: value});
  }



  render(){
    return (
      <View>
        <Picker
          selectedValue={this.state.category}
          onValueChange={this.props.changeMenu(this.state.value)}
          >
            <item label='Todo' value='todo' />
            <item label='Note' value='note' />
            <item label='Contact' value='contact' />

        </Picker>
        <Text>Picker Component </Text>
      </View>
    )
  }
}
