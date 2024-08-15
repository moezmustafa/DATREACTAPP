import React from 'react';
import { SafeAreaView } from 'react-native';
import NameScreen from './components/Screens_Set_Two/GridSlider'; // Ensure the path is correct based on your file structure

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NameScreen />
    </SafeAreaView>
  );
}
