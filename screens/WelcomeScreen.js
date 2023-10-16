import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor: '#FFF'}}>
            <View className="flex-row justify-center">
                <Image source={require("../assets/logo.png")}
                    style={{height: 300,
                            width: 300,
                            borderRadius: 20,
                            position: "relative",
                            top: 10,
                            left: 45,
                            transform: [
                                { translateX: -45 },
                                { translateY: 50 },
                            ]
                            }} />
            </View>
            <View className="flex-1 flex justify-around my-10">
            <Text 
                className="text-black font-bold text-5xl text-center">
                Efficient Eats</Text>
               <View style={{ marginVertical: 10 }}>
                        <Text style={{
                            fontSize: 22,
                            color: themeColors.black,
                            textAlign: 'center',
                        }}>Welcome to Eficients Eats</Text>
                        <Text style={{
                            fontSize: 22,
                            color: themeColors.black,
                            textAlign: 'center',
                        }}>Food reservation app.</Text>
                    </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=> navigation.navigate('Login')}
                    className="py-3 bg-orange-500 mx-7 rounded-xl">
                        <Text 
                            className="text-xl font-bold text-center text-secondary-700"
                        >
                            Let's Get Started
                        </Text>
                </TouchableOpacity>
                <View className="flex-row justify-center">
                    <Text className="text-black font-bold text-1xl">Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                        <Text className="font-semibold text-1xl text-orange-500"> SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}