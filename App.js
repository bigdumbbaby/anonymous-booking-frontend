import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import ToggleLoginSignUp from './containers/ToggleLoginSignUp'
import HomePage from './containers/HomePage'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  CrimsonPro_200ExtraLight,
  CrimsonPro_300Light,
  CrimsonPro_400Regular,
  CrimsonPro_500Medium,
  CrimsonPro_600SemiBold,
  CrimsonPro_700Bold,
  CrimsonPro_800ExtraBold,
  CrimsonPro_900Black,
  CrimsonPro_200ExtraLight_Italic,
  CrimsonPro_300Light_Italic,
  CrimsonPro_400Regular_Italic,
  CrimsonPro_500Medium_Italic,
  CrimsonPro_600SemiBold_Italic,
  CrimsonPro_700Bold_Italic,
  CrimsonPro_800ExtraBold_Italic,
  CrimsonPro_900Black_Italic,
} from '@expo-google-fonts/crimson-pro';

export default function App() {
  const [user, setUser] = useState({});
  const [isOwner, setIsOwner] = useState(false)
  
  let [fontsLoaded] = useFonts({
    CrimsonPro_200ExtraLight,
    CrimsonPro_300Light,
    CrimsonPro_400Regular,
    CrimsonPro_500Medium,
    CrimsonPro_600SemiBold,
    CrimsonPro_700Bold,
    CrimsonPro_800ExtraBold,
    CrimsonPro_900Black,
    CrimsonPro_200ExtraLight_Italic,
    CrimsonPro_300Light_Italic,
    CrimsonPro_400Regular_Italic,
    CrimsonPro_500Medium_Italic,
    CrimsonPro_600SemiBold_Italic,
    CrimsonPro_700Bold_Italic,
    CrimsonPro_800ExtraBold_Italic,
    CrimsonPro_900Black_Italic,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

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
