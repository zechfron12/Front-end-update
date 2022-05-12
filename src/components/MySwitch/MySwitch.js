import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";

const MySwitch = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    props.setValue((previousState) => !previousState);
  };

  return (
    <Switch
      style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
      trackColor={{ false: "#767577", true: "#F9BC60" }}
      thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={props.value}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MySwitch;
