import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";

const rootStack = createNativeStackNavigator();
export default function RootStack() {
  return (
    <NavigationContainer>
      <rootStack.Navigator screenOptions={{ headerShown: false }}>
        <rootStack.Screen name="LoginScreen" component={LoginScreen} />
        <rootStack.Screen name="HomeScreen" component={HomeScreen} />
      </rootStack.Navigator>
    </NavigationContainer>
  );
}
