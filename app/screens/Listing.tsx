import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Button,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Modals from "@/components/mycomponent/Modals";

interface Myapp {
  id: number;
  name: string;
  age: string;
  email: string;
}

export default function Listing() {
  const [data, setData] = useState<Myapp[] | undefined>(undefined);
  const [showModel, setShowModal] = useState(false);
  const [userdata, setUserdata] = useState();
  // const [query, setQuery] = useState<string>('');

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    const url = "http://127.0.0.1:3000/user";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result: Myapp[] = await response.json();
    setData(result);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    
  };

  if (loading) {
    return (
      <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const deletedata = async (id: number) => {
    let url = `http://127.0.0.1:3000/user/${id}`;
    let result = await fetch(url, { method: "delete" });
    result = await result.json();

    if (result) {
      console.warn("user deleted");
      getData();
    }
  };
  const searchData = async (text) => {
    let url = `http://127.0.0.1:3000/user?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);

    if (result) {
      setData(result);
    }
  };

  const updatedata = (dat: any) => {
    setShowModal(true);
    setUserdata(dat);
  };

  return (
    <>
      <TextInput
        style={style.input}
        placeholder="Search Data"
        placeholderTextColor={"black"}
        onChangeText={(text) => {
          // setQuery(text);
          searchData(text);
        }}
        // value={query}
      />
      <View
        style={{
          flexDirection: "row",
          borderWidth: 10,
          backgroundColor: "#f5f0e1",
          borderBlockColor: "#1e3d59",
          padding: 10,
          
        }}
      >
        <Text style={{ flex: 1, fontSize: 20,fontWeight:'bold' }}>Name</Text>
        <Text style={{ flex: 1, fontSize: 20 ,fontWeight:'bold'}}>Email</Text>
        <Text style={{ flex: 1.2, fontSize: 20 ,fontWeight:'bold'}}>Oprations</Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={style.list}>
            <Text style={style.continer}>{item.name}</Text>
            <Text style={style.contineremail}>{item.email}</Text>
            <Text style={style.btndelete}>
              <TouchableOpacity onPress={() => deletedata(item.id)}>
                <AntDesign name="delete" size={25} color="black" />
              </TouchableOpacity>
            </Text>
            <Text style={style.btnupdate}>
              <TouchableOpacity onPress={() => updatedata(item)}>
                <AntDesign name="edit" size={25} color="black" />
              </TouchableOpacity>
            </Text>
          </View>
        )}
      />

      {/* <View style={style.continer}>
        {data ? (
          data.map((itm) => (
            <View key={itm.id} style={style.list}>
              <Text style={style.continer}>{itm.name}</Text>
              <Text style={style.contineremail}>{itm.email}</Text>
              <Text style={style.btn}>
                <Button title="Delete" onPress={() => deletedata(itm.id)} />
              </Text>
              <Text style={style.btn}>
                <Button title="Update" onPress={() => updatedata(itm)} />
              </Text>
            </View>
          ))
        ) : (
          <Text>No data available</Text>
        )}
      </View> */}

      <Modals
        showModel={showModel}
        setShowModal={setShowModal}
        userdata={userdata}
        setData={setData}
        getData={getData}
      />
    </>
  );
}

const style = StyleSheet.create({
  continer: {
    flex: 1.4,
    fontSize:17

  },
  btndelete: {
    flex: 1,
    fontSize: 2,
    marginRight: -30,
  },
  btnupdate: {
    flex: 1,
    fontSize: 2,
    marginRight: -50,
  },
  contineremail: {
    flex: 1.5,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#1e3d59",
    borderWidth: 3,
    padding: 2,
    backgroundColor: "#f5f0e1",
    height:60
  },
  input: {
    height: 40,

    width: 380,
    borderColor: "black",
    borderWidth: 3,
    // marginBottom: 20,
    paddingHorizontal: 10,
  },
});
