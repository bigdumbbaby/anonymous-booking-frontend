import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default function VenuCards({venue, setSelectedVenue, toggleVenueContainer}) {

  const handlePress = () => {
    setSelectedVenue({venue})
    toggleVenueContainer()
  }
  return (
    <View style={styles.venueCard}>
      <TouchableOpacity style={styles.imageTouchable} onPress={handlePress}>
        <Image 
          source={{uri: venue.image_link}}
          style={{width: 180, height: 180, flex: 1}}
        />
      </TouchableOpacity>
      <View style={styles.venueTextContainer}>
        <Text style={styles.venueText}>{venue.name}</Text>
        <Text style={styles.cityVenueText}>{venue.city}, {venue.state}</Text>
      </View>
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
    flex: 1,
    justifyContent: 'center',
    height: '5%',
    fontSize: 25,
    fontFamily: 'HelveticaNeue-Medium'
  },
  cityVenueText: {
    flex: 1,
    justifyContent: 'center',
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Medium'
  },
  venueTextContainer: {
    flexDirection: 'column',
    width: '50%',
    height: 200,
    paddingLeft: 10
  },
  imageTouchable: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 180, 
    height: 180,
  }
});

