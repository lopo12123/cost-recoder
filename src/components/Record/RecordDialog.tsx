import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
    StyleSheet,
    Text,
    TextInput, ToastAndroid,
    TouchableOpacity,
    View,
} from "react-native";


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 40,
        backgroundColor: '#efefef',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner: {
        width: '100%',
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 5,
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        marginVertical: 10,
        fontSize: 30,
        fontFamily: 'cursive',
        lineHeight: 36,
    },
    info: {
        marginVertical: 10,
        fontSize: 24,
        fontFamily: 'cursive',
        lineHeight: 36,
    },
    inputBox: {
        marginVertical: 10,
        borderColor: '#777777',
        borderBottomWidth: 1,
        fontFamily: 'cursive',
        fontSize: 20,
    },
    buttonGroup: {
        width: '100%',
        height: 40,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    customButton: {
        paddingHorizontal: 10,
        fontSize: 36,
        fontFamily: 'cursive',
        lineHeight: 40,
        textDecorationLine: 'underline'
    }
})

const CustomButton = (props: { title: string, onClick: Function }) => {
    return (
        <TouchableOpacity onPress={() => { props.onClick() }}>
            <Text style={styles.customButton}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const RecordDialog = (props: { title: 'Alipay' | 'WeChat' | 'Bank Card' | 'Cash in pocket', inout: 'IN' | 'OUT', toClose: Function }) => {
    const [value, setValue] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>{props.inout === 'IN' ? 'Income' : 'Expenditure'}</Text>
                <Text style={styles.info}>
                    There is a saying that if you buy, you earn, the more you buy, the more you earn, so how much do you earn today?
                </Text>

                <TextInput style={styles.inputBox}
                           keyboardType="numeric"
                           value={value}
                           onChangeText={(text) => { setValue(text) }}
                           placeholder={
                               "Enter the amount you " + (props.inout === 'IN' ? 'gain' : 'spent') + " here"
                           } />

                <View style={styles.buttonGroup}>
                    <CustomButton title="no" onClick={props.toClose} />
                    <CustomButton title="yes" onClick={() => {
                        if(value.trim() === '') {
                            ToastAndroid.show('Your input is empty!', ToastAndroid.SHORT)
                        }
                        else if(parseFloat(value).toString() !== value) {
                            ToastAndroid.show('your input is not a number!', ToastAndroid.SHORT)
                        }
                        else {
                            ToastAndroid.show('success (todo)', ToastAndroid.SHORT)
                            console.log(props.title, props.inout, value);
                            props.toClose()
                        }
                    }} />
                </View>
            </View>
        </View>
    )
}

export default RecordDialog;
