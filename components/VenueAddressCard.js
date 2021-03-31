import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function VenueAddressCard({selectedVenue}) {
  console.log(selectedVenue)
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.venueText}>Approved!</Text>
      <Text style={styles.venueText}>The Address is: </Text>
      <Text style={styles.venueText}>{selectedVenue.venue.address}, {selectedVenue.venue.city}, {selectedVenue.venue.state}</Text>
      <Text style={styles.venueText}>{selectedVenue.venue.zip}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  addressContainer: {
    
  },
  venueText: {
    fontFamily: 'CrimsonPro_300Light',
    fontSize: 20
  }
})