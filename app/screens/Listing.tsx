import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from "react-native";

interface Myapp {
  id: number;
  name: string;
  age: string;
  email: string;
}

export default function Listing() {
  const [data, setData] = useState<Myapp[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true)
      const url = "http://127.0.0.1:3000/user";
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result: Myapp[] = await response.json();
      setData(result);
    setLoading(false)
  };

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View>
      {data ? (
        data.map((itm) => (
          <View key={itm.id} style={{borderColor:'red',borderWidth:10,padding:5}}>
            <Text>{itm.name}</Text>
            <Text>{itm.age}</Text>
            <Text>{itm.email}</Text>
          </View>
        ))
      ) : (
        <Text>No data available</Text>
      )}
    </View>
  );
}
