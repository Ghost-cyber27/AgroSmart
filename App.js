import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { RootNavigator } from "./src/navigation/RootNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
  useEffect(() => {
    const loadingFont = async () => {
      await Font.loadAsync({
        Black: require("./assets/font/Playfair_Display/static/PlayfairDisplay-Black.ttf"),
        Bold: require("./assets/font/Playfair_Display/static/PlayfairDisplay-Bold.ttf"),
        Regular: require("./assets/font/Playfair_Display/static/PlayfairDisplay-Regular.ttf"),
        Italic: require("./assets/font/Playfair_Display/static/PlayfairDisplay-Italic.ttf"),
      });
      await SplashScreen.hideAsync();
    };

    loadingFont();
  }, []);
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
