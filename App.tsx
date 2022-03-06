import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Routes from './src/routes';
import { COLORS } from "./src/config"

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.background} barStyle="light-content"/>
      <Routes />
    </>
  );
};


export default App;
