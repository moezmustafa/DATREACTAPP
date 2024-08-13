import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from './styles';
export default function QuoteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inspire us</Text>
      <Text style={styles.subtitle}>What is your favourite quote?</Text>
      <TextInput style={styles.input} placeholder="Type here your favourite quote" />
    </View>
  );
}
