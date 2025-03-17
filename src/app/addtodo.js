import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import CustomHeader from "../components/CustomHeader";

const AddTodo = () => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState('');


  const submit = async () => {

  }

  return (
    <View style={styles.container}>
      <CustomHeader title="Add New Todo" isBackButton={true} />

      <TextInput
        placeholder="Enter your text here!"
        value={value}
        // onChangeText={(text)=>setValue(text)} // sam∈ logic hai next line me.
        onChangeText={setValue}
        style={[styles.input, styles.morePadding]}
      />

      <TextInput
        placeholder="Enter your todo description!"
        value={description}
        numberOfLines={4}
        multiline
        maxLength={120}
        // onChangeText={(text)=>setValue(text)} // sam∈ logic hai next line me.
        onChangeText={setDescription}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#ccc',
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 20,
    color: '#2b3037',
  },
  morePadding:{
    marginTop: 20,
  }
});

export default AddTodo;
