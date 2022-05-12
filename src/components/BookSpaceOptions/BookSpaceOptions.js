import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

import Slider from "react-native-slider";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { DateTimePickerModal } from "react-native-modal-datetime-picker";

import MySwitch from "../MySwitch";

const BookSpaceOptions = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [disabledSwitch, setDisabledSwitch] = useState(false);
  const [requestSpecialGuard, setRequestSpecialGuard] = useState(false);

  const currentDate = new Date();

  const [hour, setHour] = useState(
    `${currentDate.getHours()}:${currentDate.getMinutes()}`
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setHour(date.getHours() + ":" + date.getMinutes());
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Estimate Duration</Text>
      </View>
      <Slider
        style={styles.timeSlider}
        minimumValue={0}
        maximumValue={24}
        minimumTrackTintColor="#F9BC60"
        maximumTrackTintColor="#8E8E93"
        thumbTintColor="#f5dd4b"
      />
      <View style={styles.checkIn}>
        <Text>Check-in Time: </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather
            name="edit"
            size={24}
            color="#A6AAB4"
            onPress={showDatePicker}
          />
          <Text>{hour} </Text>
          <DateTimePickerModal
            date={new Date()}
            minuteInterval={1}
            is24Hour
            isVisible={isDatePickerVisible}
            mode="time"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
      </View>
      <View style={styles.breakLine}></View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Specifications</Text>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Fontisto
            style={{ margin: 5 }}
            name="wheelchair"
            size={18}
            color="#A6AAB4"
          />
          <Text style={styles.normal}>Disabled Parking</Text>
        </View>
        <MySwitch
          value={disabledSwitch}
          setValue={setDisabledSwitch}
        ></MySwitch>
      </View>
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Foundation
            style={{ margin: 5 }}
            name="shield"
            size={20}
            color="#A6AAB4"
          />
          <Text style={styles.normal}>Request Special Guard($10)</Text>
        </View>
        <MySwitch
          value={requestSpecialGuard}
          setValue={setRequestSpecialGuard}
        ></MySwitch>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    width: "85%",
    paddingTop: 40,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 90,
  },
  header: {
    paddingLeft: 10,
    width: "100%",
  },
  headerText: {
    padding: 2,
    fontSize: 16,
    fontWeight: "600",
  },
  timeSlider: {
    width: "90%",
  },
  checkIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  breakLine: {
    marginTop: 30,
    height: 1,
    backgroundColor: "#A6AAB4",
    width: "100%",
  },
  normal: {
    color: "#001E1D",
    fontWeight: "400",
    fontSize: 16,
  },
});

export default BookSpaceOptions;
