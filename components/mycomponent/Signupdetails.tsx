import React from "react";
import { View, TextInput } from "react-native";
import { useState } from "react";
interface signupprops {
  name: any;
  email: any;
  phone: any;
  password: any;
  setname: (name: string) => void;
  setemail: (email: string) => void;
  setphone: (phone: string) => void;
  setpassword: (password: string) => void;
}

const Signupdetails: React.FC<signupprops> = ({ name, email, phone,password,setname,
  setemail,
  setphone,setpassword }) => {
  return (
    <>
      <TextInput
      placeholderTextColor={'black'}
        placeholder={name}
        onChangeText={(text)=>setname(text)}
        
        style={{
          marginTop: 10,
          height: 50,
          marginRight: 15,
          borderRadius: 9,
          width: 306,
          padding: 15,
          borderWidth: 1,
        }}
      />

      <TextInput
       placeholderTextColor={'black'}
        placeholder={email}
        onChangeText={(text)=>setemail(text)}
        style={{
          marginTop: 10,
          height: 50,
          marginRight: 15,
          borderRadius: 9,
          width: 306,
          padding: 15,
          borderWidth: 1,
        }}
      />

      <TextInput
       placeholderTextColor={'black'}
       onChangeText={(text)=>setphone(text)}
        placeholder={phone}
        style={{
          marginTop: 10,
          height: 50,
          marginRight: 15,
          borderRadius: 9,
          width: 306,
          padding: 15,
          borderWidth: 1,
        }}
      />

      <TextInput
       placeholderTextColor={'black'}
        placeholder={password}
        onChangeText={(text)=>setpassword(text)}
        style={{
          marginTop: 10,
          height: 50,
          marginRight: 15,
          borderRadius: 9,
          width: 306,
          padding: 15,
          borderWidth: 1,
        }}
      />

      
    </>
  );
};

export default Signupdetails;
