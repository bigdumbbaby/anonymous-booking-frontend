import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";
import ToggleSwitch from 'toggle-switch-react-native'



export default function SignUpForm({ signUp, error, setError, toggleSignUp, isOwner, handleToggle }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    if(password === confirmPassword){
      const user = {
        username: username,
        email: email,
        password: password
      }
      signUp(user)
    } else {
      setError("Password must match.")
    }
  }

  const handleLink = () => {
    setError("")
    toggleSignUp()
  }

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Text>VenueOwner</Text>
        <ToggleSwitch
          isOn={isOwner}
          onColor="#add8e6"
          offColor="#F5F5F5"
          labelStyle={{ color: "black" }}
          size="large"
          style={styles.toggle}
          onToggle={handleToggle}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        />
      </View>
      {error === ""
        ? null 
        : <View><Text style={{color: 'red'}}>{error}</Text></View>
      }

      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.loginLink} onPress={handleLink}>Need to login?</Text>
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
  toggleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: '25%',
  },
  toggle: {
    paddingBottom: 10,
  },
  loginLink : {
    paddingTop: 10,
  },
  title: {
    paddingBottom: 30,
  },
  inputView: {
    // backgroundColor: "#add8e6",
    borderColor: "#add8e6",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 45,
    marginBottom: 20,
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    width: 150
  },

  signUpButton: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#add8e6",
  },
});