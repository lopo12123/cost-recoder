import React, { useState } from "react";

import { Button, Modal, ScrollView, StyleSheet } from "react-native";

// @ts-ignore
import AntIcon from 'react-native-vector-icons/AntDesign'

import Card from "../components/Record/Card"
import RecordDialog from '../components/Record/RecordDialog'
import { getStoreObj, RecordStore, RecordStoreName } from "../scripts/store";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#eeeeee',
    },
})

const AlipayIcon = () => { return <AntIcon name="alipay-circle" size={30} color="#000000cc" /> }
const WeChatIcon = () => { return <AntIcon name="wechat" size={30} color="#00000099" /> }
const BankIcon = () => { return <AntIcon name="bank" size={30} color="#00000066" /> }
const CashIcon = () => { return <AntIcon name="wallet" size={30} color="#00000033" /> }

const Record = () => {
    const [visible, setVisible] = useState(false)
    const [title, setTitle]: [RecordStoreName, Function] = useState('Alipay')
    const [inout, setInout]: [('IN' | 'OUT'), Function] = useState('IN')

    const closeModel = () => {
        setVisible(false)
    }

    return (
        <ScrollView style={styles.container}>
            <Modal visible={visible}
                   animationType="slide">
                <RecordDialog title={title} inout={inout} toClose={closeModel} />
            </Modal>
            <Card title="Alipay" icon={<AlipayIcon/>}
                  onClick={(type: 'IN' | 'OUT') => {
                      setTitle('Alipay')
                      setInout(type)
                      setVisible(true)
                  }} />

            <Card title="WeChat" icon={<WeChatIcon/>}
                  onClick={(type: 'IN' | 'OUT') => {
                      setTitle('WeChat')
                      setInout(type)
                      setVisible(true)
                  }} />

            <Card title="Bank Card" icon={<BankIcon/>}
                  onClick={(type: 'IN' | 'OUT') => {
                      setTitle('Card')
                      setInout(type)
                      setVisible(true)
                  }} />

            <Card title="Cash in Pocket" icon={<CashIcon/>}
                  onClick={(type: 'IN' | 'OUT') => {
                      setTitle('Cash')
                      setInout(type)
                      setVisible(true)
                  }} />

            <Button title="show list" onPress={async () => {
                const recordList = await getStoreObj('Alipay') as RecordStore
                console.log(recordList[recordList.length - 1]);
            }} />
        </ScrollView>
    )
}

export default Record;
