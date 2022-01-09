import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        marginLeft: 10,
        fontSize: 18,
        fontFamily: 'cursive',
    }
})

const Card = (props: { title: string, icon?: JSX.Element, onClickIn?: Function, onClickOut?: Function }) => {
    return (
        <View style={styles.container}>
            {props.icon}
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    )
}

export default Card;
