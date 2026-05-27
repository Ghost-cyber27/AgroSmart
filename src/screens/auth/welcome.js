import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../utils/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Welcome() {
  const nextScreen = async () => {
    try {
      //set AsyncStorage
      await AsyncStorage.setItem("install", "true");
      //navigate
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <ImageBackground
      source={require("../../../assets/plant3.jpg")}
      style={styles.container}
    >
      <Text style={styles.h1}>Welcome to AgroSmart</Text>
      <TouchableOpacity style={styles.btn} onPress={nextScreen}>
        <Text style={styles.btnText}>NEXT</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  h1: {
    fontSize: 32,
    fontFamily: "Bold",
    color: "white",
  },
  btn: {
    width: wp("70%"),
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bgColor,
    borderRadius: 10,
    top: hp("40%"),
  },
  btnText: {
    fontSize: 16,
    fontFamily: "Black",
    color: "white",
  },
});
