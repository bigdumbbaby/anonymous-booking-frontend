import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import DropDownPicker from 'react-native-dropdown-picker';
//import { storage } from "../firebase/Firebase"
import * as ImagePicker from 'expo-image-picker';

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

export default function AddVenueForm({createVenue, user}) {
  const [name, setName] = useState("");
  const [type, setType] = useState("Misc.");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    createVenue(name, user.id, type, address, city, state, parseInt(zip))
  }

  // useEffect(() => {
  //   (async () => {
  //     if (Platform.OS !== 'web') {
  //       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  //       if (status !== 'granted') {
  //         alert('Sorry, we need camera roll permissions to make this work!');
  //       }
  //     }
  //   })();
  // }, []);

  const pickImage = async () => {
    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    // const { uri } = result
    // const filename = uri.substring(uri.lastIndexOf('/') + 1)
    // const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    // const imageData = await fetch(uploadUri)
    // const blob = await imageData.blob()
    // const task = storage
    //   .ref(`/images/${filename}`)
    //   .put(blob)
    //   .getDownloadURL()
    // try {
    //   await task
    // } catch(e) {
    //   console.error(e)
    // }
    // if (!result.cancelled) {
    //   setImage(result.uri);
    // }
    // console.log(image)
  };

  return (
    <View style={styles.container}>
      <Image 
      source={{uri: image}}
      style={{width: 162, height: 240, flex: 1}}
      />
      <Button title="Choose Photo" onPress={pickImage}/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <Text>Venue Type:</Text>
      <DropDownPicker 
      style={styles.dropDown}
      containerStyle={{height: 60, width: "70%"}}
      items={[
        { label: 'Show Space', value: 'show_space' },
        { label: 'Art Gallery', value: 'art_gallery' },
        { label: 'Film Screening', value: 'film_gallery' },
        { label: 'Misc.', value: 'misc' },
      ]}
      onChangeItem={item => setType(item.value)}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Address"
          placeholderTextColor="#003f5c"
          onChangeText={(address) => setAddress(address)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="City"
          placeholderTextColor="#003f5c"
          onChangeText={(city) => setCity(city)}
        />
      </View>
      <Text>State:</Text>
      <DropDownPicker 
      containerStyle={{height: 60, width: "70%"}}
      style={styles.dropDown}
      items={[
        { label: 'AL', value: 'al' },
        { label: 'AK', value: 'ak' },
        { label: 'AZ', value: 'az' },
        { label: 'AR', value: 'ar' },
        { label: 'CA', value: 'ca' },
        { label: 'CO', value: 'co' },
        { label: 'CT', value: 'ct' },
        { label: 'DE', value: 'de' },
        { label: 'FL', value: 'fl' },
        { label: 'GA', value: 'ga' },
        { label: 'HI', value: 'hi' },
        { label: 'ID', value: 'id' },
        { label: 'IL', value: 'il' },
        { label: 'IN', value: 'in' },
        { label: 'IA', value: 'ia' },
        { label: 'KS', value: 'ks' },
        { label: 'KY', value: 'ky' },
        { label: 'LA', value: 'la' },
        { label: 'ME', value: 'me' },
        { label: 'MD', value: 'md' },
        { label: 'MA', value: 'ma' },
        { label: 'MI', value: 'mi' },
        { label: 'MN', value: 'mn' },
        { label: 'MS', value: 'ms' },
        { label: 'MO', value: 'mo' },
        { label: 'MT', value: 'mt' },
        { label: 'NE', value: 'ne' },
        { label: 'NV', value: 'nv' },
        { label: 'NH', value: 'nh' },
        { label: 'NJ', value: 'nj' },
        { label: 'NM', value: 'nm' },
        { label: 'NY', value: 'ny' },
        { label: 'NC', value: 'nc' },
        { label: 'ND', value: 'nd' },
        { label: 'OH', value: 'oh' },
        { label: 'OK', value: 'ok' },
        { label: 'OR', value: 'or' },
        { label: 'PA', value: 'pa' },
        { label: 'RI', value: 'ri' },
        { label: 'SC', value: 'sc' },
        { label: 'SD', value: 'sd' },
        { label: 'TN', value: 'tn' },
        { label: 'TX', value: 'tx' },
        { label: 'UT', value: 'ut' },
        { label: 'VT', value: 'vt' },
        { label: 'VA', value: 'va' },
        { label: 'WA', value: 'wa' },
        { label: 'WV', value: 'wv' },
        { label: 'WI', value: 'wi' },
        { label: 'WY', value: 'wy' },
        { label: 'DC', value: 'dc' },
      ]}
      onChangeItem={item => setState(item.value)}
      />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Zip Code"
          placeholderTextColor="#003f5c"
          onChangeText={(zip) => setZip(zip)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>SUBMIT</Text>
      </TouchableOpacity>
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
  dropDown: {
    backgroundColor: "#add8e6",
    // borderRadius: 30,
    width: "70%",
    marginBottom: 20,

    alignItems: "center",
  },
  title: {
    paddingBottom: 30,
  },
  inputView: {
    backgroundColor: "#add8e6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

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
    width: 200,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#808080",
  },
});
