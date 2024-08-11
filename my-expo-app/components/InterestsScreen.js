import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, FontAwesome, Entypo } from '@expo/vector-icons'; // Importing icons

export default function App() {
  const [activeTab, setActiveTab] = useState('Interests');
  const [customInterest, setCustomInterest] = useState('');

  const tabOptions = ['Name','Photo','Birthday','Location','Socials','Value', 'Interests', 'Work', 'Career', 'Submit'];

  const interests = [
    { name: 'Travel', icon: <Ionicons name="md-globe" size={24} color="#2f4f2f" /> },
    { name: 'Sports', icon: <MaterialIcons name="sports-soccer" size={24} color="#2f4f2f" /> },
    { name: 'Music', icon: <FontAwesome name="music" size={24} color="#2f4f2f" /> },
    { name: 'Design', icon: <MaterialIcons name="design-services" size={24} color="#2f4f2f" /> },
    { name: 'Real Estate', icon: <Ionicons name="md-home" size={24} color="#2f4f2f" /> },
    { name: 'Cars', icon: <FontAwesome5 name="car" size={24} color="#2f4f2f" /> },
    { name: 'Photography', icon: <FontAwesome name="camera" size={24} color="#2f4f2f" /> },
    { name: 'Movies', icon: <MaterialIcons name="local-movies" size={24} color="#2f4f2f" /> },
    { name: 'Gaming', icon: <Ionicons name="md-game-controller" size={24} color="#2f4f2f" /> },
    { name: 'Food', icon: <MaterialIcons name="restaurant-menu" size={24} color="#2f4f2f" /> },
    { name: 'Nature', icon: <FontAwesome5 name="tree" size={24} color="#2f4f2f" /> },
  ];

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

      <Text style={styles.title}>Interests?</Text>

      <View style={styles.interestsContainer}>
        {interests.map((interest, index) => (
          <TouchableOpacity key={index} style={styles.interestButton}>
            {interest.icon}
            <Text style={styles.interestText}>{interest.name}</Text>
          </TouchableOpacity>
        ))}
        <View style={styles.interestButton}>
          <Ionicons name="add-outline" size={24} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Type here"
            value={customInterest}
            onChangeText={setCustomInterest}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    paddingTop: 100,
    backgroundColor: '#f5f5f5',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 20,
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
    height: 40,
    minWidth: 80,
  },
  headerText: {
    color: '#666',
    fontSize: 16,
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
    height: 4,
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
    marginBottom: 20,
    textAlign: 'center',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  interestButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 5,
    width: '45%',
  },
  interestText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#2f4f2f',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
});
