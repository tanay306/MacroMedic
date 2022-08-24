import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, Platform, View, Image } from "react-native";

import { Ionicons } from "@expo/vector-icons";

// galio components
import { Button as ButtonRP } from "react-native-paper";
import { Button, NavBar } from "galio-framework";
import theme from "../Components/theme";
import { useNavigation } from "@react-navigation/core";
import { Card } from "react-native-paper";
import { PRIMARY } from "../Utils/colors";
import { FlatList, ScrollView, TextInput } from "react-native-gesture-handler";
import { GlobalContext } from "../GlobalContext";
import api from "../Utils/api";
// import api from "../util/api";

const BASE_SIZE = theme.SIZES.BASE;

const Doctors = () => {
  const navigation = useNavigation();
  const { allDocs } = useContext(GlobalContext);
  const [allDoctors, setAllDoctors] = allDocs;
  useEffect(() => {
    const getDoctors = async () => {
      try {
        setAllDoctors(await api.getDoctors());
      } catch (error) {
        console.log(error.response.data);
      }
    };
    getDoctors();
  }, []);
  // const [doctorData, setDoctorData] = useState([]);
  // useEffect(() => {
  //   const getData = async () => {
  //     setDoctorData(await api.getDoctors());
  //     // console.log(doctorData);
  //   };
  //   getData();
  // }, []);
  // console.log(doctorData.length);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}></View>
      <View>
        <Card
          style={{
            margin: 20,
            borderRadius: 10,
            shadowOpacity: 0.26,
            shadowOffset: { width: 10, height: 10 },
            elevation: 5,

            width: 350,
          }}
        >
          <View
            style={{
              margin: 20,
              height: 80,
              marginTop: -40,
              backgroundColor: "#9c27b0",
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
                  marginVertical: 20,
                  fontSize: 20,
                  borderBottomWidth: 0.5,
                  paddingVertical: 5,
                }}
                onChangeText={async (text) => {
                  try {
                    setAllDoctors(await api.searchDoctorByName(text));
                  } catch (error) {
                    console.log(error.response.data);
                  }
                }}
              />
              <TextInput
                placeholder="Search by specialization"
                style={{
                  fontSize: 20,
                  borderBottomWidth: 0.5,
                  paddingVertical: 5,
                }}
                onChangeText={async (text) => {
                  try {
                    setAllDoctors(await api.searchDoctorBySpecialization(text));
                  } catch (error) {
                    console.log(error.response.data);
                  }
                }}
              />
            </View>
          </Card.Content>
        </Card>
      </View>

      <FlatList
        horizontal
        data={allDoctors}
        renderItem={(itemData) => {
          return (
            <View style={{ marginTop: 20 }}>
              <Card
                style={{
                  margin: 20,
                  borderRadius: 10,
                  shadowOpacity: 0.26,
                  shadowOffset: { width: 10, height: 10 },
                  elevation: 5,

                  width: 350,
                }}
              >
                <Card
                  style={{
                    margin: 20,
                    height: 80,
                    marginTop: -35,
                    backgroundColor: "#9c27b0",
                    elevation: 5,
                    shadowOffset: { width: 10, height: 10 },
                    shadowOpacity: 0.3,
                    borderRadius: 6,
                  }}
                >
                  <View style={{ flexDirection: "row", marginVertical: 20 }}>
                    <Image
                      source={require("../assets/marc.jpeg")}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginLeft: 10,
                      }}
                    />
                    <Text style={{ padding: 7, fontSize: 20, color: "white" }}>
                      {itemData.item.name}
                    </Text>
                  </View>
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
                      Specialization:{" "}
                      {itemData.item.specialization == null
                        ? "Not Specified"
                        : itemData.item.specialization}
                    </Text>
                    <Text style={{ fontSize: 20, marginTop: 3 }}>
                      Gender: {itemData.item.sex}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text style={{ fontSize: 20 }}>
                        Age: {itemData.item.age}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#9c27b0",
                          fontWeight: "bold",
                        }}
                      >
                        {`\u20B9`}
                        {itemData.item.charge == null
                          ? "Not Specified"
                          : itemData.item.charge}
                      </Text>
                    </View>
                  </View>
                  <View style={{ paddingVertical: 8 }}>
                    <Text style={{ fontSize: 20 }}>
                      About: {itemData.item.about}
                    </Text>
                  </View>
                  <ButtonRP
                    mode="contained"
                    color="#9c27b0"
                    labelStyle={{ color: "white", fontSize: 17 }}
                    style={{
                      shadowOpacity: 0.3,
                      shadowOffset: { width: 5, height: 5 },
                      elevation: 5,
                      marginVertical: 10,
                      marginHorizontal: 20,
                    }}
                    onPress={() => {
                      navigation.navigate("BookAppointment", {
                        id: itemData.item._id,
                      });
                    }}
                  >
                    Book an appointment
                  </ButtonRP>

                  <ButtonRP
                    mode="contained"
                    color="#9c27b0"
                    labelStyle={{ color: "white", fontSize: 17 }}
                    style={{
                      shadowOpacity: 0.3,
                      shadowOffset: { width: 5, height: 5 },
                      elevation: 5,
                      marginHorizontal: 20,
                    }}
                    onPress={() => {
                      navigation.navigate("DoctorProfile", {
                        id: itemData.item._id,
                      });
                    }}
                  >
                    View Profile
                  </ButtonRP>
                </Card.Content>
              </Card>
            </View>
          );
        }}
      />
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
