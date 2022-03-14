import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Routes from './src/routes';
import { COLORS } from "./src/config"
import { DebtsProvider } from './src/contexts/debtsContext';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={COLORS.background} barStyle="light-content"/>
      <DebtsProvider>
        <Routes />
      </DebtsProvider>
    </>
  );
};


export default App;
