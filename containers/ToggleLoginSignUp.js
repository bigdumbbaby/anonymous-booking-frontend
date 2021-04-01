import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image} from 'react-native'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import AsyncStorage from '@react-native-async-storage/async-storage'
import venue from '../assets/venue.jpg'
import americanGrandma from '../assets/americanGrandma.jpg'
import logo from '../assets/logo.png'


const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function ToggleLoginSignUp({ setUser, user, isOwner, setIsOwner}) {
  const [isShowSignUp, setIsShowSignUp] = useState(false)
  const [error, setError] = useState("");

  const toggleSignUp = () => {
    setIsShowSignUp(!isShowSignUp)
  }

  const login = (username, password) => {
    let data = {
      artist: {
        username: username,
        password: password
      }
    }
    if(isOwner){
      data = {
        owner: {
          username: username,
          password: password
        }
      }
    }
    fetch(baseURL + 'login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(results => {
        if(results.token){
          // localStorage.setItem('token', result.token)
          AsyncStorage.setItem('token', results.token)
          setUser(results.user)
        } else {
          setError(results)
        }
        // setUser(results.user)

      })
  }

  const signUp = user => {
    let signUpLink = "artists"
    let data = {
      artist: {
        username: user.username,
        email: user.email,
        password: user.password
      }
    }
    if(isOwner){
      signUpLink = 'owners'
      data = {
        owner: {
          username: user.username,
          email: user.email,
          password: user.password
        }
      }
    }
    fetch(baseURL + signUpLink, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      if(result.message){
        setError(result.message)
      } else {
        if(result.owner){
          setUser(result.owner)
        } else {
          setUser(result.artist)
        }
        setError("")
      }
    })
  }

  const handleToggle = () => {
    setIsOwner(!isOwner)
  }
  
  return (
    <View style={styles.container}>
      <ImageBackground source={americanGrandma} style={styles.image}>
        {isShowSignUp
          ? <SignUpForm 
            error={error}
            setError={setError} 
            signUp={signUp} 
            toggleSignUp={toggleSignUp}
            isOwner={isOwner}
            handleToggle={handleToggle}
          />
          : <LoginForm 
            error={error} 
            setError={setError} 
            login={login} 
            toggleSignUp={toggleSignUp}
            isOwner={isOwner}
            handleToggle={handleToggle}
          />
        } 
      </ImageBackground>
    </View>

  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: 'center',
    justifyContent: 'center',
  },
  // logoContainer: {
  //   alignContent: 'center',
  //   justifyContent: 'center',
  //   width: 500
  // },
  image: {
    flex: 1,
    // resizeMode: "cover",
    // borderRadius: ,
    height: 800,
    opacity: 1,
    textAlign: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignContent: "center",
    textAlign: 'center'
  },
  logoContainer: {
    justifyContent: 'center',
    alignContent: "center",
    textAlign: 'center',
    width: 50,
  },
  title: { 
    fontFamily: 'CrimsonPro_300Light_Italic',
    fontSize: 65,
    color: "#30819c",
    textAlign: 'center',
    height: 100
  },
})
