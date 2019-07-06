import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';

class Home extends Component {

onButtonPress = () => {
    console.log('Button Pressed!!')
  }
  render () {
    return (
      <View style={{padding: 50}}>
        <Text>
          Home
        </Text>
        <Button title="Tab Navigation" onPress = { this.onButtonPress } />
      </View>
    );
  }
}

export default Home;