import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';


export default function FilterButtons({ setFilter }) {
  return (
    <View style={styles.selectorButtonsContainer}>
        <Button
          style={styles.filterButton}
          title="Upcoming"
          type="Show Space"
          onPress={()=> {
            setFilter('Show Space') 
          }}
        />
        <Button
          style={styles.filterButton}
          title="Art Gallery"
          type="outline"
          onPress={()=> {
            setFilmFilter('Art Gallery')
        }}
        />
        <Button
          style={styles.filterButton}
          title="Film Screening"
          type="outline"
          onPress={()=>{
            setFilmFilter('Film Screening')
        }}
        />
        {/* <Button
          style={styles.filterButton}
          title="Upload"
          type="outline"
          onPress={()=>{
            handleUploadClick()
            setPageNumber(1)
        }}
        /> */}
        
      </View>
  )
}

const styles = StyleSheet.create({
  selectorButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filterButton: {
    padding: 2,
  }
});