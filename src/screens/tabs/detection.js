import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";

export default function Detection() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imgView}>
        <Ionicons name="cloud-upload" size={200} />
      </TouchableOpacity>
      <View style={styles.viewing}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>UPLOAD and DETECT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: hp("2%"),
    backgroundColor: "white",
  },
  imgView: {
    width: wp("90%"),
    height: hp("45%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dcd8d8",
  },
  img: {
    width: wp("90%"),
    height: hp("45%"),
  },
  viewing: {
    marginTop: hp("5%"),
  },
  btn: {
    width: wp("85%"),
    height: hp("7%"),
    backgroundColor: COLORS.bgColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Bold",
  },
});
