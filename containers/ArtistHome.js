import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native'
import VenueCard from '../components/VenueCard'
import VenueContainer from './VenueContainer'

export default function ArtistHome() {
  const [venues, setVenues] = useState([])
  const [selectedVenue, setSelectedVenue] = useState({})
  const [isShowVenueContainer, setIsShowVenueContainer] = useState(false)
  useEffect(() => {
    fetch(`https://anonymous-booking-backend.herokuapp.com/venues`)
      .then(response => response.json())
      .then(grabbedVenues => setVenues(grabbedVenues))
  },[])
  const toggleVenueContainer = () => {
    setIsShowVenueContainer(!isShowVenueContainer)
  }
  // console.log(selectedVenue)
  return (
    <ScrollView>
      {isShowVenueContainer
        ? <VenueContainer 
          selectedVenue={selectedVenue} 
          setSelectedVenue={setSelectedVenue}
          toggleVenueContainer={toggleVenueContainer}
          />
        : venues.map(venue => <VenueCard 
          venue={venue}
          setSelectedVenue={setSelectedVenue}
          key={venue.id}
          toggleVenueContainer={toggleVenueContainer}
          />)
        }
      
    </ScrollView>
  )
}
