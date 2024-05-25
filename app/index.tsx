import { Text, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from "../components/App.js";
import GuessedWordsListPage from "../components/GuessedWordsListPage.js";
import AboutPage from "../components/AboutPage.js";
import FeedbackForm from "../components/FeedbackForm.js";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={App} options={{ headerShown: false }}/>
        <Stack.Screen name="GuessedWordsListPage" component={GuessedWordsListPage}options={{ headerShown: false }}/>
        <Stack.Screen name="AboutPage" component={AboutPage}options={{ headerShown: false }}/>
        <Stack.Screen name="FeedbackForm" component={FeedbackForm}options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
