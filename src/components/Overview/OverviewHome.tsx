import React from "react";

import { StyleSheet, Text, View } from "react-native";

// @ts-ignore
import AweIcon from 'react-native-vector-icons/FontAwesome'

import Card from "./Card";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#eeeeee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
})

const BarIcon = () => { return <AweIcon name="bar-chart" size={30} color="#f56c6c" /> }
const LineIcon = () => { return <AweIcon name="line-chart" size={30} color="#67c23a" /> }
const PieIcon = () => { return <AweIcon name="pie-chart" size={30} color="#e6a23c" /> }

const OverviewHome = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Card title="Bar Overview" detail="The specific number of each account"
                  icon={<BarIcon/>} onClick={() => {
                      navigation.navigate('BarOverview')
            }} />

            <Card title="Line Overview" detail="Changes in each account"
                  icon={<LineIcon/>} onClick={() => {
                navigation.navigate('LineOverview')
            }} />

            <Card title="Pie Overview" detail="The proportion of each account"
                  icon={<PieIcon/>} onClick={() => {
                navigation.navigate('PieOverview')
            }} />
        </View>
    )
}

export default OverviewHome;
