import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: 60,
        marginVertical: 5,
        marginHorizontal: 0,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 5,
    }
})

const DateSwitch = (props: { type: 'YEAR' | 'MONTH' | 'WEEK' }) => {

    return (
        <View style={styles.container}>
            <Text>{props.type}</Text>
        </View>
    )
}

export default DateSwitch;
