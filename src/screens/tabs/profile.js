import { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";
import { Image } from "expo-image";
import { COLORS } from "../../utils/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AuthContext } from "../../services/AuthContext";
import { LoggedOut } from "../../components/components";

export default function Profile() {
  const { logout, isLogOut, update_password, update_email } =
    useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isLogOut) {
    return <LoggedOut />;
  }

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
        <TouchableOpacity style={styles.lower} onPress={() => setVisible(true)}>
          <Text style={styles.h1}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.lower}
          onPress={() => setVisible2(true)}
        >
          <Text style={styles.h1}>Terms and Conditions</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={logout}>
          <Text style={[styles.h1, { color: "red" }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" visible={visible}>
        <View style={styles.modalView}>
          <Text style={styles.h1}>Edit Your Profile</Text>
          <View style={styles.content}>
            <TextInput
              placeholder="Update Email: email@example.com"
              onChangeText={(text) => setEmail(text)}
              style={styles.textInput}
            />
            <TextInput
              placeholder="Update Password: ********"
              onChangeText={(text) => setPassword(text)}
              style={styles.textInput}
            />
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => update_email(email)}
            >
              <Text style={styles.searchBtnText}>Update Email</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => update_password(password)}
            >
              <Text style={styles.searchBtnText}>Update Password</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.searchBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" visible={visible2}>
        <ScrollView
          style={styles.terms}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Text style={styles.h1}>Terms and Conditions</Text>
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => setVisible2(false)}
          >
            <Text style={styles.searchBtnText}>GO BACK</Text>
          </TouchableOpacity>
        </ScrollView>
      </Modal>
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
  modalView: {
    flex: 1,
    backgroundColor: "white",
    padding: wp("5%"),
    alignItems: "center",
  },
  terms: {
    flex: 1,
    backgroundColor: "white",
    padding: wp("5%"),
  },
  searchBtn: {
    width: wp("50%"),
    height: hp("7%"),
    borderRadius: 10,
    backgroundColor: COLORS.lightColor,
    alignItems: "center",
    justifyContent: "center",
  },
  searchBtnText: {
    fontSize: 16,
    fontFamily: "Black",
    color: "white",
  },
  content: {
    padding: wp("10%"),
    gap: hp("2%"),
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
});
