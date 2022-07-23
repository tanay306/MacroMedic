import { View, Text, Image } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Button } from "galio-framework";
import { PRIMARY } from "../Utils/colors";
import theme from "../Components/theme";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Update = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Card
        style={{
          margin: 35,
          borderRadius: 10,
          shadowOpacity: 0.26,
          shadowOffset: { width: 10, height: 10 },
          elevation: 5,
          position: "absolute",
          marginTop: 870,
          width: 350,
        }}
      >
        <Image
          source={require("../assets/splash.png")}
          style={{
            width: 130,
            height: 130,
            marginTop: -45,
            marginHorizontal: "30%",
            borderRadius: 65,
          }}
        />
        <View style={{ margin: 80 }}>
          <Text style={{ fontSize: 30, textAlign: "center" }}>Tanay Naik</Text>
        </View>
      </Card>
    </View>
  );
};

const Profile = () => {
  return (
    <ScrollView>
      <Card
        style={{
          borderRadius: 10,
          shadowOpacity: 0.26,
          shadowOffset: { width: 10, height: 10 },
          elevation: 5,
          marginTop: 50,
          width: 350,
          margin: 20,
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
            margin: 20,
          }}
        >
          <Text style={{ padding: 5, fontSize: 20, color: "white" }}>
            Edit Profile
          </Text>
          <Text style={{ padding: 5, fontSize: 15, color: "white" }}>
            Update your Profile
          </Text>
        </View>
        <View style={{ padding: 20 }}>
          <TextInput
            placeholder="Name"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
          />
          <TextInput
            placeholder="Phone No."
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
          />
          <TextInput
            placeholder="Email Address"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
          />
          <TextInput
            placeholder="Age"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
          />
          <TextInput
            placeholder="Sex"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
          />
          <TextInput
            placeholder="Password"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
          />
          <TextInput
            placeholder="About"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
          />
          <Button color={PRIMARY} uppercase>
            Update Profile
          </Button>
        </View>
      </Card>

      <Card
        style={{
          margin: 20,
          borderRadius: 10,
          shadowOpacity: 0.26,
          shadowOffset: { width: 10, height: 10 },
          elevation: 5,
        }}
      >
        <Image
          source={require("../assets/splash.png")}
          style={{
            width: 350,
            height: 350,
            marginTop: -175,
            position: "absolute",
          }}
        />
        <View style={{ marginTop: 80, marginBottom: 30 }}>
          <Text style={{ fontSize: 25, textAlign: "center" }}>Tanay Naik</Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 30 }}>
            Aspiring enginner from IIT Bombay working at Uber.
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
};

export default Profile;
