import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import LoginForm from '../components/LoginForm'
import SignUpForm from '../components/SignUpForm'
import AsyncStorage from '@react-native-async-storage/async-storage'


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
    console.log(baseURL + signUpLink)
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
        console.log(error)
      } else {
        if(result.owner){
          setUser(result.owner)
        } else {
          setUser(result.artist)
        }
        setError("")
        console.log(results)
      }
    })
    console.log(user)
  }

  const handleToggle = () => {
    setIsOwner(!isOwner)
  }

  return (
    <View style={styles.container}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#808080",
  },
})
