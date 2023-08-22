import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { PaperProvider } from "react-native-paper";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import MotivationScreen from "./screens/MotivationScreen";
import { useEffect, useState } from "react";
import { requestPermissionsAsync } from "./notifications";

const Tab = createMaterialBottomTabNavigator();

const DefaultTheme = {
  colors: {
    onSecondaryContainer: "transparent",
    notification: "red",
  },
};

export default function App() {
  const [drankHistory, setDrankHistory] = useState([]);
  const DRANK_HISTORY = "DRANK_HISTORY";

  useEffect(() => {
    requestPermissionsAsync();
    (async function () {
      let value = await AsyncStorage.getItem(DRANK_HISTORY);
      value = value ? value.split(",") : "";
      setDrankHistory(value);
    })();
  }, []);

  const pushContainer = (name) => {
    setDrankHistory((prev) => [...prev, name]);
  };

  useEffect(() => {
    (async function () {
      console.log("drank", drankHistory?.toString());
      await AsyncStorage.setItem(DRANK_HISTORY, drankHistory?.toString());
    })();
  }, [drankHistory]);

  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          activeColor="white"
          inactiveColor="white"
          shifting={true}
          barStyle={{ backgroundColor: "#3083dc" }}
        >
          <Tab.Screen
            name="Home"
            children={() => <HomeScreen pushToHistory={pushContainer} />}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color }) => (
                <Ionicons name="water" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="History"
            children={() => <DetailsScreen history={drankHistory} />}
            options={{
              tabBarLabel: "History",
              tabBarIcon: ({ color }) => (
                <MaterialIcons
                  name="history"
                  color={color}
                  borderRadius={0}
                  size={26}
                />
              ),
            }}
          />

          <Tab.Screen
            name="Motivation"
            component={MotivationScreen}
            options={{
              tabBarLabel: "Motivation",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="weight-lifter"
                  size={26}
                  color={color}
                  borderRadius={0}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
