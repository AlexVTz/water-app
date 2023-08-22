import { Dimensions, StyleSheet, Text, View } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

const MyProgressChart = ({ progress }) => {
  const [data, setData] = useState([0]);

  useEffect(() => {
    if (progress > 0) {
      const newData = [];
      newData.push(progress);
      setData(newData);
    }
  }, [progress]);

  return (
    <>
      <View style={styles.goalContainer}>
        <Ionicons name="md-trophy" size={100} color="#3083dc" />
        <Text style={styles.goalContainer.title}>Goal: 3000 ml</Text>
      </View>
      <Text style={styles.header}>Today's Progress</Text>
      <ProgressChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={{
          backgroundColor: "white",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "white",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(48, 131, 220, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "column",
    alignItems: "center",
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    textAlign: "center",
    padding: 10,
  },
  header: {
    textAlign: "center",
    fontSize: 18,
    padding: 16,
    marginTop: 25,
  },
});

export default MyProgressChart;
