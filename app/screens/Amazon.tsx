import React from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Alert,
    requireNativeComponent,
  } from "react-native";function Amazon() {
  return (
  <View>
    <Text style ={{marginLeft:20}}>
       <Image source={require("@/assets/images/Product.jpg") } style={{width:350,height:600,alignItems:'center',marginLeft:100}}/>
    </Text>
    </View>
  )
}

export default Amazon;
