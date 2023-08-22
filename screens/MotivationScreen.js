import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import Header from "../components/header";

const MotivationScreen = () => {
  const animation = useRef(null);

  return (
    <View style={styles.animationContainer}>
      <Header title={"Always stay hidratated!"} />
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require("../assets/glass.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});

export default MotivationScreen;
