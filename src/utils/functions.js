import * as Location from "expo-location";
import { db } from "../services/firebaseConfig";
import { getDocs, collection, updateDoc, deleteDoc, doc } from "firebase/firestore";

export const fetchWeatherByLocation = async () => {
  try {
    // Request permission
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    // Get current location
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    const { latitude, longitude } = location.coords;
    console.log(
      `latitude: ${latitude}, longitude: ${longitude} and api key: ${process.env.EXPO_PUBLIC_WEATHER_API}`,
    );

    const url = `https://api.weatherapi.com/v1/forecast.json?key=${process.env.EXPO_PUBLIC_WEATHER_API}&q=${latitude},${longitude}&days=5`;

    const response = await fetch(url);
    const data = await response.json();

    console.log("weather forecast data: ", data.forecast);
    console.log("forecast day data: ", data.forecast.forecastday);
    return data;
    // Example:
    // setWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    alert("Unable to get location");
  }
};

export const truncate = (text) => {
  return text.length > 6 ? text.substring(0, 20) + "..." : text;
};

export const shorten = (text) => {
  return text.length > 1 ? text.substring(0, 1) + "" : text;
};

// recommendation logic
export const getRecommendations = (cropsData, userPreferences) => {
  return cropsData.map(crop => {
    let score = 0;

    // Check if criteria match
    if (crop.soil_type.includes(userPreferences.soil)) score += 2;
    if (crop.season === userPreferences.season) score += 2;
    if (crop.climate === userPreferences.climate) score += 1;
    if (crop.water_requirement === userPreferences.water) score += 1;

    return { ...crop, score };
  })
  .filter(crop => crop.score > 0) // Remove crops with no matches
  .sort((a, b) => b.score - a.score); // Highest scores first
};


// Google Vision
// import * as ImagePicker from 'expo-image-picker';
// import * as FileSystem from 'expo-file-system';

// // Replace with your actual Google Cloud API Key
// const GOOGLE_CLOUD_VISION_API_KEY = "YOUR_RESTRICTED_API_KEY";

// const analyzeCropDirect = async () => {
//   // 1. Pick Image
//   let result = await ImagePicker.launchCameraAsync({
//     base64: true,
//     quality: 0.5, // Lower quality helps keep the base64 string size manageable
//   });

//   if (!result.canceled) {
//     const base64Image = result.assets[0].base64;

//     // 2. Call Google Vision API directly
//     const apiUrl = `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_CLOUD_VISION_API_KEY}`;
    
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         requests: [{
//           image: { content: base64Image },
//           features: [{ type: 'LABEL_DETECTION', maxResults: 5 }]
//         }]
//       })
//     });

//     const resultData = await response.json();
//     const labels = resultData.responses[0].labelAnnotations.map(l => l.description);
    
//     console.log("Detected labels:", labels);
//     // 3. Match labels against your crops JSON as shown previously
//   }
// };
