import React from "react";
import { View, Text, SafeAreaView, Image, ImageBackground } from "react-native";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import Loginsdetails from "@/components/mycomponent/Loginsdetails";
import { SplashScreen } from "expo-router";
import Button from "@/components/mycomponent/Button";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type LoginScreenProps = {
  navigation: NativeStackNavigationProp<{
    Login: undefined;
    Signup: undefined;
  }>;
};

export default function Login({navigation}:LoginScreenProps) {
  let [fontsLoaded] = useFonts({
    "Outfit-Medium": require("../../assets/fonts/static/Outfit-Medium.ttf"),
  });
  let logindata = "Login";
  const onPressLogin = () => {
    console.warn("Login");
  };
 
  return (
    <SafeAreaView style={{ flex: 1, marginTop: 1, alignItems: "center" }}>
      <View>
        <Image
          source={require("@/assets/images/first.png")}
          style={{
            marginTop: 20,
            alignSelf: "center",
            height: 200,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 30,
          }}
        />

        <Text style={{ fontFamily: "Outfit-Medium", fontSize: 20 }}>
          Login Details
        </Text>
      </View>
      {/* Login Input fields */}
      <Loginsdetails name="Username , email & phone number" color="black" />

      <Button title={"Signup"} onPress={() => navigation.navigate("Signup")} />
      {/* <Button title="Signup" onPress={() => navigation.navigate("Signup")} /> */}

      <View style={{ margin: 10, marginRight: 1, marginLeft: -20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/images/Rectangle.png")}
            style={{ height: 2, width: 100 }}
          />
          <Text
            style={{
              color: "gray",
              justifyContent: "center",
              alignItems: "center",
              alignSelf: "center",
              marginLeft: 20,
            }}
          >
            Or Login up With
          </Text>
          <Image
            source={require("../../assets/images/RectangleS.png")}
            style={{ height: 2, width: 100, marginLeft: 18 }}
          />
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <ImageBackground
          source={require("../../assets/images/Vector.png")}
          style={{ height: 100, width: 400 }}
        >
          <View style={styles.container}>
            <ImageBackground
              source={require("../../assets/images/Ellipse.png")}
              style={styles.background}
            >
              <Text>
                <Image source={require("../../assets/images/Facbook.png")} />
              </Text>
            </ImageBackground>

            <ImageBackground
              source={require("../../assets/images/Ellipse.png")}
              style={styles.background}
            >
              <Text>
                <Image source={require("../../assets/images/Googlelogo.png")} />
              </Text>
            </ImageBackground>

            <ImageBackground
              source={require("../../assets/images/Ellipse.png")}
              style={styles.background}
            >
              <Text>
                <Image source={require("../../assets/images/Group.png")} />
              </Text>
            </ImageBackground>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

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
