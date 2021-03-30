import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from "react";
import ToggleSwitch from 'toggle-switch-react-native'



export default function SignUpForm({ signUp, error, setError, toggleSignUp, isOwner, handleToggle }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const user = {
      username: username,
      email: email,
      password: password
    }
    signUp(user)
  }

  const handleLink = () => {
    setError("")
    toggleSignUp()
  }

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <ToggleSwitch
          isOn={isOwner}
          onColor="#add8e6"
          offColor="#F5F5F5"
          label="Venu Owner"
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
      {error === ""
        ? null 
        : <View style={styles.errorTextContainer}><Text>{error}</Text></View>
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
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  toggle: {
    padding: 25,
    flex: 1,
    flexDirection: 'row',
    height: '10%'
  },
  loginLink : {
    paddingTop: 10,
  },
  title: {
    paddingBottom: 30,
  },
  inputView: {
    backgroundColor: "#add8e6",
    borderRadius: 30,
    width: 300,
    height: 45,
    marginBottom: 20,
    marginHorizontal: 10,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
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
    backgroundColor: "#D3D3D3",
  },
});