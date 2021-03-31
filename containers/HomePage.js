import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import OwnerHome from './OwnerHome';
import ArtistHome from './ArtistHome'

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function HomePage({ user, setUser, isOwner}) {
  const handleSubmit = () => {
    setUser({})
  }
  
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.logoutBtn} onPress={handleSubmit}>
          <Text style={styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.logoutBtn} onPress={handleGet}>
          <Text style={styles.loginText}>Get Users</Text>
        </TouchableOpacity> */}
        {isOwner
          ? <OwnerHome user={user} setUser={setUser}/>
          : <ArtistHome user={user}/>
        }
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: 150
  },

  logoutBtn: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
    fontFamily: 'CrimsonPro_300Light'
  },
  logoutText: {
    fontFamily: 'CrimsonPro_300Light',
    fontSize: 20
  },
});
