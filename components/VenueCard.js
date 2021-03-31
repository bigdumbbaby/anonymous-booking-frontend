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
          style={{width: 180, height: 180, flex: 1, borderRadius: 5}}
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
    width: '50%',
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

