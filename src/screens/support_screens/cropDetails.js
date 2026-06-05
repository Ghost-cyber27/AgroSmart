import { View, Text, StyleSheet, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CropDetails() {
  const route = useRoute();
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.img} />
      <View style={styles.content}>
        <Text>Name: {item.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  img: {
    width: wp("100%"),
    height: hp("40%"),
  },
  content: {
    padding: wp("2%"),
    width: wp("100%"),
  },
});
