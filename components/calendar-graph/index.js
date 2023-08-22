import { ContributionGraph } from "react-native-chart-kit";

import { Text, Dimensions, StyleSheet, View } from "react-native";

const CalendarGraph = () => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.header}>Contribution Graph</Text>
      <ContributionGraph
        values={[
          { date: "2023-07-02", count: 1 },
          { date: "2023-07-03", count: 2 },
          { date: "2023-07-04", count: 3 },
          { date: "2023-07-05", count: 4 },
          { date: "2023-07-06", count: 5 },
          { date: "2023-07-30", count: 2 },
          { date: "2023-07-31", count: 3 },
          { date: "2023-08-01", count: 2 },
          { date: "2023-09-02", count: 4 },
          { date: "2023-08-05", count: 2 },
          { date: "2023-09-30", count: 4 },
          { date: "2023-08-30", count: 4 },
        ]}
        endDate={new Date("2023-09-30")}
        numDays={110}
        width={Dimensions.get("window").width - 10}
        height={220}
        style={{ marginLeft: 5 }}
        chartConfig={{
          backgroundColor: "#1cc910",
          backgroundGradientFrom: "white",
          backgroundGradientTo: "#efefef",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(48, 131, 220, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
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

export default CalendarGraph;
