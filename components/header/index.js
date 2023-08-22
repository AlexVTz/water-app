import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Header({ title }) {
  return <Text style={styles.header}>{title}</Text>;
}

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
