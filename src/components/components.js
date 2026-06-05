import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../utils/colors";
import { useNavigation } from "@react-navigation/native";

export const LoadingPlantData = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/plant_loading.gif")}
        style={styles.img1}
      />
    </View>
  );
};

export const LoadingPlantScan = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/plant_scanning.gif")}
        style={styles.img1}
      />
    </View>
  );
};

export const LoadingLogin = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/loading.gif")} style={styles.img1} />
    </View>
  );
};

export const LoggedIn = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/open-lock.gif")}
        style={[styles.img1, { left: wp("5%") }]}
      />
    </View>
  );
};

export const LoggedOut = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/padlock.gif")} style={styles.img1} />
    </View>
  );
};

export const WeatherCard = ({ item }) => {
  return (
    <View style={styles.weather_card}>
      {/*<Text>{item.date}</Text>
      <Image source={{ uri: item.day.condition.icon }} style={styles.icon} />
      <Text>{item.temp_c}</Text>*/}
      <Text style={{ color: "white" }}>2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  img1: {
    width: wp("90%"),
    height: hp("60%"),
  },
  icon: {
    width: wp("10%"),
    height: hp("5%"),
  },
  weather_card: {
    width: wp("10%"),
    height: hp("10%"),
    alignItems: "center",
    //justifyContent: "space-evenly",
    backgroundColor: COLORS.lightColor,
    margin: 5,
  },
});
