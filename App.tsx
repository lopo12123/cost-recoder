import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// @ts-ignore
import Icon from 'react-native-vector-icons/AntDesign'  // @ts-ignore

import Record from "./src/views/Record";
import OverView from "./src/views/OverView";
import License from "./src/views/License";

const Tab = createBottomTabNavigator();

const RecordIcon = () => {
    return (
        <Icon name="rocket" size={20} color="#4f8ef7" />
    )
}

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                           screenOptions={{
                               headerShown: false,
                               tabBarIcon: () => {
                                   return <Icon name="stepforward" size={20} color="red" />
                               }
                           }}>
                <Tab.Screen name="Record" component={Record}/>
                <Tab.Screen name="OverView" component={OverView} />
                <Tab.Screen name="License" component={License} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
