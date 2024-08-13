import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Top Memberras Section */}
        <Text style={styles.sectionTitle}>Top memberras</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {renderTopMembers()}
        </ScrollView>

        {/* Starred Memberras Section */}
        <Text style={styles.sectionTitle}>Starred memberras</Text>
        <View style={styles.starredContainer}>
          {renderStarredMembers()}
        </View>

        {/* Memberras to Approve Section */}
        <Text style={styles.sectionTitle}>Memberras to approve</Text>
        <View style={styles.approvalContainer}>
          {renderMembersToApprove()}
          <TouchableOpacity style={styles.addMoreButton}>
            <Text style={styles.addMoreText}>+ 20</Text>
          </TouchableOpacity>
        </View>

        {/* Touchpoints and Groups */}
        <View style={styles.touchpointsGroupsContainer}>
          <TouchableOpacity style={styles.touchpointBox}>
            <Text style={styles.touchpointText}>20</Text>
            <Text style={styles.touchpointSubText}>Touchpoints today</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchpointBox}>
            <Text style={styles.touchpointText}>10</Text>
            <Text style={styles.touchpointSubText}>Groups</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        {renderBottomNavigation()}
      </View>
    </View>
  );
}

function renderTopMembers() {
  const members = [
    { name: 'Freddie Brown', role: '#1 Tipper' },
    { name: 'Freddie Brown', role: '#1 Touchpoints' },
    { name: 'Freddie Brown', role: '#1 Referred' },
  ];
  return members.map((member, index) => (
    <View key={index} style={styles.memberCard}>
      <Image source={{ uri: 'https://example.com/freddie.jpg' }} style={styles.memberImage} />
      <Text style={styles.overlayText}>{index + 1}</Text>
      <Text style={styles.memberName}>{member.name}</Text>
      <Text style={styles.memberRole}>{member.role}</Text>
    </View>
  ));
}

function renderStarredMembers() {
  const members = [
    { name: 'Freddie Brown', role: 'Entrepreneur' },
    { name: 'Freddie Brown', role: 'Entrepreneur' },
    { name: 'Freddie Brown', role: 'Entrepreneur' },
  ];
  return members.map((member, index) => (
    <View key={index} style={styles.starredCard}>
      <Image source={{ uri: 'https://example.com/freddie.jpg' }} style={styles.starredImage} />
      <FontAwesome name="star" style={styles.starIcon} />
      <Text style={styles.starredName}>{member.name}</Text>
      <Text style={styles.starredRole}>{member.role}</Text>
    </View>
  ));
}

function renderMembersToApprove() {
  const members = [
    { name: 'Freddie Brown' },
    { name: 'Freddie Brown' },
    { name: 'Freddie Brown' },
  ];
  return members.map((member, index) => (
    <View key={index} style={styles.approvalCard}>
      <Image source={{ uri: 'https://example.com/freddie.jpg' }} style={styles.approvalImage} />
    </View>
  ));
}

function renderBottomNavigation() {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard' },
    { name: 'Memberras', icon: 'users' },
    { name: 'Scanner', icon: 'qrcode' },
    { name: 'Notifications', icon: 'bell' },
    { name: 'Settings', icon: 'cog' },
  ];
  return navItems.map((item, index) => (
    <TouchableOpacity key={index} style={styles.navItem}>
      <FontAwesome name={item.icon} size={24} color={index === 0 ? '#2f4f2f' : '#666'} />
      <Text style={[styles.navText, { color: index === 0 ? '#2f4f2f' : '#666' }]}>{item.name}</Text>
    </TouchableOpacity>
  ));
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2f4f2f',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  horizontalScroll: {
    paddingLeft: 15,
  },
  memberCard: {
    width: 120,
    marginRight: 15,
    alignItems: 'center',
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  overlayText: {
    position: 'absolute',
    top: 0,
    left: 0,
    fontSize: 40,
    color: '#fff',
    opacity: 0.7,
    fontWeight: 'bold',
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f4f2f',
    marginTop: 5,
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
  },
  starredContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 15,
  },
  starredCard: {
    width: 120,
    marginRight: 15,
    marginBottom: 15

  }

  //end of styles
});
