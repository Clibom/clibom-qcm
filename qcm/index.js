import React from 'react';
import { AppRegistry } from 'react-native';
import ResponseButton from './src/components/rbutton';

const App = () => (
  <ResponseButton buttonTitle={'Réponse 1'} />
);

AppRegistry.registerComponent('qcm', () => App);
