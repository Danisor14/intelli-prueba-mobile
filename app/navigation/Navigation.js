import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Device from '../screens/Device';
import Hero from '../screens/Hero';
import { Icon } from 'react-native-elements'

export default function Navigation() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#67dabb",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
        <Tab.Screen
          name="hero"
          component={Hero}
          options={{ title: "Marvel Hero" }}
        />

        <Tab.Screen
          name="device"
          component={Device}
          options={{ title: "Devices" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route, color) => {
  let iconName;
  let iconType;
  switch (route.name) {
    case "device":
      iconName = "devices";
      iconType = "material-community";
      break;
    case "hero":
      iconName = "trophy";
      iconType = "material-community";
      break;
    default:
      break;
  }
  return <Icon type={iconType} name={iconName} size={22} color={color} />;
};
