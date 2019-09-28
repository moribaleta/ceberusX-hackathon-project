import React, { Component } from "react";
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import TutorialList from './TutorialList'
import TutorialView from './TutorialView'
import ExamList from '../exams/ExamList'
import ExamView from '../exams/ExamViewer'
import PreExam from '../exams/PreExam'
import Profile from '../profile/Profile'

const TabNavigator = createBottomTabNavigator({
  Home: TutorialList,
  Exams: ExamList,
  Profile: Profile,
},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'home'
      } else if (routeName === 'Exams') {
        iconName = `class`;
      } else {
        iconName = 'face'
      }
      // You can return any component that you like here!
      return <IconComponent name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  },
});

const TabContainer = createAppContainer(TabNavigator)


const MainNavigator = createStackNavigator({
  Home: {screen: TabContainer},
  TutorialView: {screen: TutorialView},
  ExamList: {screen: ExamList},
  ExamView: {screen: ExamView},
  PreExam: {screen: PreExam}
});

const App = createAppContainer(MainNavigator);

export default App;


