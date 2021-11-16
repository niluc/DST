import React from 'react';
import type {Node} from 'react';
import Tabs from './src/Navigator.js'
import { NavigationContainer } from '@react-navigation/native'
export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
