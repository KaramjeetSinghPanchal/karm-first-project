import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
interface googleB {
    title :string;
    onPress?:()=>void;
}

const Googlebutton:React.FC<googleB>=({title})=>
{
    return(<TouchableOpacity style={styles.reactLogof} onPress={onPress}>
        <Text style={{ color: "white", fontFamily: "bold" }}>{title}</Text>
    </TouchableOpacity>)
}
export default Googlebutton;

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