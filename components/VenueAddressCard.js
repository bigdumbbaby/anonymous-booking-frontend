import React from 'react'
import { View, Text } from 'react-native'

export default function VenueAddressCard({selectedVenue}) {
  console.log(selectedVenue)
  return (
    <View>
      <Text>Approved!</Text>
      <Text>Address: {selectedVenue.venue.address}, {selectedVenue.venue.city}, {selectedVenue.venue.state}</Text>
    </View>
  )
}
