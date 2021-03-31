import { View, Text, TouchableOpacity } from 'react-native'
import VenueForm from '../components/VenueForm'
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConnectionContainer from './ConnectionContainer'

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function OwnerHome({user, setUser}) {
  const [connections, setConnections] = useState([])
  const [error, setError] = useState({})
  const [isToggleConnection, setIsToggleConnection] = useState(false)

  useEffect(() => {
    fetch(`https://anonymous-booking-backend.herokuapp.com/connections/getMyConnections`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        my_id: user.id
      })
    })
      .then(response => response.json())
      .then(grabbedConnections => setConnections(grabbedConnections))
  },[isToggleConnection])


  const toggleConnection = () => {
    setIsToggleConnection(!isToggleConnection)
  }

  const createVenue = (name, owner_id, type, address, city, state, zip, image) => {
    const data = {
      venue: {
        name: name,
        owner_id: owner_id,
        type: type,
        address: address,
        city: city,
        state: state,
        zip: zip,
        image_link: image
      }
    }
    AsyncStorage.getItem('token')
      .then(token => {
        fetch(baseURL + 'venues', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(results => {
            if(results.error){
              setError(results.error)
            } else {
              setVenueData(results)
              setUser(results.owner)
            }
          })
      })
  }
  return (
    <View>
      {user.venue_id
        ? <ConnectionContainer connections={connections} toggleConnection={toggleConnection}/>
        : <VenueForm createVenue={createVenue} user={user}/>
      }
    </View>
  )
}