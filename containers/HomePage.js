import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import OwnerHome from './OwnerHome';
import ArtistHome from './ArtistHome'
import logo from '../assets/logo.png'


const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function HomePage({ user, setUser, isOwner}) {
  const handleSubmit = () => {
    setUser({})
  }
  
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.imageLogo}/>
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
    backgroundColor: "#fff",
    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: 150
  },

  imageLogo: {
    height: 80,
    width: 80
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
