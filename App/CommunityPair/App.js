/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component, ReactElement} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import HomeScreen from './screens/home/Home'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);


const App: () => React$Node = () => {
  console.ignoredYellowBox = ['Remote debugger'];

  return (    
    <HomeScreen/>
    
  );
};

{/* <SafeAreaView style={styles.container}>
      <HomeScreen/>
    </SafeAreaView> */}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
