import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomePage from "./src/pages/home-page";
import DetailPage from "./src/pages/detail-page";


const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomePage}></Stack.Screen>
                <Stack.Screen name="detail" component={DetailPage}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}