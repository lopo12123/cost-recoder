import React from "react";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

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
        fontWeight: 'bold',
        fontFamily: 'cursive',
    }
})

const Card = (props: { title: string, icon?: JSX.Element, onClick?: Function }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { props.onClick ? props.onClick() : null }} >
            {props.icon}
            <Text style={styles.text}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

export default Card;
