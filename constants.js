import {
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
} from "@expo/vector-icons";

export const GLASSES = [
  {
    icon: (
      <MaterialCommunityIcons
        name="bottle-wine-outline"
        size={50}
        color="black"
      />
    ),
    name: "Bottle (500ml)",
    value: 500,
    index: 1,
  },
  {
    icon: <SimpleLineIcons name="cup" size={40} color="black" />,
    name: "Tea (300ml)",
    value: 300,
    index: 2,
  },
  {
    icon: <Feather name="coffee" size={40} color="black" />,
    name: "Coffe (200ml)",
    value: 200,
    index: 3,
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="glass-pint-outline"
        size={50}
        color="black"
      />
    ),
    name: "Glass (400ml)",
    value: 400,
    index: 4,
  },
  {
    icon: <MaterialCommunityIcons name="glass-mug" size={50} color="black" />,
    name: "Big Jar (1000ml)",
    value: 1000,
    index: 5,
  },
];
