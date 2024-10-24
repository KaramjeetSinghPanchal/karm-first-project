import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";
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

  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // setLoading(true);
    const url = "http://127.0.0.1:3000/user";
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result: Myapp[] = await response.json();
    setData(result);
    // setLoading(false);
  };

  // if (loading) {
  //   return (
  //     <View>
  //       <ActivityIndicator size="large" color="#0000ff" />
  //     </View>
  //   );
  // }

  const deletedata = async (id: number) => {
    let url = `http://127.0.0.1:3000/user/${id}`;
    let result = await fetch(url, { method: "delete" });
    result = await result.json();

    if (result) {
      console.warn("user deleted");
      getData()
    }
  };

  const updatedata = (dat: any) => {
    setShowModal(true);
    setUserdata(dat);
  };

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          borderWidth: 3,
          backgroundColor: "green",
        }}
      >
        <Text style={{ flex: 1, fontSize: 20 }}>Name</Text>
        <Text style={{ flex: 1, fontSize: 20 }}>Email</Text>
        <Text style={{ flex: 1.2, fontSize: 20 }}>Oprations</Text>
      </View>

      <Modals
        showModel={showModel}
        setShowModal={setShowModal}
        userdata={userdata}
        setData={setData}
        getData={getData}
      />

      <View style={style.continer}>
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
      </View>
    </>
  );
}

const style = StyleSheet.create({
  continer: {
    flex: 1.4,
  },
  btn: {
    flex: 1.1,
    fontSize: 2,
  },
  contineremail: {
    flex: 1.5,
  },
  list: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "red",
    borderWidth: 3,
    padding: 2,
    backgroundColor: "orange",
  },
});
