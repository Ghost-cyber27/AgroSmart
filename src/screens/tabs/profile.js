import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  TextInput
} from "react-native";
import { Image } from "expo-image";
import { COLORS } from "../../utils/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function Profile() {
  
  return (
    <ImageBackground
      source={require("../../../assets/plant1.jpg")}
      style={styles.container}
    >
      <View>
        <Image
          source={require("../../../assets/profile.gif")}
          style={styles.img}
        />
      </View>
      <View style={styles.firstCon}>
        <TouchableOpacity style={styles.lower}>
          <Text style={styles.h1}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.lower}>
          <Text style={styles.h1}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.h1, { color: "red" }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: wp("50%"),
    height: hp("25%"),
    borderRadius: 100,
    elevation: 5,
    shadowColor: "black",
  },
  firstCon: {
    margin: 10,
    width: 300,
    height: 200,
    borderRadius: 30,
    backgroundColor: COLORS.lightColor,
    padding: 10,
    gap: 25,
    alignItems: "center",
    elevation: 5,
  },
  h1: {
    fontSize: 24,
    fontFamily: "Bold",
    color: "white",
  },
  h2: {
    fontSize: 16,
    fontFamily: "Light",
  },
  text: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  lower: {
    borderBottomWidth: 2,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    borderColor: "white",
  },
});
