import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ContactScreen() {
  return (
    <SafeAreaView style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: 'white'
     }}

    >
      <Text style={{ 
        fontSize: 34, 
        marginBottom: 20, 
        color: 'red' }}
      >
        Contact Us
      </Text>
      <View style={{ width: '80%' }}>
        <SectionHeading>Contact Information:</SectionHeading>
        <Text>Phone: +63 917 391 1931</Text>
        <Text>Email: efficienteats@gmail.com</Text>
        <SectionHeading>Address:</SectionHeading>
        <Text>69 Herero Main Street City of DagupanPhilippines</Text>
        
        
      </View>
    </SafeAreaView>
  );
}

function SectionHeading({ children }) {
  return <Text style={{ fontSize: 18, marginTop: 20, marginBottom: 10 }}>{children}</Text>;
}
