import React from "react";

import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    text: {
        color: '#ffffff',
        fontSize: 24,
    },
    innerView: {
        flex: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    record: {
        width: '70%',
        height: '15%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 5,
        backgroundColor: '#67c23a',
        color: 'red',
        elevation: 5,
    },
    output: {
        width: '70%',
        height: '15%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 5,
        backgroundColor: '#e6a23c',
        color: 'red',
        elevation: 5,
    },
    license: {
        width: '70%',
        height: '15%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#ffffff',
        borderRadius: 5,
        backgroundColor: '#909399',
        color: 'red',
        elevation: 5,
    }
})

const Home = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.record}>
                <View style={styles.innerView}
                      onTouchEnd={() => {
                          navigation.navigate('Record')
                      }}>
                    <Text style={styles.text}>Record</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.output}>
                <View style={styles.innerView}
                      onTouchEnd={() => {
                          Alert.alert('😅', 'Sorry!\nBut this part is not finished yet.')
                      }}>
                    <Text style={styles.text}>Export</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.license}>
                <View style={styles.innerView}
                      onTouchEnd={() => {
                          navigation.navigate('License')
                      }}>
                    <Text style={styles.text}>License</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Home;
