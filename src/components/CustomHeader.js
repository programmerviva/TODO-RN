import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'
import Ionicons  from '@expo/vector-icons/Ionicons'

const CustomHeader = ({title,isBackButton}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text style={styles.text}>{title}</Text>
      {!isBackButton && 
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name='chevron-back-circle' size={24} color="#fff" />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#0090B0",
    padding:15,
  },
  text: {
    fontSize:22,
    color: '#fff',
    fontFamily:"SpaceMono",
    textAlign:"center",
  }
})


export default CustomHeader