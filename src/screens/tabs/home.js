import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import cropsData from "../../utils/crops.json";
import { LoadingPlantData } from "../../components/components";
import { COLORS } from "../../utils/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { truncate } from "../../utils/functions";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  const data = [
    { id: "1", name: "maize", image: require("../../../assets/plant3.jpg") },
    {
      id: "1",
      name: "maizeoouyf",
      image: require("../../../assets/plant3.jpg"),
    },
    { id: "3", name: "maize", image: require("../../../assets/plant3.jpg") },
    {
      id: "4",
      name: "maizeoouyf",
      image: require("../../../assets/plant3.jpg"),
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ margin: wp("3%") }}>
            <ImageBackground
              source={item.image}
              style={styles.card}
              imageStyle={styles.card}
            >
              <Text style={styles.cardText}>{truncate(item.name)}</Text>
            </ImageBackground>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={
          <>
            <View>
              <ImageBackground
                source={require("../../../assets/plant2.jpg")}
                style={styles.headerView}
                imageStyle={styles.headerImg}
              >
                <Text style={styles.h1}>Hello Isaac Lekwot</Text>
                <Text style={styles.h2}>Farming Made Simple</Text>
                <Text style={styles.h2}>Smarter , and Sustainable</Text>
              </ImageBackground>
              <View style={{ alignItems: "center", margin: hp("1%") }}>
                <ImageBackground
                  source={require("../../../assets/weather4.png")}
                  style={styles.weatherCard}
                  imageStyle={styles.weatherCard}
                  blurRadius={5}
                ></ImageBackground>
              </View>
            </View>
          </>
        }
      />
      <StatusBar hidden style="light" animated />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  card: {
    width: wp("44%"),
    height: hp("30%"),
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    elevation: 5, //for android
    // for IOS
    shadowColor: COLORS.lightColor,
    shadowOffset: {
      width: wp("44%"),
      height: hp("30%"),
    },
    shadowOpacity: 0.81,
    shadowRadius: 10,
  },
  cardText: {
    fontSize: 24,
    fontFamily: "Black",
    color: "white",
  },
  headerView: {
    height: hp("30%"),
    overflow: "hidden",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    padding: wp("2%"),
    paddingTop: hp("5%"),
    gap: hp("2%"),
  },
  headerImg: {
    resizeMode: "cover",
  },
  h1: {
    color: "white",
    fontSize: 24,
    fontFamily: "Bold",
  },
  h2: {
    color: "white",
    fontSize: 20,
    fontFamily: "Black",
  },
  weatherCard: {
    width: wp("90%"),
    height: hp("30%"),
    elevation: 5, //for android
    // for IOS
    shadowColor: COLORS.lightColor,
    shadowOffset: {
      width: wp("44%"),
      height: hp("30%"),
    },
    shadowOpacity: 0.81,
    shadowRadius: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
});
