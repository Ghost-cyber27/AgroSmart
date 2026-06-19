import { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/auth/welcome";
import Login from "../screens/auth/login";
import Signup from "../screens/auth/signup";
import ForgotPassword from "../screens/auth/forgotPassword";
import CropDetails from "../screens/support_screens/cropDetails";
import { UserTabs } from "./UserTabs";
import { AuthContext } from "../services/AuthContext";

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const Auth = ({ install }) => {
  if (install) {
    return (
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Signup" component={Signup} />
        <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
      </AuthStack.Navigator>
    );
  }

  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

const App = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Main"
        component={UserTabs}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="CropDetails"
        component={CropDetails}
        options={{ headerShown: true, headerTitle: "Crop Details" }}
      />
    </AppStack.Navigator>
  );
};

export const RootNavigator = () => {
  const { user, install } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user ? <App /> : <Auth install={install} />}
    </NavigationContainer>
  );
};
