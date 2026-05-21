import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Stack } from "expo-router";
import * as React from "react";
import HomeScreen from "./react-nav/HomeScreen";
import ProfileScreen from "./react-nav/ProfileScreen";

const StackNavigator = createNativeStackNavigator();
const IS_EXPO_ROUTER: boolean = true; // Set this flag to true to use Expo Router

export default function RootLayout() {
  return IS_EXPO_ROUTER ? <ExpoRoute /> : <ReactNavigationRoute />;
}

function ReactNavigationRoute() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen name="index" component={HomeScreen} />
      <StackNavigator.Screen name="profile" component={ProfileScreen} />
    </StackNavigator.Navigator>
  );
}

function ExpoRoute() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
        }}
      />
      <Stack.Screen
        name="discount"
        options={{
          headerTitle: "Discount",
        }}
      />
      <Stack.Screen
        name="todos"
        options={{
          headerTitle: "Todos",
        }}
      />
    </Stack>
  );
}
