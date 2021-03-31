import React from 'react'
import { View, Text } from 'react-native'
import VenueAddressCard from '../components/VenueAddressCard'

export default function IsArtistApproved({is_approved}) {
  return (
    <View>
      {is_approved
        ? <VenueAddressCard /> 
        : <Text>Waiting on a response from the venue owner.</Text>
      }
    </View>
  )
}
