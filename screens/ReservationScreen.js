import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ReservationScreen() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');

  const handleReservation = () => {
    if (dateError || timeError) {
      console.log('Invalid Date or Time');
      return;
    }
  
    // Send reservation data to the server
    fetch('http://your_server_ip:3000/submit-reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        date,
        time,
        guests,
      }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        // Reset form fields
        setName('');
        setDate('');
        setTime('');
        setGuests('');
      })
      .catch((error) => {
        console.error('Reservation submission error:', error);
      });
  };
    const formatTime = (inputTime) => {
    const regex = /^(0[1-9]|1[0-2]):([0-5]\d) (am|pm|AM|PM)$/;
    if (!regex.test(inputTime)) {
      setTimeError('Invalid Time');
      return inputTime;
    }
    setTimeError('');
    return inputTime;
  };

  const formatDate = (inputDate) => {
    const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(inputDate)) {
      setDateError('Invalid Date');
      return inputDate;
    }
    setDateError('');
    return inputDate;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 24,
          marginBottom: 20,
          color: 'red',
        }}
      >
        Reservation Page
      </Text>
      <View style={{ width: '80%' }}>
        <Text>Name:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Text>Date:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="dd/mm/yyyy"
          value={date}
          onChangeText={(text) => setDate(formatDate(text))}
        />
        {dateError ? <Text style={{ color: 'black' }}>{dateError}</Text> : null}
        <Text>Time:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="hh:mm am/pm"
          value={time}
          onChangeText={(text) => setTime(formatTime(text))}
        />
        {timeError ? <Text style={{ color: 'black' }}>{timeError}</Text> : null}
        <Text>Number of Guests:</Text>
        <TextInput
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 20,
          }}
          placeholder="Enter number of guests"
          value={guests}
          onChangeText={(text) => setGuests(text)}
          keyboardType="numeric"
        />
        <View style={{ backgroundColor: 'orange', borderRadius: 8, overflow: 'hidden' }}>
          <Button title="Submit Reservation" onPress={handleReservation} color="black" />
        </View>
      </View>
    </SafeAreaView>
  );
}
