import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

import SettingsHome from "../components/Settings/SettingsHome";
import License from "../components/Settings/License";

const SettingTab = createNativeStackNavigator();

const Settings = () => {
    return (
        <SettingTab.Navigator initialRouteName="SettingsHome">
            <SettingTab.Screen name="SettingsHome" component={SettingsHome} options={{ headerShown: false }} />
            <SettingTab.Screen name="License" component={License} />
        </SettingTab.Navigator>
    )
}

export default Settings;
