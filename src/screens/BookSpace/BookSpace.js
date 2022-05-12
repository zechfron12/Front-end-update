import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

import BookSpaceOptions from "../../components/BookSpaceOptions";
import MainButton from "../../components/MainButton";

const BookSpace = () => {
  return (
    <View style={styles.container}>
      <View style={{ width: "85%" }}>
        <Ionicons name="menu-sharp" size={45} color="#FFFFFE" />
      </View>
      <Text style={styles.descriptiveText}>Space 4c</Text>
      <BookSpaceOptions></BookSpaceOptions>
      <MainButton text="Book Space"></MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#004643",
    alignItems: "center",
    justifyContent: "center",
  },
  descriptiveText: {
    color: "#ABD1C6",
    fontWeight: "600",
    fontSize: 18,
    margin: 10,
  },
});

export default BookSpace;
