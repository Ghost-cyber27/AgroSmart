import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
        style={styles.img1}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  img1: {
    width: wp("50%"),
    height: hp("50%"),
  },
});
