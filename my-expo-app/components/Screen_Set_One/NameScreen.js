import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [activeTab, setActiveTab] = useState('Name');

  const tabOptions = ['Name','Photo','Birthday','Location','Socials','Value', 'Interests', 'Work', 'Career', 'Submit'];

  const getProgressWidth = () => {
    const index = tabOptions.indexOf(activeTab);
    return `${((index + 1) / tabOptions.length) * 100}%`;
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.header}
      >
        {tabOptions.map((tab) => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[
              styles.tab,
              activeTab === tab && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.headerText,
                activeTab === tab && styles.activeTabText,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: getProgressWidth() }]} />
      </View>

      <Text style={styles.title}>Nice to meet you</Text>
      <Text style={styles.subtitle}>To start with, what is your name?</Text>

      <TextInput
        style={styles.input}
        placeholder="Type here your full name"
        value={name}
        onChangeText={setName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 100,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    marginBottom: 50,
    paddingHorizontal: 10,
  },
  tab: {
    marginHorizontal: 5,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 40, // Set a fixed height for the tabs
    minWidth: 80, // Ensure a minimum width to maintain the oval shape
  },
  headerText: { // Adjust the padding to vertically center the text
    color: '#666',
    fontSize: 16,
    lineHeight: 24, // Adjust the line height to vertically center the text
  },
  activeTab: {
    backgroundColor: '#2f4f2f',
    borderColor: '#2f4f2f',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  progressBarContainer: {
    height: 5,
    width: '100%',
    backgroundColor: '#ccc',
    marginBottom: 20,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2f4f2f',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2f4f2f',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 16,
  },
});
