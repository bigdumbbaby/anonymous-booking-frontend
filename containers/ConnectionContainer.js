import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import ConnectionCard from '../components/ConnectionCard'
import ConnectionInfo from '../components/ConnectionInfo'

export default function ConnectionContainer({ connections }) {
  const [isShowAllConnections, setIshShowAllConnections] = useState(true)
  const [selectedConnection, setSelectedConnection] = useState({})

  const handlePress = (connection) => {
    setSelectedConnection(connection)
    setIshShowAllConnections(!isShowAllConnections)
  } 


  return (
    <ScrollView style={styles.connectionScrollView}>
      {isShowAllConnections
        ? connections.map(connection => <ConnectionCard 
          handlePress={handlePress}
          connection={connection}
          key={connection.id}
        />)
        : <ConnectionInfo 
          handlePress={handlePress}
          selectedConnection={selectedConnection}
          setSelectedConnection={setSelectedConnection}
        />
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  connectionScrollView: {
  },
});