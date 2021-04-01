import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import ConnectionCard from '../components/ConnectionCard'
import ConnectionInfo from '../components/ConnectionInfo'

export default function ConnectionContainer({ connections, toggleConnection, toggleVenuePage }) {
  const [isShowAllConnections, setIshShowAllConnections] = useState(true)
  const [selectedConnection, setSelectedConnection] = useState({})
  
  

  const handlePress = (connection) => {
    setSelectedConnection(connection)
    setIshShowAllConnections(!isShowAllConnections)
  } 

  return (
    <ScrollView style={styles.connectionScrollView}>
      <TouchableOpacity style={styles.backBtn} onPress={toggleVenuePage}>
          <Text style={styles.backText}>BACK</Text>
      </TouchableOpacity>
      <View style={styles.conatiner}>
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
            toggleConnection={toggleConnection}
          />
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  connectionScrollView: {
    width: '100%',
    height: 600
  },
  container: {
    alignItems: 'center',
  },
  backBtn: {
    width: '100%',
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
    fontFamily: 'CrimsonPro_300Light'
  },
  backText: {
    fontFamily: 'CrimsonPro_300Light',
    fontSize: 20
  },
});