import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import FlatListComponent from "../components/flat-list";
import Header from "../components/header";
import MyProgressChart from "../components/progress-graph";

export default function HomeScreen({ navigation }) {
  const animation = useRef(null);
  var arr = [];

  useEffect(() => {
    animation.current?.reset();
    setTimeout(() => {
      animation.current?.play();
    }, 100);
  }, []);

  return (
    <View style={styles.animationContainer}>
      <MyProgressChart />
      <Header title={"Select your water container"} />
      <View>
        <FlatListComponent />
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
