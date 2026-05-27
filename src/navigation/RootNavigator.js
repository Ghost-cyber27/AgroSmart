import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Welcome from "../screens/auth/welcome";
import Login from "../screens/auth/login";
import Signup from "../screens/auth/signup";
import ForgotPassword from "../screens/auth/forgotPassword";

const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
    </AuthStack.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Auth />
    </NavigationContainer>
  );
};
