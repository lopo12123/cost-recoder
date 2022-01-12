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
        justifyContent: 'space-evenly'
    },
    calendar: {
        width: '100%',
        flex: 1,
    },
    table: {
        position: 'relative',
        width: '100%',
        height: 80,
        marginTop: 10,
    },
    total: {
        position: 'absolute',
        width: '50%',
        height: 80,
        top: 0,
        left: 0,
        backgroundColor: '#ffffff',
        borderRightWidth: 1,
        borderColor: '#00000011',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    in: {
        position: 'absolute',
        width: '50%',
        height: 40,
        top: 0,
        right: 0,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderColor: '#00000011',
        borderTopRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    out: {
        position: 'absolute',
        width: '50%',
        height: 40,
        top: 40,
        right: 0,
        backgroundColor: '#ffffff',
        borderBottomRightRadius: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    txt: {
        fontFamily: 'cursive'
    },
    buttonGroup: {
        width: '100%',
        height: 50,
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

const BarIcon = () => { return <AweIcon name="bar-chart" size={25} color="#00000099" /> }
const LineIcon = () => { return <AweIcon name="line-chart" size={25} color="#00000066" /> }
const PieIcon = () => { return <AweIcon name="pie-chart" size={25} color="#00000033" /> }

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
                <Calendar markedDates={{ [highlightDay]: { selected: true, selectedColor: '#00000066' } }}
                          hideDayNames={true} showWeekNumbers={false}
                          theme={{
                              todayTextColor: '#000000cc',
                              dayTextColor: '#00000099',
                              textDisabledColor: '#00000033',
                              textMonthFontFamily: 'cursive',
                              textDayFontFamily: 'cursive',
                              arrowColor: '#00000066'
                          }}
                          onDayPress={(day) => {
                              setHighlight(day.dateString)
                              // 更新下方表格数据
                          }}/>
            </View>

            <View style={styles.table}>
                <View style={styles.total}>
                    <Text style={styles.txt}>total</Text>
                    <Text style={styles.txt}>1000</Text>
                </View>
                <View style={styles.in}>
                    <Text style={styles.txt}>in</Text>
                    <Text style={styles.txt}>500</Text>
                </View>
                <View style={styles.out}>
                    <Text style={styles.txt}>out</Text>
                    <Text style={styles.txt}>500</Text>
                </View>
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
