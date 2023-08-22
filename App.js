import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { PaperProvider } from 'react-native-paper';

import HomeScreen  from './screens/HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const DefaultTheme = {
  "colors": {
    "onSecondaryContainer": "transparent",
    "notification": "red"
  }
} 

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default function App() {

  return (
    <PaperProvider theme={DefaultTheme}>
      <NavigationContainer>
        <Tab.Navigator 
          initialRouteName="Home"
          activeColor="white"
          inactiveColor="white"
          shifting={true}
          barStyle={{ backgroundColor: '#3083dc' }}
          >
          <Tab.Screen name="Home" component={HomeScreen} 
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <Ionicons name="water" color={color} size={26} />
              ),
            }}/>
          <Tab.Screen name="History" component={DetailsScreen} 
            options={{
              tabBarLabel: 'History',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="history" color={color} borderRadius={0} size={26} />
              )
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
