import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    calendar: {
        width: '100%',
        flex: 1,
    },
    table: {
        width: '100%',
        height: 100,
    }
})

const CalendarView = () => {
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
                <Text>123</Text>
            </View>
        </View>
    )
}

export default CalendarView;
