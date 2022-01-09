import React, { useState } from "react";

import { Alert, Modal, ScrollView, StyleSheet, Text } from "react-native";

// @ts-ignore
import AntIcon from 'react-native-vector-icons/AntDesign'

import Card from "../components/Record/Card"
import RecordDialog from '../components/Record/RecordDialog'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        backgroundColor: '#eeeeee',
    },
})

const AlipayIcon = () => { return <AntIcon name="alipay-circle" size={30} color="#409eff" /> }
const WeChatIcon = () => { return <AntIcon name="wechat" size={30} color="#67c23a" /> }
const BankIcon = () => { return <AntIcon name="bank" size={30} color="#e6a23c" /> }
const CashIcon = () => { return <AntIcon name="wallet" size={30} color="#f56c6c" /> }

const Record = () => {
    const [visible, setVisible] = useState(false)
    const [title, setTitle]: [('Alipay' | 'WeChat' | 'Bank Card' | 'Cash in pocket'), Function] = useState('Alipay')
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
                      setTitle('Bank Card')
                      setInout(type)
                      setVisible(true)
                  }} />

            <Card title="Cash in Pocket" icon={<CashIcon/>}
                  onClick={(type: 'IN' | 'OUT') => {
                      setTitle('Cash in Pocket')
                      setInout(type)
                      setVisible(true)
                  }} />
        </ScrollView>
    )
}

export default Record;
