import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button as ButtonRP } from "react-native-paper";
import { Button, NavBar } from "galio-framework";
import theme from "../Components/theme";
import { useNavigation } from "@react-navigation/core";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Avatar, Card } from "react-native-paper";
import docImg from "../assets/marc.jpeg";
import { PRIMARY } from "../Utils/colors";
const BASE_SIZE = theme.SIZES.BASE;
const GRADIENT_BLUE = ["#6B84CA", "#8F44CE"];
const GRADIENT_PINK = ["#D442F8", "#B645F5", "#9B40F8"];
const COLOR_WHITE = theme.COLORS.WHITE;
const COLOR_GREY = theme.COLORS.MUTED;
import api from "../Utils/api";
import { GlobalContext } from "../GlobalContext";
import WebView from "react-native-webview";

const Scheduled = () => {
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;

  const [uApp, setUpp] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    let data = [];
    const mf = async () => {
      try {
        data = await api.getAllAppointments(userData._id);
        // console.log("Upcominggggggg");
        // console.log(data);
      } catch (error) {
        console.log(error);
      }

      let j = 1,
        k = 1;
      let upp = [],
        ppp = [];
      for (let i = 0; i < data.length; i++) {
        // let date = new Date(data[i].date);
        // let time = data[i].date.split("T")[1];
        // date = date.toLocaleDateString("pt-PT");
        // date = date.toDateString();

        // `${j}`,
        //   data[i].doctorId,
        //   data[i].patientId,
        //   date + "\t\t@" + time,
        //   "Pending",
        //   data[i]._id,
        upp.push([
          `${j}`,
          data[i].doctorId,
          data[i].patientId,
          data[i].date,
          "Pending",
          data[i]._id,
        ]);
        // upp.push({
        //   id: `${j}`,
        //   docId: data[i].doctorId,
        //   patientId: data[i].patientId,
        //   date: data[i].date,
        //   status: "Pending",
        //   app_id: data[i]._id,
        // });
        j++;
      }
      setUpp(upp);
    };
    mf();
  }, [userData]);

  const canceler = async (id) => {
    console.log("Id here:", id);
    try {
      const msg = await api.cancelAppointment(id);

      console.log(msg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 5 }}>
      {/* <View style={{ marginTop: 40 }}>
      <NavBar
        title="Scheduled"
        titleStyle={{ fontSize: 20 }}
        //   onLeftPress={() => this.props.navigation.openDrawer()}
        //   leftIconColor={theme.COLORS.MUTED}
        left={
          <Button
            color="transparent"
            style={styles.settings}
            onPress={() => navigation.openDrawer()}
          >
            <Ionicons size={30} name="md-menu" color={theme.COLORS.MUTED} />
          </Button>
        }
        style={
          Platform.OS === "android" ? { marginTop: theme.SIZES.BASE } : null
        }
      />
    </View> */}
      <ScrollView style={{}}>
        <Card
          style={{
            borderRadius: 10,
            shadowOpacity: 0.26,
            shadowOffset: { width: 10, height: 10 },
            elevation: 5,
            marginTop: 50,
            width: 370,
            margin: 10,
          }}
        >
          <View
            style={{
              borderWidth: 0.5,
              marginTop: -35,
              borderColor: PRIMARY,
              borderRadius: 7,
              backgroundColor: PRIMARY,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.5,
              shadowRadius: 5,
              elevation: 2,
              margin: 10,
            }}
          >
            <Text style={{ padding: 7, fontSize: 20, color: "white" }}>
              Appointments
            </Text>
            <Text style={{ padding: 7, fontSize: 15, color: "white" }}>
              Click on Join Meeting to continue
            </Text>
          </View>
          <Card.Content>
            {uApp.map((elem) => (
              <View
                style={{
                  borderBottomWidth: 0.5,
                  paddingVertical: 6,
                  borderBottomColor: "grey",
                }}
              >
                <View
                  style={{
                    marginVertical: 20,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={require("../assets/marc.jpeg")}
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100,
                        borderColor: PRIMARY,
                      }}
                    />
                    <View>
                      <Text style={{ marginVertical: 10, fontSize: 20 }}>
                        {userData.role == "doctor"
                          ? elem[2].name
                          : elem[1].name}
                      </Text>
                      <Text style={{ fontSize: 16, color: "gray" }}>
                        {userData.role == "doctor"
                          ? ""
                          : elem[1].specialization}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      fontSize: 20,
                      marginTop: 20,
                      textAlign: "center",
                      color: "#757575",
                    }}
                  >
                    APPOINTMENT SUMMARY
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginHorizontal: 40,
                  }}
                >
                  <Text style={{ fontSize: 20, color: "#757575" }}>When: </Text>
                  <Text style={{ fontSize: 20, color: "#757575" }}>
                    {elem[3].split("T")[0]}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginHorizontal: 40,
                  }}
                >
                  <Text style={{ fontSize: 20, color: "#757575" }}>Time: </Text>
                  <Text style={{ fontSize: 20, color: "#757575" }}>
                    {elem[3].split("T")[1]}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    marginHorizontal: 40,
                  }}
                >
                  {/* <Text style={{ fontSize: 25, color: "#757575" }}>
                 Name:
               </Text>
               <Text style={{ fontSize: 25, color: "#757575" }}>
                 {elem.Name}
               </Text> */}
                </View>
                <View style={{ marginTop: 20 }}>
                  <ButtonRP
                    icon="video"
                    style={{
                      backgroundColor: "#4caf50",
                      marginHorizontal: 20,
                    }}
                    labelStyle={{ fontSize: 17 }}
                    mode="contained"
                    onPress={() => {
                      navigation.navigate("Meeting", {
                        link: `http://localhost:2000/?room=${elem[5]}`,
                      });
                      // Linking.openURL(`http://localhost:2000/?room=${elem[5]}`);
                    }}
                  >
                    join meeting
                  </ButtonRP>
                  <ButtonRP
                    icon="close"
                    style={{
                      backgroundColor: "#ef5350",
                      marginHorizontal: 20,
                      marginVertical: 5,
                    }}
                    labelStyle={{ fontSize: 17 }}
                    mode="contained"
                    onPress={() => canceler(elem[5])}
                  >
                    cancel appointment
                  </ButtonRP>
                </View>
              </View>
            ))}
            {/* <FlatList
              data={uApp}
              renderItem={(itemData) => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 0.5,
                      paddingVertical: 6,
                      borderBottomColor: "grey",
                    }}
                  >
                    <View
                      style={{
                        marginVertical: 20,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require("../assets/marc.jpeg")}
                        style={{
                          width: 150,
                          height: 150,
                          borderRadius: 100,
                          borderColor: PRIMARY,
                        }}
                      />
                      <View style={{ marginTop: 10 }}>
                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "#757575",
                          }}
                        >
                          {itemData.item.name}
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            textAlign: "center",
                            color: "#bdbdbd",
                          }}
                        >
                          {itemData.item.Specialization}
                        </Text>
                      </View>
                      <Text
                        style={{
                          fontSize: 20,
                          marginTop: 20,
                          textAlign: "center",
                          color: "#757575",
                        }}
                      >
                        APPOINTMENT SUMMARY
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginHorizontal: 40,
                      }}
                    >
                      <Text style={{ fontSize: 25, color: "#757575" }}>
                        When:{" "}
                      </Text>
                      <Text style={{ fontSize: 25, color: "#757575" }}>
                        {itemData.item.date.split("T")[0]}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        marginHorizontal: 40,
                      }}
                    >
                      <Text style={{ fontSize: 25, color: "#757575" }}>
                        Time:{" "}
                      </Text>
                      <Text style={{ fontSize: 25, color: "#757575" }}>
                        {itemData.item.date.split("T")[1]}
                      </Text>
                    </View>
                    <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      marginHorizontal: 40,
                    }}
                  >
                    <Text style={{ fontSize: 25, color: "#757575" }}>
                      Name:
                    </Text>
                    <Text style={{ fontSize: 25, color: "#757575" }}>
                      {itemData.item.Name}
                    </Text>
                  </View>
                    <View style={{ marginTop: 20 }}>
                      <ButtonRP
                        icon="video"
                        style={{
                          backgroundColor: "#4caf50",
                          marginHorizontal: 20,
                        }}
                        labelStyle={{ fontSize: 17 }}
                        mode="contained"
                        onPress={() => {
                          Linking.openURL(
                            "http://localhost:5000/?room=Appointment_Session_1234"
                          );
                        }}
                      >
                        join meeting
                      </ButtonRP>
                      <ButtonRP
                        icon="close"
                        style={{
                          backgroundColor: "#ef5350",
                          marginHorizontal: 20,
                          marginVertical: 5,
                        }}
                        labelStyle={{ fontSize: 17 }}
                        mode="contained"
                      >
                        cancel appointment
                      </ButtonRP>
                    </View>
                  </View>
                );
              }}
            /> */}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default Scheduled;

const styles = StyleSheet.create({
  settings: {
    width: BASE_SIZE * 2,
    borderColor: "transparent",
  },
});
