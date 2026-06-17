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
  Image
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
import { truncate, fetchWeatherByLocation, getRecommendations } from "../../utils/functions";
import { StatusBar } from "expo-status-bar";
import cropData from "../../utils/crops.json";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Dropdown } from 'react-native-element-dropdown';

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [visible, setVisible] = useState(false);
  const [loadedData, setLoadedData] = useState(false);
  const [recData, setRecData] = useState(null);
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [value3, setValue3] = useState();
  const [value4, setValue4] = useState();
  const navigation = useNavigation();

  const climate = [
    { label: 'Warm', value: 'Warm' },
    { label: 'Humid', value: 'Humid' },
    { label: 'Hot', value: 'Hot' },
    { label: 'Dry', value: 'Dry' },
    { label: 'Tropical', value: 'Tropical' },
    { label: 'Temperate', value: 'Temperate' },
    { label: 'Cool', value: 'Cool' },
    { label: 'Cold', value: 'Cold' },
    { label: 'Arid', value: 'Arid' },
    { label: 'Semi-Arid', value: 'Semi-Arid' },
    { label: 'Rainy', value: 'Rainy' },
    { label: 'Monsoon', value: 'Monsoon' },
    { label: 'Mild', value: 'Mild' },
    { label: 'Wet', value: 'Wet' },
    { label: 'Windy', value: 'Windy' },
    { label: 'Cloudy', value: 'Cloudy' },
    { label: 'Sunny', value: 'Sunny' },
  ];

  const soil_type = [
    { label: 'Loamy Soil', value: 'Loamy Soil' },
    { label: 'Sandy Soil', value: 'Sandy Soil' },
    { label: 'Clay Soil', value: 'Clay Soil' },
    { label: 'Silt Soil', value: 'Silt Soil' },
    { label: 'Peat Soil', value: 'Peat' },
    { label: 'Chalk Soil', value: 'Chalk Soil' },
  ];

  const season = [
    {label: 'Spring', value: 'Spring'},
    {label: 'Autumn/Fall', value: 'Autumn/Fall'},
    {label: 'Summer', value: 'Summer'},
    {label: 'Winter', value: 'Winter'},
  ];

  const water = [
    {label: 'Very Low', value: 'Very Low'},
    {label: 'Low', value: 'Low'},
    {label: 'Moderate', value: 'Moderate'},
    {label: 'Medium', value: 'Medium'},
    {label: 'High', value: 'High'},
    {label: 'Very High', value: 'Very High'},
  ]
  

  const recommendBtn = () => {
    setVisible(!visible);
  };

  const recommendation = () => {
    const userPreferences = {
      soil: value2,
      season: value3,
      climate: value,
      water: value4
    }

    const recommendations = getRecommendations(cropData.crops, userPreferences);

    console.log('recommendation: ',recommendations);
    setRecData(recommendations);
    setLoadedData(true);
    setValue('');
    setValue2('');
    setValue3('');
    setValue4('');
  }

  const closingRModel = () => {
    setLoadedData(false);
    setVisible(false);
  }

  useEffect(() => {
    const gettingWeather = async () => {
      const result = await fetchWeatherByLocation();
      setWeather(result);
    };

    gettingWeather();
  }, []);

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
                  {weather ? (
                    <>
                      <View style={{ flexDirection: "row", gap: wp("0%") }}>
                        {weather?.forecast?.forecastday.map((item, index) => (
                          <WeatherCard key={index} item={item} />
                        ))}
                      </View>
                      <View style={{padding: wp('1%')}}>
                        <Text style={styles.weatherText}>{new Date().toLocaleDateString()}</Text>
                        <Text style={styles.weatherText}>{weather?.current?.temp_c}°C</Text>
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
                  )}
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
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{left: wp('85%'), marginTop: hp('2%')}} onPress={closingRModel}>
              <Ionicons name="close" size={30} color={'red'} />
            </TouchableOpacity>
            <FlatList
              data={recData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.modelContent}>
                  <Image
                    style={styles.modelContentImg}
                    source={{ uri: item.image }}
                  />
                  <View style={{ gap: wp('1%') }}>
                    <Text style={styles.modelContenth1}>{item.name}</Text>
                    <Text style={styles.modelContenth1}>Category</Text>
                    <Text style={styles.modelContentText}>{item.category}</Text>
                    <Text style={styles.modelContenth1}>Soil Type</Text>
                    <Text style={styles.modelContentText}>{item.soil_type.join(', ')}</Text>
                    <Text style={styles.modelContenth1}>Climate Preferred</Text>
                    <Text style={styles.modelContentText}>{item.climate}</Text>
                    <Text style={styles.modelContenth1}>Season to plant</Text>
                    <Text style={styles.modelContentText}>{item.season}</Text>
                    <Text style={styles.modelContenth1}>Watering Rate</Text>
                    <Text style={styles.modelContentText}>{item.water_requirement}</Text>
                    <Text style={styles.modelContenth1}>Advice</Text>
                    <Text style={styles.modelContentText}>In terms of watering, {item.watering_advice} it takes 
                      {item.growth_duration_days} days for growth, which is why in terms of fertilizer {item.fertilizer_recommendation} 
                      {item.pest_control} There are common diseases you should watch out for: {item.common_diseases.join(", ")}. 
                      Some harvesting advice, {item.harvest_advice} and also {item.storage_advice}
                      </Text>
                  </View>
                </View>
              )}
            />
          </View>
        ) : (
          <View style={styles.modelView}>
            {/*climate*/}
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={climate}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Select Climate'}
              value={value}
              onChange={item => {
                setValue(item.value);
              }}
            />
            {/*soil type*/}
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={soil_type}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Select Soil Type'}
              value={value2}
              onChange={item => {
                setValue2(item.value);
              }}
            />
            {/*season*/}
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={season}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Select Season'}
              value={value3}
              onChange={item => {
                setValue3(item.value);
              }}
            />
            {/*water*/}
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={water}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={'Select Water Requirement'}
              value={value4}
              onChange={item => {
                setValue4(item.value);
              }}
            />
            <TouchableOpacity style={styles.searchBtn} onPress={recommendation}>
              <Text style={styles.searchBtnText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.searchBtn} onPress={() => setVisible(false)}>
              <Text style={styles.searchBtnText}>Cancel</Text>
            </TouchableOpacity>
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
  modelView: {
    flex: 1,
    alignItems: 'center',
    paddingTop: hp('5%'),
    backgroundColor: 'white',
    gap: hp('2%')
  },
  dropdown: {
    width: wp('90%'),
    height: hp('7%'),
    borderColor: COLORS.bgColor,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  searchBtn: {
    width: wp('50%'),
    height: hp('7%'),
    borderRadius: 10,
    backgroundColor: COLORS.lightColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBtnText: {
    fontSize: 16,
    fontFamily: 'Black',
    color: 'white'
  },
  modelContent: {
    padding: wp('5%'),
  },
  modelContentImg: {
    width: wp('90%'),
    height: hp('40%'),
    resizeMode: 'cover',
    borderRadius: 10
  },
  modelContenth1: {
    fontSize: 20,
    fontFamily: 'Bold',
  },
  modelContentText: {
    fontSize: 16,
    fontFamily: 'Regular',
  }
});
