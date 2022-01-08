import React from "react";
import { StyleSheet, Text, View } from "react-native";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    chart: {
        width: '70%',
        height: '60%',
        backgroundColor: '#cccccc',
        borderRadius: 5,
        display: 'flex',  // todo
        alignItems: 'center',
        justifyContent: 'center'
    },
    operate: {
        width: '70%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    inBtn: {

    },
    outBtn: {

    }
})

const Record = () => {
    return (
        <View style={styles.container}>
            <View style={styles.chart}>
                <Text>Here will show last week`s record</Text>
            </View>
            <View style={styles.operate}>
                <Text>IN</Text>
                <Text>OUT</Text>
            </View>
        </View>
    )
}

export default Record;
