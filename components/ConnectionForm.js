import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import DropDownPicker from 'react-native-dropdown-picker';
import { storage } from "../firebase/Firebase"
import * as ImagePicker from 'expo-image-picker';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function ConnectionForm({user, selectedVenue, handleSubmit, toggleConnection}) {
  const [message, setMessage] = useState("")
  const [link, setLink] = useState("")

  const handleConnectionSubmit = () => {
    const { owner_id } = selectedVenue.venue
    const data = {
      connection: {
        owner_id: owner_id,
        artist_id: user.id,
        message: message,
        link: link,
        is_approved: false
      }
    }
    AsyncStorage.getItem('token')
      .then(token => {
        fetch(baseURL + 'connections',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify(data)
        }).then(response => response.json())
        .then(users => console.log(users))
      })
    handleSubmit()
    toggleConnection()
  }

  return (
    <View style={styles.container}>
      <View style={styles.messageInputView}>
        <TextInput
          style={styles.messageTextInput}
          placeholder="Message."
          placeholderTextColor="#003f5c"
          multiline={true}
          onChangeText={(message) => setMessage(message)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Link."
          placeholderTextColor="#003f5c"
          onChangeText={(link) => setLink(link)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleConnectionSubmit}>
        <Text style={styles.loginText}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  dropDown: {
    backgroundColor: "#add8e6",
    // borderRadius: 30,
    width: "70%",
    marginBottom: 20,

    alignItems: "center",
  },
  title: {
    paddingBottom: 30,
  },
  inputView: {
    backgroundColor: "#add8e6",
    borderRadius: 30,
    width: 300,
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },
  messageInputView: {
    backgroundColor: "#add8e6",
    borderRadius: 30,
    width: 300,
    height: 350,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: 250
  },
  messageTextInput: {
    flex: 1,
    height: 100,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: 250,
    height: 300,
    paddingTop: 20
  },

  signUpButton: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#808080",
  },
});
