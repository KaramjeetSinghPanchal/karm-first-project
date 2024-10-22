import React, { useState,useEffect } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { TextInput } from "react-native-gesture-handler";
import Signupdetails from "@/components/mycomponent/Signupdetails";
import Button from "@/components/mycomponent/Button";
import Signupbutton from "@/components/mycomponent/SignupButton";
import Socialbutton from "@/components/mycomponent/Socialbutton";
export default function Signup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [fontsLoaded] = useFonts({
    "Manrope-Bold": require("../../assets/fonts/Manrope-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const submitdata = () => {
    if (!name || !email || !phone || !password) {
      alert("Please fill all fields");

      return;
    } else {

      const getdata = async () => {
        let result = await fetch("https://jsonplaceholder.org/posts");
        const data = await result.json();
        console.log(data);
      };
      
  
     
      alert("Data submitted successfully!");
    }
  };




  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 10,
        }}
      >
        <Text style={{ fontFamily: "Manrope-Bold", fontSize: 24 }}>
          {" "}
          Create an account
        </Text>
        <Text style={{ fontFamily: "Manrope-SemiBold" }}>
          {" "}
          Connect with your friends today!
        </Text>

        <View>
          <Signupdetails
            name={"Enter Your Username"}
            email={"Enter your email"}
            phone={"Enter Your Phone Number"}
            password={"Enter Your Password"}
            setname={setname}
            setemail={setemail}
            setphone={setphone}
            setpassword={setpassword}
          />
        </View>

        <View>
          <Signupbutton title={"Sign Up"} onPress={submitdata} />
        </View>

        <View style={style.container}>
          <Image
            source={require("../../assets/images/Line.png")}
            style={{ width: 110, marginRight: 18, marginTop: 9 }}
          />
          <Text style={style.texxt}>Or With</Text>
          <Image
            source={require("../../assets/images/Line.png")}
            style={{ width: 105, marginLeft: 15, marginTop: 9 }}
          />
        </View>

        <View>
          <Socialbutton title={"Signup with Facebook"} />
        </View>

        <View>
          <Text
            style={{
              width: "auto",
              marginTop: 16,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image source={require("../../assets/images/LoginWG.png")} />
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Text style={{ textDecorationLine: "underline" }}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => {
              alert("hii");
            }}
          >
            <Text style={{ color: "blue", marginLeft: 5 }}>Link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flexDirection: "row",

    marginTop: 10,
  },
  texxt: {
    marginTop: 0,
  },
});
