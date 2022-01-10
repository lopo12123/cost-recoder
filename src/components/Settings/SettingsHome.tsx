import React from "react";

import { Alert, Linking, StyleSheet, ToastAndroid, View } from "react-native";

// @ts-ignore
import AweIcon from 'react-native-vector-icons/FontAwesome'

import Card from "./Card";
import { clearStore } from "../../scripts/store";

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

const UpdateIcon = () => { return <AweIcon name="hand-o-up" size={30} color="#409eff" /> }
const ExcelIcon = () => { return <AweIcon name="file-excel-o" size={30} color="#67c23a" /> }
const LicenseIcon = () => { return <AweIcon name="file-text-o" size={30} color="#e6a23c" /> }
const ContactIcon = () => { return <AweIcon name="envelope-o" size={30} color="#f56c6c" /> }
const ClearIcon = () => { return <AweIcon name="recycle" size={30} color="#f56c6c" /> }

const SettingsHome = ({navigation}: any) => {
    return (
        <View style={styles.container}>
            <Card title="Check Update" icon={<UpdateIcon/>}
                  onClick={() => { ToastAndroid.show('Currently unavailable!', ToastAndroid.SHORT) }} />

            <Card title="Export in Excel" icon={<ExcelIcon/>}
                  onClick={() => { ToastAndroid.show('Currently unavailable!', ToastAndroid.SHORT) }} />

            <Card title="View License" icon={<LicenseIcon/>}
                  onClick={() => { navigation.navigate('License') }}/>

            <Card title="Contact Author" icon={<ContactIcon/>}
                  onClick={() => {
                      const url = 'mailto:lopoflyfly@gmail.com'
                      Linking.canOpenURL(url)
                          .then((support) => {
                              if(!support) {
                                  ToastAndroid.show('Fail to open default browser!', ToastAndroid.SHORT)
                              }
                              else {
                                  return Linking.openURL(url);
                              }
                          })
                          .catch((err) => {
                              if(err) {
                                  ToastAndroid.show('Fail to open default browser!', ToastAndroid.SHORT)
                              }
                          })
                  }}/>

            <Card title="Clear Stored Data" icon={<ClearIcon/>}
                  onClick={() => {
                      Alert.alert(
                          'Notice',
                          'This operation cannot be undone, are you sure to continue?',
                          [
                              { text: 'cancel', onPress: () => {  } },
                              {
                                  text: 'confirm',
                                  onPress: () => {
                                      clearStore('All')
                                          .then((result) => {
                                              ToastAndroid.show(result ? 'success' : 'fail', ToastAndroid.SHORT)
                                          })
                                  }
                              },
                          ]
                      )
                  }}/>
        </View>
    )
}

export default SettingsHome;
