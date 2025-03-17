import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const AddButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
       <MaterialCommunityIcons name="plus" size={32} color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    right:20,
    backgroundColor: '#0090B0',
    padding:15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    shadowColor:"#000",
    elevation: 10,
    shadowOffset: {width:1, height:1},
    shadowRadius:2,
    shadowOpacity: 0.7,

  }
})


export default AddButton