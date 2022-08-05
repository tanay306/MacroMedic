import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    phoneNo: "",
    email: "",
    password: "",
    role: "",
    age: "",
    sex: "",
    specialization: "",
    token: "",
    location: {
      latitude: "",
      longitude: "",
    },
  });

  const [allDoctors, setAllDoctors] = useState([]);

  const getLS = async () => {
    const data = await AsyncStorage.getItem("Macromedic_user");
    const jsonData = await JSON.parse(data);
    if (jsonData) {
      setUserData(jsonData);
    }
  };
  const setLS = async () => {
    await AsyncStorage.setItem("Macromedic_user", JSON.stringify(userData));
  };

  useEffect(() => {
    getLS();
  }, []);

  useEffect(() => {
    setLS();
    console.log(userData);
  }, [userData]);

  useEffect(() => {
    console.log(allDoctors);
  }, [allDoctors]);

  return (
    <GlobalContext.Provider
      value={{
        user: [userData, setUserData],
        allDocs: [allDoctors, setAllDoctors],
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
