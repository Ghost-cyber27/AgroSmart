import { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { object, string } from "yup";
import { Formik } from "formik";

const SignupSchemas = object({
  fullname: string().required("Full Name Required"),
  email: string().email("Must be an Email").required("Email Required"),
  password: string()
    .min(8, "Must be at least * characters")
    .required("Password Required"),
});

export default function Signup() {
  const navigation = useNavigation();
  const [seePass, setSeePass] = useState(true);
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
          <Formik
            initialValues={{ fullname: "", email: "", password: "" }}
            validationSchema={SignupSchemas}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.content}>
                  <Text style={styles.h1}>Sign Up</Text>
                  <TextInput
                    style={styles.textInput}
                    placeholder="Full Name"
                    onChangeText={handleChange("fullname")}
                  />
                  {touched.fullname && errors.fullname && (
                    <Text>{errors.fullname}</Text>
                  )}
                  <TextInput
                    style={styles.textInput}
                    placeholder="email@example.com"
                    onChangeText={handleChange("email")}
                  />
                  {touched.email && errors.email && <Text>{errors.email}</Text>}
                  <View style={styles.inputView}>
                    <TextInput
                      style={styles.textInput2}
                      placeholder="Your Password"
                      secureTextEntry={seePass}
                      onChangeText={handleChange("password")}
                    />
                    {seePass ? (
                      <Ionicons
                        name="eye-off"
                        size={24}
                        onPress={() => setSeePass(false)}
                      />
                    ) : (
                      <Ionicons
                        name="eye"
                        size={24}
                        onPress={() => setSeePass(true)}
                      />
                    )}
                  </View>
                  {touched.password && errors.password && (
                    <Text>{errors.password}</Text>
                  )}
                  <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                    <Text style={styles.btnText}>Sign Up</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.rBtn}
                    onPress={() => navigation.navigate("Login")}
                  >
                    <Text style={styles.text}>
                      Already have an account,
                      <Text style={{ fontWeight: "bold" }}> Login</Text>
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

/**
 *
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: hp("5%"), // use react native responsive screen
    backgroundColor: "white",
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
