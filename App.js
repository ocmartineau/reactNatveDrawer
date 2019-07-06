import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Navigation, createDrawerNavigator, DrawerNavigator } from 'react-navigation';
import Home from './Screens/Home.js';
import Socks from './Screens/Socks.js';
import Boxers from './Screens/Boxers.js';
import Jeans from './Screens/Jeans.js';
class App extends React.Component {
    render() {
        return (
            <MyDrawerNavigator/>
        );
    }
}


const MyDrawerNavigator = createDrawerNavigator({
    Home:Home,
    Socks:Socks,
    Boxers:Boxers,
    Jeans:Jeans
})

export default App;
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


