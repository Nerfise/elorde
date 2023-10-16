import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  const handleReserveClick = () => {
    navigation.navigate('Reservation');
  };

  return (
    <SafeAreaView style={{ 
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      paddingTop: 20,
    
    }}>
      <Text style={{ 
        fontSize: 40, 
        fontWeight: 'bold', 
        color: 'red', 
        marginTop: 20 
      }}>
        Efficient Eats
      </Text>
      <Text style={{ 
        fontSize: 40, 
        fontWeight: 'bold', 
        color: 'red' 
      }}>
        Restaurant Booking
      </Text>
      <View style={{ 
        paddingHorizontal: 20, 
        marginTop: 50 
      }}>
        <Text style={{ 
          fontSize: 20, 
          color: 'black' 
        }}>
          Efficient Eats is a formal restaurant that aims to provide and improve operational efficiency while also
          improving the overall customer experience. This all-inclusive system provides a complete approach to 
          managing numerous elements of restaurant operations, such as ordering, inventory management, scheduling,
          and customer relationship management....
        </Text>
      </View>

      <TouchableOpacity 
        onPress={handleReserveClick} 
        style={{ 
          backgroundColor: 'orange', 
          padding: 15, 
          borderRadius: 100, 
          marginTop: 190 
        }}
      >
        <Text style={{ 
          fontSize: 24, 
          fontWeight: 'bold', 
          color: 'black' 
        }}>
          Reserve
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}


