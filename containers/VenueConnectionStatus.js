import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import VenueAddressCard from '../components/VenueAddressCard'

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function VenueConnectionStatus({ selectedVenue, handlePress, handleSubmit, connection, isShowForm}) {

  const [isShowConnectButton, setIsShowConnectButton] = useState(true)
  const [isApproved, setIsApproved] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if(connection.id){
      setIsShowConnectButton(false)
      setIsApproved(connection.is_approved)
      setMessage("Wating on response from owner.")
    } else {
      setMessage("")
    }
  },[connection, isShowForm])
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
          <Text style={styles.venueText}>Name: {name}</Text>
          <Text style={styles.venueText}>Venue Type: {type}</Text>
        </View>
        {isShowConnectButton
          ? <TouchableOpacity style={styles.addressBtn} onPress={handleSubmit}>
              <Text>CONNECT</Text>
            </TouchableOpacity>
          : null
        }
        {isApproved
          ? <VenueAddressCard selectedVenue={selectedVenue}/>
          : <Text>{message}</Text>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  venueContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 90,
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  venueTextContainer: {
    height: 80
  },
  venueText: {
    flex: 1,
    justifyContent: 'center',
    flexWrap: 'wrap',
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Medium'
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
