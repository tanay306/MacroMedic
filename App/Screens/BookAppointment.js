import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../GlobalContext";
import api from "../Utils/api";

const BookAppointment = ({ route }) => {
  const { id } = route.params;
  const { allDocs, user } = useContext(GlobalContext);
  const [userData, setUserData] = user;
  const [allDoctors, setAllDoctors] = allDocs;
  const [doctor, setDoctor] = useState({});
  useEffect(() => {
    const fetchDoctorHandler = async () => {
      try {
        setDoctor(await api.searchParticularDoctor(id));
      } catch (error) {
        console.log(error);
      }
    };
    fetchDoctorHandler();
  }, [id]);
  console.log(doctor);

  const [bookAppointment, setBookAppointment] = useState({
    doctorId: id,
    dateTime: "2020-03-20T10:30",
    description: "",
  });

  const [file, setFile] = useState();

  useEffect(() => {
    console.log(bookAppointment);
  }, [bookAppointment]);

  const isValidChecker = async (val) => {
    let data = await api.isValid(val, docId);
    data = data.data.data.isValid.msg;
    return data;
  };

  useEffect(() => {
    const getDoctorData = async () => {
      try {
        setAllDoctors(await api.getDoctors());
      } catch (error) {
        console.log(error);
      }
    };
    getDoctorData();
  }, []);
  return (
    <View>
      <Text>BookAppointment</Text>
    </View>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({});
