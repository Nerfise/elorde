import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const developerData = [
  { name: 'Gabriel Nipal', role: 'Front End / Back End', image: require('../assets/img1.jpg') },
  { name: 'Alexander Uson', role: 'Front End / Back End', image: require('../assets/img2.jpg') },
  { name: 'Joey Torio', role: 'Front End / Back End', image: require('../assets/img3.jpg') },
  { name: 'Brien Myell Lee', role: 'Front End', image: require('../assets/img4.jpg') },
  { name: 'Mark Raymond De Luna', role: 'Front End', image: require('../assets/img5.jpg') },
];

const AboutUs = () => {
  return (
    <View style={styles.container}>

     
      <Text style={styles.developerTitle}>Meet the Developers:</Text>

      {developerData.map((developer, index) => (
        <View key={index} style={styles.developerContainer}>
          <Image source={developer.image} style={styles.avatar} />
          <View style={styles.developerInfo}>
            <Text style={styles.name}>{developer.name}</Text>
            <Text style={styles.role}>{developer.role}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#101820FF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e67e22'
  },
  introText: {
    marginBottom: 20,
    color: 'white'
  },
  developerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#e67e22'
  },
  developerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 10,
  },
  developerInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e67e22'
  },
  role: {
    fontSize: 15,
    color: 'white'
  },
});

export default AboutUs;

