
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { themeColors } from '../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setName] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [isLoading, setIsLoading] = useState(false); 
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordsMatch(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setPasswordsMatch(value === password);
  };

  const handleSubmit = async () => {
    if (email && password && passwordsMatch && fullName) {
      try {
        setIsLoading(true); 

        await createUserWithEmailAndPassword(auth, email, password, fullName);

     
        setSignupSuccess(true);
        setIsLoading(false);
      } catch (err) {
        console.log('got error: ', err.message);
        setIsLoading(false); 
      }
    }  else {
            if (!fullName) {
                alert('Please enter your Full Name');
            } else if (!email) {
                alert('Please enter your Email Address');
            } else if (!password) {
                alert('Please enter your Password');
            } else if (!confirmPassword) {
                alert('Please confirm your Password');
            } else if (!passwordsMatch) {
                alert('Password and Confirm Password must match');
            }
        }
    };

   return (
  <View className="flex-1 bg-white" style={{ backgroundColor: themeColors.secondary }}>
    <SafeAreaView className="flex">
      <View className="flex-row justify-start"></View>
      <View className="flex-row justify-center">
        <Image source={require('../assets/logo.png')} style={{ width: 300, height: 200 }} />
      </View>
    </SafeAreaView>
    <View className="flex-1 bg-red px-8 pt-8" style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
      {isLoading ? (
        <View className="flex items-center justify-center h-full">
          <Text>You are already signed up!</Text>
        </View>
      ) : signupSuccess ? (
        <View className="flex items-center justify-center h-full">
          <Text>You are already signed up!</Text>
        </View>
      ) : (
        <View className="form space-y-2">
          <Text className="text-black ml-4 font-bold">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-0"
            value={fullName}
            onChangeText={(value) => setName(value)}
            placeholder="Enter Name"
          />
          <Text className="text-black ml-4 font-bold">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-0"
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Enter Email"
          />
          <Text className="text-black ml-4 font-bold">Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-0"
            secureTextEntry={isSecureEntry}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter Password"
          />
          <TouchableOpacity
            onPress={() => setIsSecureEntry((prev) => !prev)}
            style={{ position: 'absolute', right: 20, top: 197 }}
          >
            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
          <Text className="text-black ml-4 font-bold">Confirm Password</Text>
          <TextInput
            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-1"
            secureTextEntry={isSecureEntry}
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            placeholder="Confirm Password"
          />
          <TouchableOpacity
            onPress={() => setIsSecureEntry((prev) => !prev)}
            style={{ position: 'absolute', right: 20, top: 280 }}
          >
            <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
          {!passwordsMatch && (
            <Text className="text-red ml-4">Passwords do not match</Text>
          )}
          <TouchableOpacity
            className="py-3 bg-orange-500 rounded-xl"
            onPress={handleSubmit}
          >
            <Text className="font-xl text-xl font-bold text-center text-black">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      )}
      <Text className="text-xl text-black font-bold text-center py-1">
        Or
      </Text>
      <View className="flex-row justify-center space-x-12">
      </View>
      <View className="flex-row justify-center mt-0">
        <Text className="text-black font-bold">Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="font-semibold text-orange-500"> Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

  }