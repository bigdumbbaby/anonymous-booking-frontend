import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function VenueAddressCard({selectedVenue}) {
  console.log(selectedVenue)
  return (
    <View style={styles.addressContainer}>
      <Text style={styles.venueTextStatus}>Congradulations! You've been approved!</Text>
      <Text style={styles.venueText}>The Address is: </Text>
      <Text style={styles.venueTextAddress}>{selectedVenue.venue.address}, {selectedVenue.venue.city}, {selectedVenue.venue.state}</Text>
      <Text style={styles.venueTextAddress}>{selectedVenue.venue.zip}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  addressContainer: {
    paddingTop: 20,
  },

  venueText: {
    fontFamily: 'CrimsonPro_300Light',
    fontSize: 25,
    marginBottom: 10
  },
  venueTextStatus: {
    color: 'green',
    fontFamily: 'CrimsonPro_300Light',
    fontSize: 25,
    marginBottom: 10
  },
  venueTextAddress: {
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 28,
    marginBottom: 10
  }
})