import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSharedValue } from "react-native-reanimated";
import api from "../Utils/api";

export default function DoctorProfile({ route }) {
  const { id } = route.params;
  console.log(id);
  const [docData, setDocData] = useState({});
  const fetchData = async () => {
    const data = await api.getUserById(id);
    setDocData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <Text>{docData.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
