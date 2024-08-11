import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [activeTab, setActiveTab] = useState('Photo');
  const [photos, setPhotos] = useState([null, null, null, null, null, null]);

  const tabOptions = ['Name', 'Photo', 'Birthday', 'Location', 'Socials'];

  const getProgressWidth = () => {
    const index = tabOptions.indexOf(activeTab);
    return `${((index + 1) / tabOptions.length) * 100}%`;
  };

  const handlePhotoPress = (index) => {
    // Function to handle photo selection
    console.log(`Photo ${index + 1} pressed`);
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

      <Text style={styles.title}>Time to put a face to the name</Text>
      <Text style={styles.subtitle}>
        Attach clear facial photos or videos that best represent you. Remember, we are not a dating app, but we are also not Linked-In. Show us your swag!
      </Text>

      <View style={styles.photoGrid}>
        {photos.map((photo, index) => (
          <TouchableOpacity key={index} style={styles.photoBox} onPress={() => handlePhotoPress(index)}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.photo} />
            ) : (
              <View style={styles.addPhotoContainer}>
                <AntDesign name="plus" size={24} color="#2f4f2f" />
                <Text style={styles.photoIndex}>{index + 1}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.dragText}>Hold to drag and reorder</Text>

      <TouchableOpacity style={styles.photoTipsContainer}>
        <AntDesign name="camera" size={24} color="#2f4f2f" />
        <Text style={styles.photoTipsText}>Want to make sure you really shine? Check out our photo tips</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
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
    paddingHorizontal: 20,
  },
  photoGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  photoBox: {
    width: '30%',
    aspectRatio: 1,
    borderWidth: 1,
    borderColor: '#2f4f2f',
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhotoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  photoIndex: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 16,
    color: '#2f4f2f',
  },
  dragText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
  photoTipsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  photoTipsText: {
    fontSize: 16,
    color: '#2f4f2f',
    marginLeft: 10,
  },
});
