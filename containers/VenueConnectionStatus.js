import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import VenueAddressCard from '../components/VenueAddressCard'
import IsArtistApproved from './IsArtistApproved'

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function VenueConnectionStatus({ selectedVenue, handlePress, handleSubmit, connection }) {


  const {image_link, name, type} = selectedVenue.venue
  return (
    <View style={styles.venueContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Image 
            source={{uri: image_link}}
            style={{width:300, height: 200, flex: 1}}
          />
        </TouchableOpacity>
        <View style={styles.venueTextContainer}>
          <Text style={styles.venueTitleText}>{name}</Text>
          <Text style={styles.venueText}>{type}</Text>
        </View>
        {connection.id
          ? <IsArtistApproved />
          : <TouchableOpacity style={styles.addressBtn} onPress={handleSubmit}>
              <Text>CONNECT</Text>
            </TouchableOpacity>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  venueCard: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  venueText: {
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: 'CrimsonPro_900Black'
  },
  cityVenueText: {
    justifyContent: 'center',
    fontSize: 18,
    color: '#7f7f7f',
    fontFamily: 'CrimsonPro_300Light'
  },
  venueTextContainer: {
    width: 300,
    paddingLeft: 10
  },
  venueTitleText: {
    fontSize: 55,
    paddingBottom: 10,
    fontFamily: 'CrimsonPro_400Regular',
  },
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
