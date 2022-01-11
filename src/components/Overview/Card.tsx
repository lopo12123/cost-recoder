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
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    title: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'cursive',
    },
    detail: {
        marginLeft: 10,
        fontSize: 14,
        fontFamily: 'cursive',
    }
})

const Card = (props: { title: string, detail?: string, icon?: JSX.Element, onClick?: Function }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => { props.onClick ? props.onClick() : null }} >
            {props.icon}
            <View>
                <Text style={styles.title}>
                    {props.title}
                </Text>
                <Text style={styles.detail}>
                    {props.detail}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;
