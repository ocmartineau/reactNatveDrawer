import React, {Component} from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { Header } from 'react-native-elements';

class Home extends Component {

onButtonPress = () => {
    console.log('Button Pressed!!')
  }
  render () {
    return (
      <View style={{padding: 25}}>
        <Header

          centerComponent={{ text: 'Welcome To Your Drawer!', style: { color: '#fff' } }}

        />
      </View>
    );
  }
}

export default Home;