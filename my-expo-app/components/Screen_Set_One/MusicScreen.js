import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons'; // Importing icons

export default function App() {
  const [activeTab, setActiveTab] = useState('Music');
  const [spotify, setSpotify] = useState('');
  const [youtube, setYoutube] = useState('');
  const [appleMusic, setAppleMusic] = useState('');

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

      <Text style={styles.title}>Make some noise</Text>
      <Text style={styles.subtitle}>Please add your music networks</Text>

      <Text style={styles.label}>Spotify</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="spotify" size={24} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="open.spotify.com/user/yourprofile"
          value={spotify}
          onChangeText={setSpotify}
        />
      </View>

      <Text style={styles.label}>YouTube</Text>
      <View style={styles.inputContainer}>
        <Entypo name="youtube" size={24} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="youtube.com/yourprofile"
          value={youtube}
          onChangeText={setYoutube}
        />
      </View>

      <Text style={styles.label}>Apple Music</Text>
      <View style={styles.inputContainer}>
        <FontAwesome name="apple" size={24} color="#666" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="applemusic.com/yourprofile"
          value={appleMusic}
          onChangeText={setAppleMusic}
        />
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
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#2f4f2f',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
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
