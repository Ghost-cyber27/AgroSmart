import Geolocation from "@react-native-community/geolocation";

const fetchWeatherByLocation = () => {
  try {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        // Pass coordinates as "lat,lon" in the q parameter
        const url = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${latitude},${longitude}`;

        fetch(url)
          .then((response) => {
            const data = response.json();
            return data;
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      },
      (error) => {
        console.log(error);
        setLoading(false);
        alert("Unable to get location");
      },
      { enableHighAccuracy: true },
    );
  } catch (error) {
    console.error("Error from trying: ", error);
  }
};
