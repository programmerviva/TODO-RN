import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    padding: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: 'center',
    backgroundColor: '#0090B0',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  }
});


export default CustomButton