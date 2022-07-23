import { View, Text } from "react-native";
import React from "react";
import { Card, DataTable } from "react-native-paper";
import { Button } from "galio-framework";
import { PRIMARY } from "../Utils/colors";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const UpcomingAppointments = () => {
  const upcomingAppointments = [
    {
      id: 1,
      name: "Dr. Yash Jhaveri",
      date: "30/12/22@6:30",
      status: "Pending",
    },
    {
      id: 2,
      name: "Dr. Yash Shah",
      date: "31/12/22@6:30",
      status: "Pending",
    },
    {
      id: 3,
      name: "Dr. Tanay Naik",
      date: "2/11/22@4:30",
      status: "Pending",
    },
  ];
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
            <DataTable.Title textStyle={{ marginLeft: -20 }}>
              Date/Time
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: 15 }}>
              Status
            </DataTable.Title>
            {/* <DataTable.Title textStyle={{ marginLeft: 25 }}>
            Report
          </DataTable.Title> */}
          </DataTable.Header>
          {upcomingAppointments.map((appointment) => (
            <DataTable.Row key={appointment.id}>
              <DataTable.Cell textStyle={{ marginLeft: -10 }}>
                {appointment.id}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: -65 }}>
                {appointment.name}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: -20 }}>
                {appointment.date}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: 15 }}>
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
  const previousAppointments = [
    {
      id: 1,
      name: "Dr. Yash Jhaveri",
      date: "30/12/22@6:30",
      status: "Visited",
    },
    {
      id: 2,
      name: "Dr. Yash Shah",
      date: "31/12/22@6:30",
      status: "Not Visited",
    },
    {
      id: 3,
      name: "Dr. Tanay Naik",
      date: "2/11/22@4:30",
      status: "Cancelled",
    },
  ];
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
          <DataTable.Header style={{}}>
            <DataTable.Title textStyle={{ marginLeft: -10 }}>
              ID
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: -65 }} style={{}}>
              Doctor's Name
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: -20 }}>
              Date/Time
            </DataTable.Title>
            <DataTable.Title textStyle={{ marginLeft: 15 }}>
              Status
            </DataTable.Title>
            {/* <DataTable.Title textStyle={{ marginLeft: 25 }}>
                Report
              </DataTable.Title> */}
          </DataTable.Header>
          {previousAppointments.map((appointment) => (
            <DataTable.Row key={appointment.id}>
              <DataTable.Cell textStyle={{ marginLeft: -10 }}>
                {appointment.id}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: -65 }}>
                {appointment.name}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: -20 }}>
                {appointment.date}
              </DataTable.Cell>
              <DataTable.Cell textStyle={{ marginLeft: 15 }}>
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
