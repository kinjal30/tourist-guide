import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import {createStackNavigator} from 'react-navigation-stack';
import List from '../screen/List';
// import Article from'../screens/Article';

export default createStackNavigator(
    {
        List,
        Article
    },
    {
        initialRouteName:"List",
    
        defaultNavigationOptions:{
            // headerShown: 'false',
            headerStyle:{
            borderBottomColor:'transparent',
            marginTop:24, 
            backgroundColor:'red'
            }
        }
    }
);