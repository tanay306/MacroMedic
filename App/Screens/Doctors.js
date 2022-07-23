import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Platform, View, TextInput } from "react-native";

import { Ionicons } from "@expo/vector-icons";

// galio components
import { Button as ButtonRP } from "react-native-paper";
import { Button, NavBar } from "galio-framework";
import theme from "../Components/theme";
import { useNavigation } from "@react-navigation/core";
import { Card } from "react-native-paper";
import { PRIMARY } from "../Utils/colors";
import { FlatList, ScrollView } from "react-native-gesture-handler";
// import api from "../util/api";

const BASE_SIZE = theme.SIZES.BASE;

const Doctors = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  // const [doctorData, setDoctorData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     setDoctorData(await api.getDoctors());
  //     // console.log(doctorData);
  //   };
  //   getData();
  // }, []);
  // console.log(doctorData.length);

  const doctorData = [
    {
      name: "Tanay",
      specialization: "Haggu",
      sex: "Male",
    },
    {
      name: "Tanay",
      specialization: "Haggu",
      sex: "Male",
    },
    {
      name: "Tanay",
      specialization: "Haggu",
      sex: "Male",
    },
    {
      name: "Tanay",
      specialization: "Haggu",
      sex: "Male",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 40 }}></View>
      <View>
        <Card
          style={{
            margin: 20,
            borderRadius: 10,
            shadowOpacity: 0.26,
            shadowOffset: { width: 10, height: 10 },
            elevation: 5,
            position: "absolute",
            width: 350,
          }}
        >
          <View
            style={{
              margin: 20,
              height: 80,
              marginTop: -40,
              backgroundColor: PRIMARY,
              elevation: 5,
              shadowOffset: { width: 10, height: 10 },
              shadowOpacity: 0.3,
              borderRadius: 6,
            }}
          >
            <Text style={{ padding: 7, fontSize: 20, color: "white" }}>
              Doctors
            </Text>
            <Text
              style={{
                padding: 5,
                fontSize: 15,
                color: "white",
              }}
            >
              Find the best doctor and medical assistants{" "}
              <Text style={{ fontWeight: "bold" }}>nearest to you</Text>
            </Text>
          </View>
          <Card.Content>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 20 }}>Search as per need...</Text>
            </View>
            <View style={{ marginVertical: 30 }}>
              <TextInput
                placeholder="Search by name"
                style={{
                  marginVertical: 40,
                  fontSize: 20,
                  borderBottomWidth: 0.5,
                  paddingVertical: 5,
                }}
                value={name}
                onChangeText={(text) => setName(text)}
              />
              <TextInput
                placeholder="Search by specialization"
                style={{
                  fontSize: 20,
                  borderBottomWidth: 0.5,
                  paddingVertical: 5,
                }}
                value={specialization}
                onChangeText={(text) => setSpecialization(text)}
              />
            </View>
            <ButtonRP
              mode="contained"
              color={PRIMARY}
              labelStyle={{ color: "white", fontSize: 17 }}
              style={{
                shadowOpacity: 0.3,
                shadowOffset: { width: 5, height: 5 },
                elevation: 5,
              }}
              // onPress={async () => {
              //   await api.searchDoctorByName(name);
              //   await api.searchDoctorBySpecialization(specialization);
              // }}
            >
              Apply Filter
            </ButtonRP>
          </Card.Content>
        </Card>
      </View>
      {doctorData.length != 0 ? (
        <FlatList
          horizontal
          data={doctorData}
          renderItem={(itemData) => {
            return (
              <View style={{ marginTop: 420, paddingHorizontal: 200 }}>
                <Card
                  style={{
                    margin: 20,
                    borderRadius: 10,
                    shadowOpacity: 0.26,
                    shadowOffset: { width: 10, height: 10 },
                    elevation: 5,
                    position: "absolute",
                    width: 350,
                  }}
                >
                  <Card
                    style={{
                      margin: 20,
                      height: 80,
                      marginTop: -35,
                      backgroundColor: PRIMARY,
                      elevation: 5,
                      shadowOffset: { width: 10, height: 10 },
                      shadowOpacity: 0.3,
                      borderRadius: 6,
                    }}
                  >
                    <Text style={{ padding: 7, fontSize: 20, color: "white" }}>
                      {itemData.item.name}
                    </Text>
                  </Card>
                  <Card.Content>
                    <View
                      style={{
                        borderBottomWidth: 0.5,
                        paddingVertical: 8,
                        borderBottomColor: "grey",
                      }}
                    >
                      <Text style={{ fontSize: 20, marginTop: 3 }}>
                        {itemData.item.specialization}
                      </Text>
                      <Text style={{ fontSize: 20, marginTop: 3 }}>
                        {itemData.item.sex}
                      </Text>
                      <Text style={{ fontSize: 20 }}>{itemData.item.age}</Text>
                    </View>

                    <ButtonRP
                      mode="contained"
                      color={PRIMARY}
                      labelStyle={{ color: "white", fontSize: 17 }}
                      style={{
                        shadowOpacity: 0.3,
                        shadowOffset: { width: 5, height: 5 },
                        elevation: 5,
                        marginVertical: 10,
                      }}
                      // onPress={() => {
                      //   navigation.navigate("BookAppointments", {
                      //     name: itemData.item.name,
                      //     specialization: itemData.item.specialization,
                      //     age: itemData.item.age,
                      //     sex: itemData.item.sex,
                      //     about: itemData.item.about,
                      //     id: itemData.item._id,
                      //   });
                      // }}
                    >
                      Book an appointment
                    </ButtonRP>

                    <ButtonRP
                      mode="contained"
                      color={PRIMARY}
                      labelStyle={{ color: "white", fontSize: 17 }}
                      style={{
                        shadowOpacity: 0.3,
                        shadowOffset: { width: 5, height: 5 },
                        elevation: 5,
                      }}
                      // onPress={() => {
                      //   navigation.navigate("BookAppointments", {
                      //     name: itemData.item.name,
                      //     specialization: itemData.item.specialization,
                      //     age: itemData.item.age,
                      //     sex: itemData.item.sex,
                      //     about: itemData.item.about,
                      //     id: itemData.item._id,
                      //   });
                      // }}
                    >
                      View Profile
                    </ButtonRP>
                  </Card.Content>
                </Card>
              </View>
            );
          }}
        />
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  settings: {
    width: BASE_SIZE * 2,
    borderColor: "transparent",
  },
});
