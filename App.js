import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Navigation, createDrawerNavigator } from 'react-navigation';
import Home from './Screens/Home.js';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <Text>We are going to make a drawer</Text>
            </View>
        );
    }
}


//Navigation.registerComponent('drawer.Home', () => Home);
//
//Navigation.startSingleScreenApp({
//  screen: {
//    screen: 'drawer.Home',
//    title: 'Home'
//  }
//});

//const styles = StyleSheet.create({
//  scrollView: {
//    backgroundColor: Colors.lighter,
//  },
//  body: {
//    backgroundColor: Colors.white,
//  },
//  sectionContainer: {
//    marginTop: 32,
//    paddingHorizontal: 24,
//  },
//  sectionTitle: {
//    fontSize: 24,
//    fontWeight: '600',
//    color: Colors.black,
//  },
//  sectionDescription: {
//    marginTop: 8,
//    fontSize: 18,
//    fontWeight: '400',
//    color: Colors.dark,
//  },
//  highlight: {
//    fontWeight: '700',
//  },
//});


