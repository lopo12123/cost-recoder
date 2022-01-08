import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/views/Home";

import Record from "./src/views/Record";

import License from "./src/views/License";

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            {/* change the initialRouteName for better develop */}
            <Stack.Navigator initialRouteName="Record">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Record" component={Record} />
                <Stack.Screen name="License" component={License} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
