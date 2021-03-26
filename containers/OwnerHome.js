import { View, Text } from 'react-native'
import VenueForm from '../components/VenueForm'
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function OwnerHome({user, setUser}) {
  console.log(user.venue_id)
  const [venueData, setVenueData] = useState({})
  const [error, setError] = useState({})

  console.log(user)
  const createVenue = (name, owner_id, type, address, city, state, zip) => {
    const data = {
      venue: {
        name: name,
        owner_id: owner_id,
        type: type,
        address: address,
        city: city,
        state: state,
        zip: zip
      }
    }
    console.log(data)
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
              console.log(user)
            }
    
          })
      })
  }
  return (
    <View>
      {user.venue_id
        ? <Text>signed in</Text>
        : <VenueForm createVenue={createVenue} user={user}/>
      }
    </View>
  )
}

