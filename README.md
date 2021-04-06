# Anonymous Booking Frontend
> Communicate between Venue Owners and Artists anonymously



## General info
This is the frontend of my React Native phone app that allows DIY show space, film screening locations, and art galleries communicate with artists. After the Ghost Ship warehouse fire tragedy in 2016, many DIY art venues began to have their address leaked online, and their private information became publically accesible. With Anonymous Booking, users can communicate while knowing their information cannot be accessed without their consent.

## Intro Video
[Anonymous Booking Demo on YouTube](https://www.youtube.com/watch?v=gTYNDerOhs4)

## Technologies
* React Native
* React Native Elements
* Expo
* Node.js
* Express.js
* Knex.js
* FireBase Storage
* Heroku Hosting


## Setup
To run this project, first, install it locally by typing the following in the terminal:
```
git clone https://github.com/bigdumbbaby/anonymous-booking-frontend
```
Then CD into the repository and run the following:
```
npm install
```
Then run the app with: 
```
npm start
```


## Code Examples
```
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import VenueAddressCard from '../components/VenueAddressCard'
import IsArtistApproved from './IsArtistApproved'

const baseURL = 'https://anonymous-booking-backend.herokuapp.com/'

export default function VenueConnectionStatus({ selectedVenue, handlePress, handleSubmit, connection }) {


  const {image_link, name, type} = selectedVenue.venue
  return (
    <View style={styles.venueContainer}>
        <TouchableOpacity onPress={handlePress}>
          <Image 
            source={{uri: image_link}}
            style={{width:300, height: 200, marginTop: 10}}
          />
        </TouchableOpacity>
        <View style={styles.venueTextContainer}>
          <Text style={styles.venueTitleText}>{name}</Text>
          <Text style={styles.venueText}>{type}</Text>
        </View>
        {connection.id
          ? <IsArtistApproved connection={connection} selectedVenue={selectedVenue}/>
          : <TouchableOpacity style={styles.addressBtn} onPress={handleSubmit}>
              <Text style={{fontFamily: 'CrimsonPro_400Regular', fontSize: 20}}>CONNECT</Text>
            </TouchableOpacity>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  venueContainer: {
    flexDirection: 'column',
    paddingTop: 10,
    paddingLeft: 10,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  venueText: {
    justifyContent: 'center',
    fontSize: 25,
    color: '#7f7f7f',
    fontFamily: 'CrimsonPro_400Regular',
  },
  venueTextContainer: {
    width: 300,
    paddingLeft: 10
  },
  venueTitleText: {
    fontSize: 50,
    fontFamily: 'CrimsonPro_900Black'
  },
  addressBtn: {
    width: 300,
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#D3D3D3",
    fontFamily: 'CrimsonPro_400Regular'
  },
})
```



## Features
* Find Show Spaces, Film Screenings, Art Galleries, and Miscellaneous venues.
* Apply to connect with venue owners
* Recieve Messages from artits looking to book shows
* Encrypt information about venue
* Upload your own photos of your venue


To-do list:
* Refactor code
* Implement venu searching
* Filter Venues by type
* Encrypt more private information of user


## Status
Project functions as intended, more room for improvement 


## Inspiration
Protection of users information in local art communities.


## Contact
Created by [Colton O'Connor](https://www.linkedin.com/in/colton-o-connor/)