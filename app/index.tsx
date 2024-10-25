import { StyleSheet } from "react-native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Listing from "./screens/Listing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Amazon from "./screens/Amazon";
import Shopping from "./screens/Shopping";
// Create stack and drawer navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerStyle: {
          // backgroundColor: '#f4511e', 
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Listing" component={Listing} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen  name="Home" component={StackNavigator} />
        <Drawer.Screen name="Signup" component={Signup} />
        <Drawer.Screen name="Listing" component={Listing} />
        <Drawer.Screen name="Shopping" component={Shopping} />
        <Drawer.Screen name="Amazon" component={Amazon} />
        {/* You can add more drawer screens here if needed */}
      
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
