import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function ConnectionCard({connection, handlePress}) {
  const handleGetConnection = () => {
    handlePress(connection)
  }
  return (
    <View style={styles.connectionCard}>
      <TouchableOpacity onPress={handleGetConnection}>
        <View style={styles.connectionTextContainer}>
          <View style={styles.artistNameContainer}>
            <Text style={styles.artistText}>
              {connection.artist[0].username}:
            </Text>
          </View>
          <Text style={styles.connectionText}>{connection.message}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  connectionCard: {
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add8e6',
    margin: 15,
    borderRadius: 20,
    width: 340
  },
  connectionText: {
    justifyContent: 'center',
    fontSize: 25,
    fontFamily: 'CrimsonPro_400Regular',
    width: 220
  },
  artistText: {
    fontSize: 15,
    fontFamily: 'CrimsonPro_400Regular',
    width: 225
  },
  artistNameContainer: {
    marginRight: 12,
    backgroundColor: '#2a7189',
    width: 70,
    height: 70,
    borderRadius: 500,
    // textAlign: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  connectionTextContainer: {
    flexDirection: 'row',
    paddingLeft: 10
  }
});
