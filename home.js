import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import firebase from '../../firebase/firebase';

export default function Home({ navigation }) {

  const [lista, setLista] = useState([]);

  function deleteTask(id) {
    firebase.firestore().collection("lista").doc(id).delete();
  }

  useEffect(() => {
    firebase.firestore().collection("lista").onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setLista(list);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={lista}
        renderItem={({ item }) => {
          return (
            <View style={styles.Lista}>
              
              <Text
                style={styles.Description}
                onPress={() =>
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description,
                  })
                }
              >
                {item.description}
              </Text>

              <TouchableOpacity
                style={styles.deleteLista}
                onPress={() => {
                  deleteList(item.id)
                }}
              >
                <FontAwesome
                  name="trash-o"
                  size={23}
                  color="#F92e6A"
                >
                </FontAwesome>
              </TouchableOpacity>
            </View>
          )
        }}
      />
      <TouchableOpacity style
        style={styles.buttonNovaLista}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
        paddingTop: 20
     },
     Listas:{
      width:"100%",
      flexDirection:"row",
      justifyContent:"space-between",
      marginTop:5
     },
     deleteLista:{
       justifyContent:"center",
       paddingRight: 10,
     },
     Description:{
      width:"90%",
      alignContent:"flex-start",
      backgroundColor:"#f5f5f5cf",
      padding:12,
      paddingHorizontal: 20,
      borderRadius:50,
      marginBottom: 5,
      marginRight:15,
      color:"#282b2db5",
     },
     buttonNovaLista:{
      width:60,
      height:60,
      position:"absolute",
      bottom: 30,
      left:20,
      backgroundColor:"#F92e6a",
      borderRadius:50,
      justifyContent:"center",
      alignItems: "center"
     },
     iconButton:{
      color:"#ffffff",
      fontSize:25,
      fontWeight:"bold",
     },
    });
     

