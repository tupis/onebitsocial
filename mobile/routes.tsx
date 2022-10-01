import { useColorScheme } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./src/screens/Feed";
import Empregos from "./src/screens/Empregos";
import Perfil from "./src/screens/Perfil";

export default function Routes() {
  const Tab = createBottomTabNavigator();

  const themePreferenceScheme = useColorScheme();

  // type Theme = {
  //   dark: boolean;
  //   colors: {
  //     primary: string;
  //     background: string;
  //     card: string;
  //     text: string;
  //     border: string;
  //     notification: string;
  //   };
  // };

  const LightThemePreference = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "rgb(255, 45, 85)",
    },
  };

  const DarkThemePreference = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "rgb(255, 45, 85)",
      background: "#fff",
    },
  };

  const OneBitSocial = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "";

            if (route.name === "Feed") {
              iconName = focused ? "home" : "home-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Empregos") {
              iconName = focused ? "briefcase" : "briefcase-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Perfil") {
              iconName = focused ? "person" : "person-outline";
              size = focused ? size + 8 : size + 2;
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{ headerTitleAlign: "center" }}
        />
        <Tab.Screen
          name="Empregos"
          component={Empregos}
          options={{ headerTitleAlign: "center" }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerTitleAlign: "center" }}
        />
      </Tab.Navigator>
    );
  };

  return (
    <>
      <NavigationContainer
        theme={
          themePreferenceScheme === "dark"
            ? DarkThemePreference
            : LightThemePreference
        }
      >
        <OneBitSocial />
      </NavigationContainer>
    </>
  );
}
