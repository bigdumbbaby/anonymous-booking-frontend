import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import VenueAddressCard from '../components/VenueAddressCard'

export default function IsArtistApproved({connection, selectedVenue}) {
  return (
    <>
      {connection.is_approved
        ? <VenueAddressCard connection={connection} selectedVenue={selectedVenue}/> 
        : <View style={styles.textContainer}>
            <Text style={styles.waitingText}>Waiting on a response from the venue owner.</Text>
          </View>
      }
    </>
  )
}

const styles = StyleSheet.create({
  waitingText: {
    fontFamily: 'CrimsonPro_400Regular',
    paddingTop: 20,
    color: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    fontSize: 20,
  },
  textContainer: {
    paddingTop: 10,
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '80%'
  },
})