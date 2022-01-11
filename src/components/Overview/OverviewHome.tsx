import React from "react";

import { StyleSheet, View } from "react-native";

import BarOverview from "./BarOverview";
import LineOverview from "./LineOverview";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    chart: {

    }
})

const OverviewHome = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chart}>

            </View>
            {/*<BarOverview />*/}
            {/*<LineOverview />*/}
        </View>
    )
}

export default OverviewHome;
