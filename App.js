import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import ToggleLoginSignUp from './containers/ToggleLoginSignUp'
import HomePage from './containers/HomePage'

export default function App() {
  const [user, setUser] = useState({});
  const [isOwner, setIsOwner] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      {user.username
        ? <HomePage user={user} setUser={setUser} isOwner={isOwner} />
        : <ToggleLoginSignUp setUser={setUser} user={user} isOwner={isOwner} setIsOwner={setIsOwner}/>
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})
