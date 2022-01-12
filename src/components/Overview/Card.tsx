import React from "react";

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: 100,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        elevation: 5,
        display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: 'cursive'
    },
})

const Card = (props: { title: string, detail?: string, icon?: JSX.Element, onClick?: Function }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { props.onClick ? props.onClick() : null }} >
            {props.icon}
            <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Card;
