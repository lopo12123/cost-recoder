import React from "react";

import { Alert, Linking, StyleSheet, View } from "react-native";

// @ts-ignore
import AweIcon from 'react-native-vector-icons/FontAwesome'

import Card from "./Card";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#eeeeee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

const UpdateIcon = () => { return <AweIcon name="refresh" size={30} /> }
const ExcelIcon = () => { return <AweIcon name="file-excel-o" size={30} /> }
const LicenseIcon = () => { return <AweIcon name="file-text-o" size={30} /> }
const ContactIcon = () => { return <AweIcon name="envelope-o" size={30} /> }

const SettingsHome = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Card title="Check Update" icon={<UpdateIcon/>}
                  onClick={() => { Alert.alert('Not Yet', 'you`d better ask the author instead.') }} />

            <Card title="Export in Excel" icon={<ExcelIcon/>}
                  onClick={() => { Alert.alert('Not Yet', 'you`d better punch the author instead.') }} />

            <Card title="View License" icon={<LicenseIcon/>}
                  onClick={() => { navigation.navigate('License') }}/>

            <Card title="Contact Author" icon={<ContactIcon/>}
                  onClick={() => {
                      const url = 'mailto:lopoflyfly@gmail.com'
                      Linking.canOpenURL(url)
                          .then((support) => {
                              if(!support) {
                                  Alert.alert('fail to open default browser', 'fail to open default browser')
                              }
                              else {
                                  return Linking.openURL(url);
                              }
                          })
                          .catch((err) => {
                              if(err) {
                                  Alert.alert("fail to open default browser", err);
                              }
                          })
                  }}/>
        </View>
    )
}

export default SettingsHome;
