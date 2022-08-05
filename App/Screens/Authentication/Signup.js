import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import axios from "axios";
import WavyHeader from "../../Components/WavyHeader";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../GlobalContext";

import { PRIMARY } from "../../Utils/colors";
import api from "../../Utils/api";

const Signup = () => {
  const navigation = useNavigation();
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;
  return (
    <View style={styles.container}>
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={{ marginTop: 150, marginHorizontal: 50 }}>
        <Text style={{ fontSize: 30, color: "white" }}>Create</Text>
        <Text style={{ fontSize: 30, color: "white" }}>Account</Text>
        <Text style={{ color: "white" }}>Please sign up to continue</Text>
      </View>
      <KeyboardAvoidingView
        behavior="position"
        style={{ marginTop: 150, marginHorizontal: 50 }}
      >
        <TextInput
          placeholder="Full Name"
          style={{
            borderBottomWidth: 0.5,
            paddingVertical: 3,
            fontSize: 20,
            borderBottomColor: "grey",
            marginVertical: 15,
          }}
          onChangeText={(text) => setUserData({ ...userData, name: text })}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setUserData({ ...userData, email: text })}
          style={{
            borderBottomWidth: 0.5,
            paddingVertical: 3,
            fontSize: 20,
            borderBottomColor: "grey",
            marginVertical: 15,
          }}
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Password"
          onChangeText={(text) => setUserData({ ...userData, password: text })}
          secureTextEntry
          style={{
            borderBottomWidth: 0.5,
            paddingVertical: 3,
            fontSize: 20,
            borderBottomColor: "grey",
            marginVertical: 15,
          }}
        />
        {/* <TextInput
          placeholder="Role"
          value={role}
          onChangeText={(text) => setRole(text)}
          style={{
            borderBottomWidth: 0.5,
            paddingVertical: 3,
            fontSize: 20,
            borderBottomColor: "grey",
            marginVertical: 15,
          }}
        /> */}

        <View
          style={{
            marginTop: 30,
            borderWidth: 1,
            borderRadius: 25,
            marginHorizontal: 10,
            backgroundColor: PRIMARY,
            borderColor: PRIMARY,
            padding: 8,
            // shadowOffset: { width: 7, height: 7 },
            // shadowOpacity: 0.5,
            // shadowColor: "#F1C40F",
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              let data = {};
              try {
                data = await api.registerUser(
                  userData.name,
                  userData.email,
                  userData.password
                );
                setUserData(data);
              } catch (error) {
                console.log(error.response.data);
              }
              if (userData.email && data.token) {
                navigation.navigate("Dashboard");
              } else {
                return Alert.alert(
                  "User Exists",
                  "User already exists, use a different email id"
                );
              }
            }}
          >
            <Text style={{ fontSize: 25, textAlign: "center", color: "white" }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ textAlign: "center", color: "grey", fontSize: 15 }}>
            Already have an account?{" "}
            <Text
              style={{
                color: PRIMARY,
                fontSize: 15,
              }}
              onPress={async () => {
                navigation.navigate("Login");
              }}
            >
              {" "}
              Signin
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
});
