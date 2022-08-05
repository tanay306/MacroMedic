import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import WavyHeader from "../../Components/WavyHeader";
import { PRIMARY } from "../../Utils/colors";
import api from "../../Utils/api";
import { GlobalContext } from "../../GlobalContext";

const Login = () => {
  const navigation = useNavigation();
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <WavyHeader customStyles={styles.svgCurve} />
      <View style={{ marginTop: 70, marginHorizontal: 40 }}>
        <Text style={{ color: "white", fontSize: 30 }}>Welcome</Text>
        <Text style={{ color: "white", fontSize: 30 }}>Back</Text>
        <Text style={{ color: "white", fontSize: 18 }}>
          Please Sign In to continue
        </Text>
      </View>
      <View style={{ marginTop: "40%", marginHorizontal: 50 }}>
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingVertical: 5,
            borderBottomColor: "gray",
            fontSize: 18,
          }}
          placeholder="Email"
          value={userData.email}
          onChangeText={(text) => setUserData({ ...userData, email: text })}
        />
        <TextInput
          style={{
            borderBottomWidth: 1,
            paddingVertical: 5,
            borderBottomColor: "gray",
            fontSize: 18,
            marginTop: 20,
          }}
          placeholder="Password"
          secureTextEntry
          value={userData.password}
          onChangeText={(text) => setUserData({ ...userData, password: text })}
        />

        <Text
          style={{
            textAlign: "center",
            marginVertical: 15,
            fontSize: 15,
            color: "gray",
          }}
        >
          Forgot Your Password?
        </Text>
        <View
          style={{
            borderWidth: 0.5,
            marginHorizontal: 10,
            borderRadius: 25,
            padding: 8,

            backgroundColor: PRIMARY,
            borderColor: PRIMARY,
          }}
        >
          <TouchableOpacity
            onPress={async () => {
              let data = {};
              try {
                data = await api.authUser(userData.email, userData.password);
                setUserData(data);
              } catch (error) {
                console.log(error.response.data);
              }
              if (userData.email && data.token) {
                navigation.navigate("Dashboard");
              } else {
                return Alert.alert(
                  "Invalid Credentials",
                  "Please enter valid credentials"
                );
              }
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 25, color: "white" }}>
              Signin
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 10,
            color: "gray",
            fontSize: 15,
          }}
        >
          Don't have an account?{" "}
          <Text
            onPress={() => navigation.navigate("Signup")}
            style={{ color: PRIMARY }}
          >
            {" "}
            Signup
          </Text>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  svgCurve: {
    width: Dimensions.get("window").width,
    height: 80,
  },
});
