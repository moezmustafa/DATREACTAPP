import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import styles from './styles';
export default function ValueScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>We want you</Text>
      <Text style={styles.subtitle}>What value will you add to the Park Community?</Text>
      <TextInput style={styles.input} placeholder="Type here your value" />
    </View>
  );
}
