import React from "react";

import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const Overview = () => {
    return (
        <View style={styles.container}>
            <Text>得加钱</Text>
        </View>
    )
}

export default Overview;
