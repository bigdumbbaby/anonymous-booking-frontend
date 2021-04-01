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
            style={{width:300, height: 200, marginTop: 10}}
          />
        </TouchableOpacity>
        <View style={styles.venueTextContainer}>
          <Text style={styles.venueTitleText}>{name}</Text>
          <Text style={styles.venueText}>{type}</Text>
        </View>
        {connection.id
          ? <IsArtistApproved connection={connection} selectedVenue={selectedVenue}/>
          : <TouchableOpacity style={styles.addressBtn} onPress={handleSubmit}>
              <Text style={{fontFamily: 'CrimsonPro_400Regular', fontSize: 20}}>CONNECT</Text>
            </TouchableOpacity>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  venueContainer: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  venueText: {
    justifyContent: 'center',
    fontSize: 25,
    color: '#7f7f7f',
    fontFamily: 'CrimsonPro_400Regular',
  },
  venueTextContainer: {
    width: 300,
    paddingLeft: 10
  },
  venueTitleText: {
    fontSize: 50,
    fontFamily: 'CrimsonPro_900Black'
  },
  addressBtn: {
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#D3D3D3",
    fontFamily: 'CrimsonPro_400Regular'
  },
})
