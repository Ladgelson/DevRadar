import React from 'react';
import Routes from './src/routes';
import { StatusBar, YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);
export default function App() {

  return (
    <>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0.2)" barStyle="light-content" />
      <Routes/>
    </>
  );
}