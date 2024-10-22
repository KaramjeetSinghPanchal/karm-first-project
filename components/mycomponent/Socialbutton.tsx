import React from 'react'
import { ButtonProps } from 'react-native'
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface Socialbutton {
title:string;
onPress?:()=>void;
}

const Socialbutton:React.FC<Socialbutton>=({title,onPress}) =>{
    return (
        <TouchableOpacity style={styles.reactLogof} onPress={onPress}>
          <Text style={{ color: "white", fontFamily: "bold" }}>{title}</Text>
        </TouchableOpacity>
      );

}

export default Socialbutton;

const styles = StyleSheet.create({
    reactLogof: {
      backgroundColor: "#0B6EFE",
      marginTop: 13,
      height: 40,
      width: 300,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 5,
      marginRight:10,
      color: "white",
    },
  });

