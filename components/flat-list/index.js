import {
  FlatList,
  StyleSheet,
  View,
  Divider,
  Alert,
  Text,
  TouchableHighlight,
} from "react-native";

import { GLASSES } from "../../constants";

export default function FlatListComponent({ updateDailyGoal }) {
  const selectWaterContainer = (name, value) => {
    Alert.alert("Confirm Drink", `Are you sure you drank ${name}?`, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => updateDailyGoal(value, name) },
    ]);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={GLASSES}
        ItemSeparatorComponent={Divider}
        horizontal={true}
        contentContainerStyle={styles.listWrap}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={"transparent"}
            onPress={() => selectWaterContainer(item.name, item.value)}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                padding: 10,
              }}
            >
              {item.icon}
              <Text style={{ textAlignVertical: "center" }}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
        keyExtractor={(item) => item.index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingLeft: 5,
    paddingRight: 5,
    height: 120,
    width: "90%",
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  logo: {
    height: 128,
    width: 128,
  },
  listWrap: {
    justifyContent: "center",
  },
});
