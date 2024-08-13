import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const InvitationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Exclusive invitation</Text>
        <Image
          source={require('../assets/images/invitation-image.png')}
          style={styles.image}
        />
        <Text style={styles.description}>
          The Park has invited you to apply for their membership. Before we can send your application, we would like to get to know you a bit better. You can swipe back and forth through the questions. It only takes 5 minutes and you can complete it any time within the next 24 hours.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Name')}>
          <Text style={styles.buttonText}>Let’s Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Styles remain the same

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2F4F2F',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#2F4F2F',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default InvitationScreen;
