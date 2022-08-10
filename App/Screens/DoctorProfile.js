import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AirbnbRating, Rating } from "react-native-ratings";
import { useSharedValue } from "react-native-reanimated";
import api from "../Utils/api";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function DoctorProfile({ route }) {
  const { id } = route.params;
  console.log(id);
  const [docData, setDocData] = useState({});
  const fetchData = async () => {
    const data = await api.getUserById(id);
    setDocData(data);
    // console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(docData.reviews.length);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View>
          <View style={{ margin: 20 }}>
            <Text style={{ fontSize: 20, fontWeight: "300" }}>
              {docData.name}
            </Text>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: "300" }}>
              {docData.specialization}
            </Text>
          </View>
        </View>
        <View>
          <View style={{ margin: 15, width: 180 }}>
            <Text style={{ fontWeight: "300" }}>{docData.about}</Text>
          </View>
          <View style={{ marginHorizontal: 20 }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                width: 160,
                borderRadius: 5,
                backgroundColor: "#9c27b0",
                borderColor: "#9c27b0",
                shadowOpacity: 0.3,
                shadowOffset: { width: 8, height: 5 },
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "500",
                  padding: 4,
                  color: "white",
                }}
              >
                Book an appointment @{docData.charge}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View>
        {/* {docData.reviews.length == 0 ? (
          <View>
            <Text>Hi</Text>
          </View>
        ) : ( */}
        <FlatList
          data={docData.reviews}
          style={{ marginVertical: 50, marginHorizontal: 15 }}
          renderItem={(itemdata) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "200" }}>
                  {itemdata.item.comment}
                </Text>
                <Rating
                  ratingCount={5}
                  startingValue={itemdata.item.rating}
                  readonly={true}
                  style={{ marginVertical: 10 }}
                  imageSize={25}
                />
              </View>
            );
          }}
        />
        {/* )} */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
