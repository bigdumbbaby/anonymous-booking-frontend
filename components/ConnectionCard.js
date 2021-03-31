import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function ConnectionCard({connection, handlePress}) {
  const handleGetConnection = () => {
    handlePress(connection)
  }
  return (
    <View style={styles.connectionCard}>
      <TouchableOpacity onPress={handleGetConnection}>
          <Text style={styles.connectionText}>
            {connection.artist[0].username}:
          </Text>
          <Text>{connection.message}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  connectionCard: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  connectionText: {
    justifyContent: 'center',
    fontSize: 25,
    height: 100,
    fontFamily: 'HelveticaNeue-Medium'
  },
  connectionTextContainer: {
    flexDirection: 'row',
    height: 100,
    paddingLeft: 10
  }
});
