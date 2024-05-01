import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";
import { CameraScreen } from "../../features/settings/screens/camera.screen";

const SettingStack = createStackNavigator();

export const SettingNavigation = ({ route, navigation }) => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: true,
        headerMode: "screen",
      }}
    >
      <SettingStack.Screen
        options={{ header: () => null }}
        name="MySettings"
        component={SettingsScreen}
      />
      <SettingStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingStack.Screen name="camera" component={CameraScreen} />
    </SettingStack.Navigator>
  );
};
