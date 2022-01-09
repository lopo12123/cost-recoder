import React from "react";
import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
    },
    info: {
        marginVertical: 20,
        fontSize: 24,
        fontFamily: 'cursive',
        lineHeight: 36,
    },
    inputBox: {
        borderColor: '#777777',
        borderBottomWidth: 1,
        marginVertical: 40,
        fontFamily: 'cursive',
        fontSize: 20,
    }
})

const RecordDialog = (props: { title: 'Alipay' | 'WeChat' | 'Bank Card' | 'Cash in pocket', inout: 'IN' | 'OUT', toClose: Function }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.info}>
                There is a saying that if you buy, you earn, the more you buy, the more you earn, so how much do you earn today
            </Text>

            <KeyboardAvoidingView behavior="position">
                <TextInput style={styles.inputBox}
                           keyboardType="numeric"
                           placeholder={
                               "Enter the amount you " + (props.inout === 'IN' ? 'gain' : 'spent') + " here"
                           }/>
            </KeyboardAvoidingView>

            <Button title="cancel" onPress={() => { props.toClose() }}/>

            <Button title="check" onPress={() => { props.toClose() }}/>
        </View>
    )
}

export default RecordDialog;
