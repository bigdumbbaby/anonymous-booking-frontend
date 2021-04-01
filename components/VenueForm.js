import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'
import DropDownPicker from 'react-native-dropdown-picker';
import { storage } from "../firebase/Firebase"
import * as ImagePicker from 'expo-image-picker';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
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
    createVenue(name, user.id, type, address, city, state, parseInt(zip), image)
  }

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const { uri } = result
    const filename = uri.substring(uri.lastIndexOf('/') + 1)
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
    const imageData = await fetch(uploadUri)
    const blob = await imageData.blob()
    const task = storage
      .ref(`/images/${filename}`)
      .put(blob)
      // .getDownloadURL()
      .then()
    try {
      await task
    } catch(e) {
      console.error(e)
    }
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.formScroll} contentContainerStyle={{ flexGrow: 1 }}>
      <View>
        {image === ""
          ? null
          : <Image 
          source={{uri: image}}
          style={{width: 162, height: 200, flex: 1}}
          />
        }
      </View>
      
      <Button title="Choose Photo" onPress={pickImage}/>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>
      <View>
      <Text>Venue Type:</Text>
      <DropDownPicker 
      style={styles.dropDown}
      containerStyle={{height: 60, width: "70%"}}
      items={[
        { label: 'Show Space', value: 'Show Space' },
        { label: 'Art Gallery', value: 'Art Gallery' },
        { label: 'Film Screening', value: 'Film Screening' },
        { label: 'Misc.', value: 'Misc.' },
      ]}
      onChangeItem={item => setType(item.value)}
      />

      </View>
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
      <View>
      <Text>State:</Text>
      <DropDownPicker 
      containerStyle={{height: 60, width: "70%"}}
      style={styles.dropDown}
      items={[
        { label: 'AL', value: 'AL' },
        { label: 'AK', value: 'AK' },
        { label: 'AZ', value: 'AZ' },
        { label: 'AR', value: 'AR' },
        { label: 'CA', value: 'CA' },
        { label: 'CO', value: 'CO' },
        { label: 'CT', value: 'CT' },
        { label: 'DE', value: 'DE' },
        { label: 'FL', value: 'FL' },
        { label: 'GA', value: 'GA' },
        { label: 'HI', value: 'HI' },
        { label: 'ID', value: 'ID' },
        { label: 'IL', value: 'IL' },
        { label: 'IN', value: 'IN' },
        { label: 'IA', value: 'IA' },
        { label: 'KS', value: 'KS' },
        { label: 'KY', value: 'KY' },
        { label: 'LA', value: 'LA' },
        { label: 'ME', value: 'ME' },
        { label: 'MD', value: 'MD' },
        { label: 'MA', value: 'MA' },
        { label: 'MI', value: 'MI' },
        { label: 'MN', value: 'MN' },
        { label: 'MS', value: 'MS' },
        { label: 'MO', value: 'MO' },
        { label: 'MT', value: 'MT' },
        { label: 'NE', value: 'NE' },
        { label: 'NV', value: 'NV' },
        { label: 'NH', value: 'NH' },
        { label: 'NJ', value: 'NJ' },
        { label: 'NM', value: 'NM' },
        { label: 'NY', value: 'NY' },
        { label: 'NC', value: 'NC' },
        { label: 'ND', value: 'ND' },
        { label: 'OH', value: 'OH' },
        { label: 'OK', value: 'OK' },
        { label: 'OR', value: 'OR' },
        { label: 'PA', value: 'PA' },
        { label: 'RI', value: 'RI' },
        { label: 'SC', value: 'SC' },
        { label: 'SD', value: 'SD' },
        { label: 'TN', value: 'TN' },
        { label: 'TX', value: 'TX' },
        { label: 'UT', value: 'UT' },
        { label: 'VT', value: 'VT' },
        { label: 'VA', value: 'VA' },
        { label: 'WA', value: 'WA' },
        { label: 'WV', value: 'WV' },
        { label: 'WI', value: 'WI' },
        { label: 'WY', value: 'WY' },
        { label: 'DC', value: 'DC' },
      ]}
      onChangeItem={item => setState(item.value)}
      />

      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Zip Code"
          placeholderTextColor="#003f5c"
          onChangeText={(zip) => setZip(zip)}
        />
      </View>
      <View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
        <Text style={styles.loginText}>SUBMIT</Text>
      </TouchableOpacity>

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'column'
  },
  formScroll: {
    backgroundColor: "#fff",
  },
  dropDown: {
    backgroundColor: "#add8e6",
    width: 250,
    marginBottom: 20,

    alignItems: "center",
  },
  cityStateContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  title: {
    paddingBottom: 30,
  },
  inputView: {
    backgroundColor: "#add8e6",
    borderRadius: 300,
    width: 250,
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
    width: 250,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#808080",
  },
});
