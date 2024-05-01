import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { theme } from "../theme";
import { RestaurantNavigation } from "./restaurants.navigation";
import { MapScreen } from "../../features/map/screens/map.screen";
import { FavoritesContextProvider } from "../../services/favorites/favouries.context";
import { LocationProvider } from "../../services/locations/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurant.context";
import { SettingNavigation } from "./setting.navigation";

const Tab = createBottomTabNavigator();

const TAB_OPTIONS = {
  Restaurants: ["restaurant", "restaurant-outline"],
  Map: ["map", "map-outline"],
  Settings: ["settings", "settings-outline"],
};

const creatTabIcons = (name, outline) => ({ focused, color, size }) => {
  return <Ionicons name={focused ? name : outline} size={size} color={color} />;
};

const createTabOptions = ({ route }) => {
  const [IconName, IconOutlineName] = TAB_OPTIONS[route.name];
  return {
    tabBarIcon: creatTabIcons(IconName, IconOutlineName),
    tabBarActiveTintColor: theme.colors.brand.primary,
    headerShown: false,
  };
};

export const AppNavigation = () => {
  return (
    <FavoritesContextProvider>
      <LocationProvider>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator screenOptions={createTabOptions}>
              <Tab.Screen name="Restaurants" component={RestaurantNavigation} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={SettingNavigation} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </LocationProvider>
    </FavoritesContextProvider>
  );
};
