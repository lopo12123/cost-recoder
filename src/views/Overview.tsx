import React from "react";

import {createNativeStackNavigator} from "@react-navigation/native-stack";

import OverviewHome from "../components/Overview/OverviewHome";
import BarOverview from "../components/Overview/BarOverview";
import LineOverview from "../components/Overview/LineOverview";

const OverviewTab = createNativeStackNavigator();

const Overview = () => {
    return (
        <OverviewTab.Navigator initialRouteName="OverviewHome">
            <OverviewTab.Screen name="OverviewHome" component={OverviewHome} options={{ headerShown: false }} />
            <OverviewTab.Screen name="BarOverview" component={BarOverview} />
            <OverviewTab.Screen name="LineOverview" component={LineOverview} />
        </OverviewTab.Navigator>
    )
}

export default Overview;
