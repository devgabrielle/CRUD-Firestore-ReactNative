import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import firebase from "firebase";

export default function Register({ navigation }) {

  const [description, setDescription] = useState(null);

  function addLista() {
    firebase.firestore().collection('lista').add({
      description: description,
      status: true,
    })
    navigation.navigate("Home");
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Estudar física quântica"
        onChangeText={setDescription}
        value={description}
      />
      <TouchableOpacity
        style={styles.buttonNovaLista}
        onPress={() => {
          addLista()
        }}
      >
        <Text style={styles.iconButton}>Salvar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  label: {
    width: "90%",
    marginTop: 20,
    fontSize: 16,
    marginLeft: 20,
    color: "#F92E6A"
  },
  input: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#F92E6A",
    marginLeft: "auto",
    marginRight: "auto"
  },
  buttonNovaLista: {
    marginTop: 60,
    width: 130,
    height: 60,
    backgroundColor: "#F92e6a",
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto"
  },
  iconButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  }

});
