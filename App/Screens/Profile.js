import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Card } from "react-native-paper";
import { PRIMARY } from "../Utils/colors";
import theme from "../Components/theme";
import { Button } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../GlobalContext";
import api from "../Utils/api";
import Modal from "react-native-modal";
const Profile = () => {
  const navigation = useNavigation();
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;
  const [users, setUsers] = React.useState({});
  let imgSrc = "";
  React.useEffect(() => {
    let data = {};
    const mf = async () => {
      try {
        data = await api.getUserById(userData._id);
      } catch (err) {
        console.log(err.response.data);
      }
      console.log("Data");
      console.log(data);
      setUsers(data);
    };
    mf();
  }, [userData]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleModal = () => setIsModalVisible(() => !isModalVisible);
  imgSrc = `http://localhost:5000${users.image}`;
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
            value={users.name ? users.name : ""}
            onChangeText={(name) => setUsers({ ...users, name: name })}
          />

          <TextInput
            placeholder="Sex"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
            value={users.sex ? users.sex : ""}
            onChangeText={(sex) => setUsers({ ...users, sex: sex })}
          />
          <TextInput
            placeholder="Phone No."
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
            value={users.phoneNo ? users.phoneNo : ""}
            onChangeText={(phoneNo) => setUsers({ ...users, phoneNo: phoneNo })}
          />
          <TextInput
            placeholder="Email Address"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
            value={users.email ? users.email : ""}
            onChangeText={(email) => setUsers({ ...users, email: email })}
          />
          {userData.role == "doctor" ? (
            <TextInput
              placeholder="Specialization"
              style={{
                borderBottomWidth: 0.3,
                padding: 5,
                fontSize: 20,
                marginVertical: 20,
              }}
              value={userData.specialization ? userData.specialization : ""}
              onChangeText={(specialization) =>
                setUserData({ ...userData, specialization: specialization })
              }
            />
          ) : null}
          {userData.role == "doctor" ? (
            <TextInput
              placeholder="Consulting Charges"
              style={{
                borderBottomWidth: 0.3,
                padding: 5,
                fontSize: 20,
                marginVertical: 20,
              }}
            />
          ) : null}
          <TextInput
            placeholder="About"
            style={{
              borderBottomWidth: 0.3,
              padding: 5,
              fontSize: 20,
              marginVertical: 20,
            }}
            value={users.about ? users.about : ""}
            onChangeText={(about) => setUsers({ ...users, about: about })}
          />
          <TouchableOpacity
            style={{ width: 150 }}
            onPress={async () => {
              try {
                users.role == "patient"
                  ? await api.updateProfile_Patient(userData._id, users)
                  : await api.updateProfile_Doctor(userData._id, users);
              } catch (error) {
                console.log(error.response.data);
              }
              Alert.alert("Success", "Profile updated successfully ", [
                {
                  text: "Okay",
                },
              ]);
              console.log("Presseddd");
            }}
          >
            <View
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 5,
                borderColor: PRIMARY,
                backgroundColor: PRIMARY,
                elevation: 5,
                shadowOpacity: 0.2,
                shadowOffset: { width: 5, height: 5 },
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 17 }}
              >
                Update Profile
              </Text>
            </View>
          </TouchableOpacity>
          {/* <Modal  isVisible={isModalVisible}>
            
            <View style={{ flex: 1 }}>
              <Text>Hello!</Text>
              <Button title="Hide Modal" onPress={handleModal} />
            </View>
          </Modal> */}
        </View>
      </Card>

      <Card
        style={{
          margin: 20,
          borderRadius: 10,
          shadowOpacity: 0.26,
          shadowOffset: { width: 10, height: 10 },
          elevation: 5,
          marginTop: 40,
        }}
      >
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: 130,
            height: 100,
            marginTop: -45,
            position: "absolute",
            marginHorizontal: "37%",
          }}
        />
        <View style={{ marginTop: 80, marginBottom: 30 }}>
          <Text style={{ fontSize: 25, textAlign: "center" }}>
            {users ? users.name : ""}
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 20, textAlign: "center", marginBottom: 30 }}>
            {users ? users.about : ""}
          </Text>
        </View>
      </Card>
    </ScrollView>
  );
};

export default Profile;
