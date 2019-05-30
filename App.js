/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from 'react-navigation'
import Aval from "./component/Aval";
import Dovom from "./component/Dovom";
import Sevom from "./component/Sevom";
import Aks from "./component/Aks";


export default class App extends Component {
  render() {
    return (
   <Stacking/>
    );
  }
}
const Stacking=createStackNavigator({
  aks:Aks,
  aval:Aval,
  dovom:Dovom,
  sevom:Sevom
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
