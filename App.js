import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Alert,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{ borderBottomWidth: 2, borderColor: "", width: 150 }}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#969393",
    alignItems: "center",
    justifyContent: "center",
  },
});
