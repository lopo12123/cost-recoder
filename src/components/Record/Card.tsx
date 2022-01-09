import React from "react";

import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import MyIcon from "../../assets/Fonts/MyIcon";

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
    text: {
        marginLeft: 10,
        fontSize: 18,
        fontFamily: 'cursive',
    },
    moneyIn: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 70,
    },
    moneyOut: {
        position: 'absolute',
        width: 30,
        height: 30,
        right: 20,
    }
})

const MoneyOut = () => { return <MyIcon name="money-out" size={30} color="green" /> }
const MoneyIn = () => { return <MyIcon name="money-in" size={30} color="red" /> }

const Card = (props: { title: string, icon?: JSX.Element, onClick?: Function }) => {
    return (
        <View style={styles.container}>
            {props.icon}
            <Text style={styles.text}>{props.title}</Text>

            <TouchableOpacity style={styles.moneyIn}
                              onPress={() => {
                                  props.onClick ? props.onClick('IN') : null
                              }}>
                <MoneyIn />
            </TouchableOpacity>

            <TouchableOpacity style={styles.moneyOut}
                              onPress={() => {
                                  props.onClick ? props.onClick('OUT') : null
                              }}>
                <MoneyOut />
            </TouchableOpacity>

        </View>
    )
}

export default Card;
