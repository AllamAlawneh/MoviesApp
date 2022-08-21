import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MoviesScreen from './Pages/Movies';

export default class App extends React.Component {

  render(): React.ReactNode {
    return (
      <MoviesScreen />
    );
  }
}