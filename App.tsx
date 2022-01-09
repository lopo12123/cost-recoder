import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// @ts-ignore
import AntIcon from 'react-native-vector-icons/AntDesign'
// @ts-ignore
import AweIcon from 'react-native-vector-icons/FontAwesome'

import Record from "./src/views/Record";
import Overview from "./src/views/Overview";
import Settings from './src/views/Settings';

const Tab = createBottomTabNavigator();

const RecordIcon = ({ focused }: { focused: boolean }) => { return <AntIcon name="plus" size={20} color={focused ? "#4f8ef7" : "#999999"} /> }
const OverviewIcon = ({ focused }: { focused: boolean }) => { return <AweIcon name="line-chart" size={20} color={focused ? "#4f8ef7" : "#999999"} /> }
const SettingIcon = ({ focused }: { focused: boolean }) => { return <AntIcon name="setting" size={20} color={focused ? "#4f8ef7" : "#999999"} /> }

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Record" component={Record} options={{ tabBarIcon: RecordIcon }} />
                <Tab.Screen name="Overview" component={Overview} options={{ tabBarIcon: OverviewIcon }} />
                <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: SettingIcon }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
