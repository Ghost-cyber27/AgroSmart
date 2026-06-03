import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tabs/home";
import Detection from "../screens/tabs/detection";
import Profile from "../screens/tabs/profile";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const UserTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="home" size={24} />,
        }}
      />
      <Tab.Screen
        name="Detection"
        component={Detection}
        options={{
          tabBarIcon: () => <Ionicons name="search" size={24} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: () => <Ionicons name="person" size={24} />,
        }}
      />
    </Tab.Navigator>
  );
};
