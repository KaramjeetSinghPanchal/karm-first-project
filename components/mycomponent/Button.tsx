import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

interface ButtonProps {
  title: String;
  onPress?: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.reactLogof} onPress={onPress}>
      <Text style={{ color: "white", fontFamily: "bold" }}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

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
});
