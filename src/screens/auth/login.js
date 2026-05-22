import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require("")} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.h1}>Login</Text>
        <TextInput style={styles.textInput} />
        <View style={styles.inputView}>
          <TextInput style={styles.textInput} />
          <Ionicons />
        </View>
        <TouchableOpacity style={styles.fBtn}>
          <Text style={styles.fText}>Forgot Password ?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.rBtn}>
          <Text style={styles.text}>
            Don't have an account,
            <Text style={{ fontWeight: "bold" }}>Register</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {},
  content: {
    padding: "",
  },
  h1: {
    fontSize: 20,
    fontFamily: "",
  },
  text: {
    fontSize: 16,
    fontFamily: "",
  },
  inputView: {},
  textInput: {},
  textInput2: {},
  btn: {},
  btnText: {},
  fBtn: {},
  fText: {
    fontSize: 16,
  },
  rBtn: {},
});
