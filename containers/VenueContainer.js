import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import ConnectionForm from '../components/ConnectionForm'
import VenueConnectionStatus from './VenueConnectionStatus'

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function VenueContainer({setSelectedVenue, selectedVenue, toggleVenueContainer, user }) {
  
  const {owner_id} = selectedVenue.venue

  const handlePress = () => {
    setSelectedVenue({})
    toggleVenueContainer()
  }
  // const [isApproved, setIsApproved] = useState(false)
  // const [isConnected, setIsConnected] = useState(false)
  const [connection, setConnection] = useState({})
  const [isShowForm, setIsShowForm] = useState(false)
  

  const handleSubmit = () => {
    setIsShowForm(!isShowForm)
  }

  useEffect(() => {
    fetch(baseURL + 'connections/checkForConnection', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        owner_id: owner_id,
        artist_id: user.id
      })
    })
      .then(response => response.json())
      .then(result => {
        if(result){
          setConnection(result[0])
        }else {
          setConnection({})
        }
      })
  },[])

  return (
    <>
      {isShowForm
      ? <ConnectionForm selectedVenue={selectedVenue} user={user} handleSubmit={handleSubmit}/>
      : <VenueConnectionStatus connection={connection} user={user} handlePress={handlePress} selectedVenue={selectedVenue} handleSubmit={handleSubmit} isShowForm={isShowForm}/>
      }
    </>
  )
}

const styles = StyleSheet.create({
  addressBtn: {
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#808080",
  },
})