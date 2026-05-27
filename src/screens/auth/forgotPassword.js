import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../utils/colors";
// import

export default function ForgotPassword() {
  return (
    <View style={styles.container}>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.bBtn}>
          <Ionicons name="arrow-back" size={24} color={"white"} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.h1}>Forgot Password</Text>
        <TextInput
          style={styles.textInput}
          placeholder="email@example.com"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Reset</Text>
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
  },
  btnView: {
    width: wp("80%"),
    height: hp("10%"),
    alignItems: "flex-start",
    justifyContent: "center",
  },
  bBtn: {
    width: wp("20%"),
    height: hp("7%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.bgColor,
    borderRadius: 10,
  },
  content: {
    padding: wp("3%"),
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
    height: hp("10%"),
    borderWidth: 2,
    borderColor: COLORS.lightColor,
    borderRadius: 10,
  },
  textInput: {
    width: wp("80%"),
    height: hp("10%"),
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
    height: hp("10%"),
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
    height: hp("10%"),
    alignItems: "flex-end",
    justifyContent: "center",
  },
  fText: {
    fontSize: 16,
    fontFamily: "Regular",
  },
  rBtn: {
    width: wp("80%"),
    height: hp("10%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
