import React from 'react'
import { View, Text } from 'react-native'
import VenueAddressCard from '../components/VenueAddressCard'

export default function IsArtistApproved({connection, selectedVenue}) {
  return (
    <View>
      {connection.is_approved
        ? <VenueAddressCard connection={connection} selectedVenue={selectedVenue}/> 
        : <Text>Waiting on a response from the venue owner.</Text>
      }
    </View>
  )
}
