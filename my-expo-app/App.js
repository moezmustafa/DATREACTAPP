import React from 'react';
import { SafeAreaView } from 'react-native';
import NameScreen from './components/MusicScreen'; // Ensure the path is correct based on your file structure

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NameScreen />
    </SafeAreaView>
  );
}
