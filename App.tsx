import React, { useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// @ts-ignore
import AweIcon from 'react-native-vector-icons/FontAwesome'

import Record from "./src/views/Record";
import Overview from "./src/views/Overview";
import Settings from './src/views/Settings';

import { checkStores } from "./src/scripts/store";
import { ToastAndroid } from "react-native";

const Tab = createBottomTabNavigator();

const RecordIcon = ({ focused }: { focused: boolean }) => { return <AweIcon name="money" size={20} color={focused ? "#00000099" : "#00000066"} /> }
const OverviewIcon = ({ focused }: { focused: boolean }) => { return <AweIcon name="bar-chart" size={20} color={focused ? "#00000099" : "#00000066"} /> }
const SettingIcon = ({ focused }: { focused: boolean }) => { return <AweIcon name="gears" size={20} color={focused ? "#00000099" : "#00000066"} /> }

const App = () => {
    // create the storage if not exist
    // useEffect(() => {
    //     checkStores()
    //         .then((result) => {
    //             if(!result) ToastAndroid.show('Error initializing database', ToastAndroid.SHORT)
    //             else ToastAndroid.show('Successfully initialized the database', ToastAndroid.SHORT)
    //         })
    //         .catch((e) => {
    //             ToastAndroid.show('Error initializing database', ToastAndroid.SHORT)
    //         })
    // }, [])

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Tab.Screen name="Record" component={Record} options={{ tabBarIcon: RecordIcon, tabBarActiveTintColor: '#00000099', tabBarInactiveTintColor: '#00000066' }} />
                <Tab.Screen name="Overview" component={Overview} options={{ tabBarIcon: OverviewIcon, tabBarActiveTintColor: '#00000099', tabBarInactiveTintColor: '#00000066' }} />
                <Tab.Screen name="Settings" component={Settings} options={{ tabBarIcon: SettingIcon, tabBarActiveTintColor: '#00000099', tabBarInactiveTintColor: '#00000066' }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;
