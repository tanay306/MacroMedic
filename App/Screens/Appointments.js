import { View, Text } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { Card, DataTable } from "react-native-paper";
import { Button } from "galio-framework";
import { PRIMARY } from "../Utils/colors";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { GlobalContext } from "../GlobalContext";
import api from "../Utils/api";

const UpcomingAppointments = () => {
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;

  const [uApp, setUpp] = useState([]);

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
        upp.push({
          id: `${j}`,
          name:
            userData.role === "doctor"
              ? data[i].patientId.name
              : data[i].doctorId.name,
          date: data[i].date,
          desc: data[i].description,
          status: "Pending",
          report: data[i].report,
          app_id:
            userData.role === "doctor" ? data[i].patientId._id : data[i]._id,
        });
        j++;
      }
      setUpp(upp);
    };
    mf();
  }, [userData]);
  // console.log("LKHGF");
  // console.log(uApp);

  return (
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
        <Text style={{ padding: 5, fontSize: 20, color: "white" }}>
          Upcoming Appointments
        </Text>
        <Text style={{ padding: 5, fontSize: 15, color: "white" }}>
          Here is a list of your upcoming appointments
        </Text>
      </View>
      <View
        style={{
          padding: 5,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <DataTable>
          <DataTable.Header style={{}}>
            <DataTable.Title textStyle={{ marginLeft: -10 }}>
              ID
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: -65 }} style={{}}>
              Doctor's Name
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: -5 }}>
              Date/Time
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: 25 }}>
              Status
            </DataTable.Title>
            {/* <DataTable.Title textStyle={{ marginLeft: 25 }}>
            Report
          </DataTable.Title> */}
          </DataTable.Header>
          {uApp.map((appointment) => (
            <DataTable.Row key={appointment.app_id}>
              <DataTable.Cell textStyle={{ marginLeft: -10 }}>
                {appointment.id}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: -65 }}>
                {appointment.name}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: -40, width: 300 }}>
                {`${appointment.date.split("T")[0]}@${
                  appointment.date.split("T")[1]
                }`}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: 25 }}>
                {appointment.status}
              </DataTable.Cell>
              {/* <DataTable.Cell textStyle={{ marginLeft: 25 }}>
                Report Available
              </DataTable.Cell> */}
            </DataTable.Row>
          ))}
          {/* <DataTable.Row>
          <DataTable.Cell textStyle={{ marginLeft: -10 }}>1</DataTable.Cell>
          <DataTable.Cell textStyle={{ marginLeft: -65 }}>
            Dr. Yash Jhaveri
          </DataTable.Cell>
          <DataTable.Cell textStyle={{ marginLeft: -20 }}>
            30/12/22@6:30
          </DataTable.Cell>
          <DataTable.Cell textStyle={{ marginLeft: 15 }}>
            Visited
          </DataTable.Cell>
          <DataTable.Cell textStyle={{ marginLeft: 25 }}>
            Report Available
          </DataTable.Cell>
        </DataTable.Row> */}
        </DataTable>
      </View>
    </Card>
  );
};

const PreviousAppointments = () => {
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = user;
  const [pApp, setPpp] = useState([]);
  useEffect(() => {
    let data = [];
    const mf = async () => {
      try {
        data = await api.getAllPreviousAppointments(userData._id);
        console.log("DATAAAAAA");
        console.log(data);
      } catch (error) {
        console.log(error);
      }

      let j = 1,
        k = 1;
      let upp = [],
        ppp = [];
      for (let i = 0; i < data.length; i++) {
        // let date = new Date(data[i].date);
        // let time =
        //   new Date().toLocaleTimeString().split(":")[0] +
        //   ":" +
        //   new Date().toLocaleTimeString().split(":")[1];
        // console.log(new Date().toLocaleTimeString());
        // date = date.toLocaleDateString("pt-PT");
        ppp.push({
          id: `${k}`,
          name:
            userData.role === "doctor"
              ? data[i].patientId.name
              : data[i].doctorId.name,
          date: data[i].date,
          desc: data[i].description,
          status: data[i].status,
          report: data[i].report,
          app_id:
            userData.role === "doctor" ? data[i].patientId._id : data[i]._id,
        });
        k++;
      }
      setPpp(ppp);
    };
    mf();
  }, [userData]);
  // console.log("KBKJBK");
  // console.log(pApp);
  return (
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
        <Text style={{ padding: 5, fontSize: 20, color: "white" }}>
          Previous Appointments
        </Text>
        <Text style={{ padding: 5, fontSize: 15, color: "white" }}>
          Here is a list of your previous appointments
        </Text>
      </View>
      <View
        style={{
          padding: 5,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <DataTable>
          <DataTable.Header>
            <DataTable.Title textStyle={{ marginLeft: -10 }}>
              ID
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: -65 }} style={{}}>
              Doctor's Name
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: -5 }}>
              Date/Time
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: 25 }}>
              Status
            </DataTable.Title>
            {/* <DataTable.Title textStyle={{ marginLeft: 25 }}>
            Report
          </DataTable.Title> */}
          </DataTable.Header>
          {pApp.map((appointment) => (
            <DataTable.Row key={appointment.app_id}>
              <DataTable.Cell textStyle={{ marginLeft: -10 }}>
                {appointment.id}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: -65 }}>
                {appointment.name}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: -40, width: 300 }}>
                {`${appointment.date.split("T")[0]}@${
                  appointment.date.split("T")[1]
                }`}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: 25 }}>
                {appointment.status}
              </DataTable.Cell>
              {/* <DataTable.Cell textStyle={{ marginLeft: 25 }}>
                Report Available
              </DataTable.Cell> */}
            </DataTable.Row>
          ))}
          {/* <DataTable.Row>
          <DataTable.Cell textStyle={{ marginLeft: -10 }}>1</DataTable.Cell>
          <DataTable.Cell textStyle={{ marginLeft: -65 }}>
            Dr. Yash Jhaveri
          </DataTable.Cell>
          <DataTable.Cell textStyle={{ marginLeft: -20 }}>
            30/12/22@6:30
          </DataTable.Cell>
          <DataTable.Cell textStyle={{ marginLeft: 15 }}>
            Visited
          </DataTable.Cell>
          <DataTable.Cell textStyle={{ marginLeft: 25 }}>
            Report Available
          </DataTable.Cell>
        </DataTable.Row> */}
        </DataTable>
      </View>
    </Card>
  );
};

const Appointments = () => {
  return (
    <ScrollView>
      <UpcomingAppointments />
      <PreviousAppointments />
    </ScrollView>
  );
};

export default Appointments;
