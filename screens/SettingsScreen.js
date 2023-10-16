import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function SettingsScreen() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Settings Page</Text>
      <TouchableOpacity onPress={handleLogout} style={{ backgroundColor: 'orange', padding: 10, borderRadius: 8, marginTop: 20 }}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
