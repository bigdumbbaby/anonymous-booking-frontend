import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import ToggleSwitch from 'toggle-switch-react-native'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView
} from "react-native";

export default function LoginForm({error, setError, toggleSignUp, login, isOwner, handleToggle}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    login(username, password)
  }

  const handleLink = () => {
    setError("")
    toggleSignUp()
  }

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleTextInput}>Venue Owner</Text>
        <ToggleSwitch
          isOn={isOwner}
          onColor="#C54350"
          offColor="#F5F5F5"
          labelStyle={{ color: "black"}}
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
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      {error !== ""
      ? <Text style={{color: 'red'}}>{error}</Text> 
      : null
      }

      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.signUpLink} onPress={handleLink}>Need to sign up?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center",
  },
  toggleContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
  },
  toggle: {
    paddingBottom: 10
  },
  signUpLink : {
    paddingTop: 10,
    color: 'black',
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 18,
  },
  title: {
    paddingBottom: 30,
  },
  inputView: {
    // backgroundColor: "#add8e6",
    borderColor: "#C54350",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    height: 45,
    marginBottom: 20,
    backgroundColor: 'white'
  },

  TextInput: {
    flex: 1,
    marginLeft: 20,
    width: 150,
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 18,
  },

  toggleTextInput: {
    color: 'black',
    fontFamily: 'CrimsonPro_400Regular',
    fontSize: 18,
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
    backgroundColor: "#C54350",
  },
});
