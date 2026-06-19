import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../utils/colors";
import { Ionicons } from "@expo/vector-icons";
import { getImages, analyzeCropDirect } from "../../utils/functions";

export default function Detection() {
  const [img, setImg] = useState(null);
  const [base64, setBase64] = useState(null);
  const [detectResult, setDetectResult] = useState(null);

  const gettingImage = () => {
    const result = getImages();

    if (!result) {
      console.log("No Image Selected");
    }

    setImg(result.uri);
    setBase64(result.base64);
    console.log("Image Successfully Selected");
  };

  const gettingResult = async () => {
    const result = await analyzeCropDirect(base64);

    if (!result) {
      console.log("Analysis Failed...");
    }

    setDetectResult(result);
    console.log("Analysis Complete!!!");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imgView}>
        {img ? (
          <Image source={{ uri: img }} style={styles.img} />
        ) : (
          <Ionicons
            name="cloud-upload"
            size={200}
            color={COLORS.bgColor}
            onPress={gettingImage}
          />
        )}
      </TouchableOpacity>
      <View style={styles.viewing}>
        <TouchableOpacity style={styles.btn} onPress={gettingResult}>
          <Text style={styles.btnText}>UPLOAD and DETECT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: hp("2%"),
    backgroundColor: "white",
  },
  imgView: {
    width: wp("90%"),
    height: hp("45%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#dcd8d8",
  },
  img: {
    width: wp("90%"),
    height: hp("45%"),
  },
  viewing: {
    marginTop: hp("5%"),
  },
  btn: {
    width: wp("85%"),
    height: hp("7%"),
    backgroundColor: COLORS.lightColor,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Bold",
  },
});
