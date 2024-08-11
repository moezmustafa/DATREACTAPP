import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from './styles';
export default function WorkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work hard, play hard</Text>
      <Text style={styles.subtitle}>Where do you work?</Text>
      <TextInput style={styles.input} placeholder="Type here the company's name" />
      <Text style={styles.subtitle}>What is your position?</Text>
      <TextInput style={styles.input} placeholder="Type here your position" />
    </View>
  );
}
