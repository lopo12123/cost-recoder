import React from "react";

import { StyleSheet, View } from "react-native";

import { VictoryBar, VictoryChart } from "victory-native";

import DateSwitch from "./DateSwitch";

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#eeeeee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    chart: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#cccccc'
    }
})

const BarOverview = () => {
    const option = {
        title: {
            text: 'ECharts demo'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    }

    return (
        <View style={styles.container}>
            <VictoryChart>
                <VictoryBar/>
            </VictoryChart>
            <DateSwitch type="MONTH" />
        </View>
    )
}

export default BarOverview;
