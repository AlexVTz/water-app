import { FlatList, StyleSheet, View, Divider, Alert, Text } from "react-native";
import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";

const selectWaterContainer = (name) => {
  console.log("wa", name);
  Alert.alert("Confirm Drink", `Are you sure you drank ${name}?`, [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};

const GLASSES = [
  {
    icon: (
      <MaterialCommunityIcons
        name="bottle-wine-outline"
        size={50}
        color="black"
        onPress={() => selectWaterContainer("Bottle (500ml)")}
      />
    ),
    name: "Bottle (500ml)",
    index: 1,
  },
  {
    icon: (
      <SimpleLineIcons
        name="cup"
        size={40}
        color="black"
        onPress={() => selectWaterContainer("Tea (300ml)")}
      />
    ),
    name: "Tea (300ml)",
    index: 2,
  },
  {
    icon: (
      <Feather
        name="coffee"
        size={40}
        color="black"
        onPress={() => selectWaterContainer("Coffe (200ml)")}
      />
    ),
    name: "Coffe (200ml)",
    index: 3,
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="glass-pint-outline"
        size={50}
        color="black"
        onPress={() => selectWaterContainer("Glass (400ml)")}
      />
    ),
    name: "Glass (400ml)",
    index: 4,
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="glass-mug"
        size={50}
        color="black"
        onPress={() => selectWaterContainer("Big Jar (1000ml)")}
      />
    ),
    name: "Big Jar (1000ml)",
    index: 5,
  },
];

export default function FlatListComponent() {
  return (
    <View style={styles.container}>
      <FlatList
        data={GLASSES}
        ItemSeparatorComponent={Divider}
        horizontal={true}
        contentContainerStyle={styles.listWrap}
        renderItem={({ item }) => (
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
