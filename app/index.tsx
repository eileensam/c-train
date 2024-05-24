import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from "../components/App.js";
import GuessedWordsListPage from "../components/GuessedWordsListPage.js";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} />
        <Stack.Screen name="GuessedWordsListPage" component={GuessedWordsListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
