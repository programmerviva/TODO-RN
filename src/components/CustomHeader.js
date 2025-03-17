import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

const CustomHeader = ({ title, isBackButton }) => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View>
        <Text style={styles.text}>{title}</Text>
        {isBackButton && (
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()} >
            <Ionicons name="chevron-back-circle" size={32} color="#fff" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0090B0',
    padding: 15,
  },
  text: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'SpaceMono',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    bottom: 0,
  },
});

export default CustomHeader;
