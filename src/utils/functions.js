import * as Location from "expo-location";

export const fetchWeatherByLocation = async () => {
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
