import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../utils/colors";
// import

export default function Signup() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: hp("5%"),
          alignItems: "center",
        }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/signup.jpg")}
            style={styles.img}
          />
          <View style={styles.content}>
            <Text style={styles.h1}>Sign Up</Text>
            <TextInput style={styles.textInput} placeholder="Full Name" />
            <TextInput
              style={styles.textInput}
              placeholder="email@example.com"
            />
            <View style={styles.inputView}>
              <TextInput
                style={styles.textInput2}
                placeholder="Your Password"
              />
              <Ionicons name="eye" size={24} />
            </View>
            <TouchableOpacity style={styles.fBtn}>
              <Text style={styles.fText}>Forgot Password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rBtn}>
              <Text style={styles.text}>
                Already have an account,
                <Text style={{ fontWeight: "bold" }}> Login</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp("5%"), // use react native responsive screen
  },
  img: {
    width: wp("80%"),
    height: hp("25%"),
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
  },
  rBtn: {
    width: wp("80%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
