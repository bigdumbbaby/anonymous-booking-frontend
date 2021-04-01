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
    <View style={styles.connectionTextContainer}>
      <Text style={styles.artistText}>Message from: {artist.username}</Text>
      <TouchableOpacity onPress={handleBack}>
        <View style={styles.connectionMessageContainer}>
          <Text style={styles.messageText}>{selectedConnection.message}</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.artLinkTitleText}>Link to Art:</Text>
      <Text style={styles.artLinkText}>{selectedConnection.link}</Text>
      {selectedConnection.is_approved
        ? <Text style={styles.connectionText}> Status: Connected!</Text>
        : <TouchableOpacity style={styles.submitBtn} onPress={acceptConnection}>
            <Text style={styles.acceptText}>ACCEPT CONNECTION</Text>
          </TouchableOpacity>
    }
    </View>
  )
}

const styles = StyleSheet.create({
  artistText: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 28,
  },
  connectionTextContainer: {
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectionMessageContainer: {
    paddingLeft: 10,
    backgroundColor: '#add8e6',
    margin: 10,
    borderRadius: 20,
    width: 350,
    marginBottom: 25
  },
  messageText: {
    fontFamily: 'CrimsonPro_400Regular',
    padding: 15,
    fontSize: 30,
  },

  artLinkTitleText: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 25,
  },
  artLinkText: {
    fontFamily: 'CrimsonPro_400Regular',
    color: '#7f7f7f',
    fontSize: 25,
    paddingBottom: 25,
  },
  

  submitBtn: {
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#D3D3D3",
  },
  acceptText: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 20,
  },
  connectionText: {
    fontFamily: 'CrimsonPro_400Regular',
    color: 'green',
    fontSize: 25,
  }
});