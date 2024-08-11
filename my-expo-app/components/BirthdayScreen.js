import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Modal } from 'react-native';
import DatePicker from 'react-native-date-picker';

export default function App() {
  const [activeTab, setActiveTab] = useState('Birthday');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const tabOptions = ['Photo', 'Birthday', 'Location', 'Socials', 'Music'];

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

      <Text style={styles.title}>Happy birthday</Text>
      <Text style={styles.subtitle}>Which date can we celebrate?</Text>

      <TouchableOpacity style={styles.datePickerButton} onPress={() => setOpen(true)}>
        <Text style={styles.dateText}>
          {date.toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </Text>
      </TouchableOpacity>

      <Modal visible={open} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <DatePicker
            date={date}
            onDateChange={setDate}
            mode="date"
            androidVariant="iosClone" // Optional, to have consistent UI across platforms
          />
          <TouchableOpacity style={styles.closeButton} onPress={() => setOpen(false)}>
            <Text style={styles.closeButtonText}>Done</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  datePickerButton: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateText: {
    fontSize: 18,
    color: '#2f4f2f',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#2f4f2f',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
