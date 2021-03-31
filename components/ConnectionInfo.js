import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'
export default function ConnectionInfo({selectedConnection, 
  handlePress, 
  setSelectedConnection,  
  toggleConnection}) {

  const handleBack = () => {
    handlePress({})
  }
  const artist= selectedConnection.artist[0]

  const acceptConnection = () => {
    fetch(baseURL + `connections/${selectedConnection.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(connection => {
      setSelectedConnection(connection)
      toggleConnection()
    })
  }
  return (
    <View>
      <TouchableOpacity onPress={handleBack}>
        <Text> Message from: {artist.username}</Text>
        <Text>{selectedConnection.message}</Text>
        <Text>{selectedConnection.link}</Text>
      </TouchableOpacity>
      {selectedConnection.is_approved
        ? <Text>Connected!</Text>
        : <TouchableOpacity style={styles.submitBtn} onPress={acceptConnection}>
            <Text style={styles.loginText}>ACCEPT CONNECTION</Text>
          </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#D3D3D3",
  },
});