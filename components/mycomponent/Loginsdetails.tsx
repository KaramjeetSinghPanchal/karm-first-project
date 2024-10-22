import React from "react";
import {
  View,
  Text,
  TextInput,
} from "react-native";
import { StyleSheet } from "react-native";
interface loginpropes {
  name: any;
  color: any;
}

const Loginsdetails: React.FC<loginpropes> = ({ name, color }) => {
  return (
    <View>
      <TextInput
        placeholder={name}
        placeholderTextColor={color}
        style={{
          marginTop: 20,
          height: 50,
          marginRight: 15,
          borderRadius: 15,
          width: 300,
          padding: 15,
          borderWidth: 1,
        }}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor={"black"}
        style={{
          marginTop: 20,
          height: 50,
          marginRight: 15,
          borderRadius: 15,
          padding: 15,
          width: 300,
          borderWidth: 1,
        }}
      />

      <View>
        <Text
          style={{
            marginLeft: 180,
            marginTop: 5,
            fontFamily: "Outfit-Medium",
            color: "gray",
          }}
        >
          Forgot Password ?
        </Text>
      </View>
    </View>
  );
};

export default Loginsdetails;

const styles = StyleSheet.create({
  reactLogof: {
    backgroundColor: "#0B6EFE",
    marginTop: 10,
    height: 40,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    color: "white",
  },

  container: {
    flexDirection: "row",
    // justifyContent: 'space-between',
    alignItems: "center",
    marginTop: 5,
    alignSelf: "center",
  },
  background: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginHorizontal: 5,
  },
});
