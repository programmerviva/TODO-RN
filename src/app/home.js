import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'
import CustomHeader from '../components/CustomHeader'

const Home = () => {

  const data = useSelector((state)=> state.todo)


  return (
    <View style={styles.container}>
       <CustomHeader title="Todo App" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
})


export default Home