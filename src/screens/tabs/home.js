import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Modal,
  TextInput,
} from "react-native";
import cropsData from "../../utils/crops.json";
import {
  LoadingPlantData,
  WeatherCard,
  LoggedIn,
} from "../../components/components";
import { COLORS } from "../../utils/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { truncate, fetchWeatherByLocation } from "../../utils/functions";
import { StatusBar } from "expo-status-bar";
import cropData from "../../utils/crops.json";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const [weather, setWeather] = useState([]);
  const [visible, setVisible] = useState(false);
  const [loadedData, setLoadedData] = useState(false);
  const [load, setLoad] = useState(true);
  const navigation = useNavigation();

  const recommendBtn = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setTimeout(() => setLoad(false), 2000);
    const gettingWeather = async () => {
      const result = await fetchWeatherByLocation();
      setWeather(result);
    };

    gettingWeather();
  }, []);

  if (load) {
    return <LoggedIn />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cropData.crops}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("CropDetails", { item: item })}
            style={{ margin: wp("3%") }}
          >
            <ImageBackground
              source={{ uri: item.image }}
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
                >
                  {/*weather ? (
                    <>
                      <View style={{ flexDirection: "row", gap: wp("6%") }}>
                        {weather.forecast.forecastday.map((item, index) => (
                          <WeatherCard key={index} item={item} />
                        ))}
                      </View>
                      <View>
                        <Text style={styles.weatherText}>{new Date()}</Text>
                        <Text style={styles.weatherText}>DEGREE</Text>
                        <Ionicons
                          name="cloud"
                          size={30}
                          color={COLORS.lightColor}
                        />
                      </View>
                    </>
                  ) : (
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: wp("90%"),
                        height: hp("30%"),
                      }}
                    >
                      <ActivityIndicator size={"large"} color={"white"} />
                    </View>
                  )*/}
                </ImageBackground>
              </View>
            </View>
          </>
        }
      />
      <TouchableOpacity style={styles.floatingBtn} onPress={recommendBtn}>
        <Ionicons name="add" color={"white"} size={60} />
      </TouchableOpacity>
      <Modal visible={visible} animationType="slide">
        {loadedData ? (
          <View>
            <Text></Text>
          </View>
        ) : (
          <View>
            {/*location*/}
            <TextInput />
            {/*soil type*/}
            <TextInput />
            {/*season*/}
            <TextInput />
          </View>
        )}
      </Modal>
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
    justifyContent: "space-evenly",
  },
  weatherText: {
    color: "white",
    fontSize: 20,
    fontFamily: "Black",
  },
  floatingBtn: {
    width: wp("20%"),
    height: hp("10%"),
    borderRadius: 50,
    backgroundColor: COLORS.lightColor,
    position: "absolute",
    top: hp("85%"),
    left: wp("75%"),
    alignItems: "center",
    justifyContent: "center",
  },
});
