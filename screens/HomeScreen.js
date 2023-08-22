import { StyleSheet, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import FlatListComponent from "../components/flat-list";
import Header from "../components/header";
import MyProgressChart from "../components/progress-graph";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen({ pushToHistory }) {
  const [dailyDrankWater, setDailyDrankWater] = useState(0);

  const DRANK_WATER = "DRANK_WATER";

  const DAILY_GOAL = 3000;

  useEffect(() => {
    (async function () {
      const value = await AsyncStorage.getItem(DRANK_WATER);
      console.log("val", value);
      setDailyDrankWater(value);
    })();
  }, []);

  useEffect(() => {
    (async function () {
      await AsyncStorage.setItem(DRANK_WATER, dailyDrankWater.toString());
    })();
  }, [dailyDrankWater]);

  const updateDailyDrankWater = async (value, name) => {
    console.log("water", value, name);
    setDailyDrankWater((prevValue) => Number(prevValue) + Number(value));
    pushToHistory(name);
  };

  const RoundDailyGoal = () => {
    let total = Math.round((100 / DAILY_GOAL) * dailyDrankWater);
    total = total / 100;
    if (total >= 1) {
      return 1;
    }
    return total;
  };

  return (
    <View style={styles.animationContainer}>
      <MyProgressChart progress={RoundDailyGoal()} />
      <Header title={"Select your water container"} />
      <View>
        <FlatListComponent updateDailyGoal={updateDailyDrankWater} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

/*   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      lottieView: {
        width: 200,
        height: 200,
      },
      buttonContainer: {
        marginTop: 20
      }
    },
  }); */
