import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const Meeting = ({ route }) => {
  const { link } = route.params;
  return <WebView source={{ uri: `${link}` }} />;
};

export default Meeting;

const styles = StyleSheet.create({});
