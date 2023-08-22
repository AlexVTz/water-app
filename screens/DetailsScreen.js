import { FlatList, StyleSheet, Text, View } from "react-native";
import CalendarGraph from "../components/calendar-graph";
import { GLASSES } from "../constants";
import { Divider } from "react-native-paper";
import Header from "../components/header";

const DetailsScreen = ({ history }) => {
  return (
    <View>
      <CalendarGraph />
      <Header title={"Containers history"} />
      <View style={styles.container}>
        <FlatList
          data={history}
          ItemSeparatorComponent={Divider}
          contentContainerStyle={styles.listWrap}
          renderItem={({ item }) => {
            const element = GLASSES.find((element) => element.name === item);
            return (
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                {element.icon}
                <Text style={{ textAlignVertical: "center" }}>
                  {element.name}
                </Text>
              </View>
            );
          }}
          keyExtractor={(item, index) => item + "ss" + index}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingLeft: 5,
    paddingRight: 5,
    height: 300,
    width: "90%",
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default DetailsScreen;
