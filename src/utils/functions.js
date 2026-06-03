import * as Location from "expo-location";

const fetchWeatherByLocation = async () => {
  try {
    // Request permission
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permission to access location was denied");
      setLoading(false);
      return;
    }

    // Get current location
    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    const { latitude, longitude } = location.coords;

    const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${latitude},${longitude}`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    // Example:
    // setWeather(data);
  } catch (error) {
    console.error("Error fetching weather:", error);
    setLoading(false);
    alert("Unable to get location");
  }
};

export const truncate = (text) => {
  return text.length > 6 ? text.substring(0, 20) + "..." : text;
};
