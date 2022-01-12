import React, { useState } from "react";

import { StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";

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
    calendar: {
        width: '100%',
        flex: 1,
    },
    table: {
        width: '100%',
        height: 100,
    },
    buttonGroup: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

const BarIcon = () => { return <AweIcon name="bar-chart" size={25} color="#f56c6c" /> }
const LineIcon = () => { return <AweIcon name="line-chart" size={25} color="#67c23a" /> }
const PieIcon = () => { return <AweIcon name="pie-chart" size={25} color="#e6a23c" /> }

const OverviewHome = ({navigation}: any) => {
    const date = new Date()
    const todayString = `${
        date.getFullYear()
    }-${
        (date.getMonth()+1) < 10 ? '0'+ (date.getMonth()+1) : (date.getMonth()+1)
    }-${
        date.getDate() < 10 ? '0'+date.getDate() : date.getDate()
    }`
    const [highlightDay, setHighlight] = useState(todayString)

    return (
        <View style={styles.container}>
            <View style={styles.calendar}>
                <Calendar markedDates={{ [highlightDay]: { selected: true } }}
                          hideDayNames={true} showWeekNumbers={false}
                          onDayPress={(day) => {
                              setHighlight(day.dateString)
                              // 更新下方表格数据
                          }}/>
            </View>

            <View style={styles.table}>
                <Text>222</Text>
            </View>

            <View style={styles.buttonGroup}>
                <Card title="Bar View" detail="The specific number of each account"
                      icon={<BarIcon/>} onClick={() => {
                    navigation.navigate('BarOverview')
                }} />

                <Card title="Line View" detail="Changes in each account"
                      icon={<LineIcon/>} onClick={() => {
                    navigation.navigate('LineOverview')
                }} />

                <Card title="Pie View" detail="The proportion of each account"
                      icon={<PieIcon/>} onClick={() => {
                    navigation.navigate('PieOverview')
                }} />
            </View>
        </View>
    )
}

export default OverviewHome;
