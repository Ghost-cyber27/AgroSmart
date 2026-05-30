import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../utils/colors";
import { useNavigation } from "@react-navigation/native";
// import

export default function Login() {
  const navigation = useNavigation();
  const [seePass, setSeePass] = useState(true);
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/login.jpg")} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.h1}>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="email@example.com"
          keyboardType="email-address"
        />
        <View style={styles.inputView}>
          <TextInput
            style={styles.textInput2}
            placeholder="Your Password"
            keyboardType="default"
            secureTextEntry={seePass}
          />
          {seePass ? (
            <Ionicons
              name="eye-off"
              size={24}
              onPress={() => setSeePass(false)}
            />
          ) : (
            <Ionicons name="eye" size={24} onPress={() => setSeePass(true)} />
          )}
        </View>
        <TouchableOpacity
          style={styles.fBtn}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          <Text style={styles.fText}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => setVisible(true)}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.rBtn}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.text}>
            Don't have an account
            <Text style={{ fontWeight: "bold" }}>, Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: hp("10%"), // use react native responsive screen
    backgroundColor: "white",
  },
  img: {
    width: wp("80%"),
    height: hp("20%"),
  },
  content: {
    padding: wp("10%"),
    gap: hp("2%"),
  },
  h1: {
    fontSize: 20,
    fontFamily: "Bold",
  },
  text: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  inputView: {
    width: wp("80%"),
    height: hp("9%"),
    borderWidth: 2,
    borderColor: COLORS.lightColor,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
  },
  textInput: {
    width: wp("80%"),
    height: hp("9%"),
    fontSize: 16,
    borderWidth: 2,
    borderColor: COLORS.lightColor,
    borderRadius: 10,
    fontFamily: "Regular",
  },
  textInput2: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  btn: {
    width: wp("80%"),
    height: hp("9%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bgColor,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 16,
    fontFamily: "Black",
    color: "white",
  },
  fBtn: {
    width: wp("80%"),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  fText: {
    fontSize: 16,
    fontFamily: "Regular",
    color: "blue",
  },
  rBtn: {
    width: wp("80%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
