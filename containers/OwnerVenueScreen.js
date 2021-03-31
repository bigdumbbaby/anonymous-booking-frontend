import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Image } from 'react-native'
import ConnectionContainer from './ConnectionContainer'
import messageIcon from '../assets/messageIcon.png'

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function OwnerVenueScreen({ connections, toggleConnection, user}) {
  const [venue, setVenue] = useState({})
  const [isShowMessages, setIsShowMessages] = useState(false)

  const toggleVenuePage = () => {
    setIsShowMessages(!isShowMessages)
  }
  useEffect(() => {
    fetch(baseURL + `venues/${user.venue_id}`)
      .then(response => response.json())
      .then(grabbedVenue => {
        setVenue(grabbedVenue[0])
        console.log(venue.image_link)
      })
  },[])
  const {image_link, name, type, address, city, state, zip} = venue
  return (
    <>
    { !isShowMessages
      ? <View style={styles.messageIconView}>
          <TouchableOpacity onPress={toggleVenuePage}>
            <ImageBackground 
                source={messageIcon}
                style={styles.image}
              >
                <View style={styles.messageCountView}>
                  <Text style={styles.countText}>{connections.length}</Text>
                </View>
              </ImageBackground>
          </TouchableOpacity>
          <View style={styles.venueContainer}>
            <Image 
              source={{uri: image_link}}
              style={{width:300, height: 200}}
            />
            <View style={styles.venueTextContainer}>
              <Text style={styles.venueTitleText}>{name}</Text>
              <Text style={styles.venueText}>{type}</Text>
              <Text style={styles.venueText}>{address}</Text>
              <Text style={styles.venueText}>{city}, {state}</Text>
              <Text style={styles.venueText}>{zip}</Text>
            </View>
  
          </View>
        </View>
        : <ConnectionContainer toggleVenuePage={toggleVenuePage} connections={connections} toggleConnection={toggleConnection}/>
        
      }
      </>
      )
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100
  },
  messageCountView: {
    // flex: 1,
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center'
  },
  countText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'CrimsonPro_500Medium',
    fontSize: 18
  },
  messageIconView: {
    alignContent: 'flex-end'
  },
  venueCard: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  venueText: {
    justifyContent: 'center',
    fontSize: 25,
    color: '#7f7f7f',
    fontFamily: 'CrimsonPro_900Black'
  },
  venueTextContainer: {
    width: 300,
    paddingLeft: 10
  },
  venueTitleText: {
    fontSize: 55,
    fontFamily: 'CrimsonPro_400Regular',
  },
})