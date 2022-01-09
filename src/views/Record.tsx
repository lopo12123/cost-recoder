import React from "react";

import { ScrollView, StyleSheet } from "react-native";

// @ts-ignore
import AntIcon from 'react-native-vector-icons/AntDesign'

import Card from "../components/Record/Card";

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
    return (
        <ScrollView style={styles.container}>
            <Card title="Alipay" icon={<AlipayIcon/>} />
            <Card title="WeChat" icon={<WeChatIcon/>} />
            <Card title="Bank Card" icon={<BankIcon/>} />
            <Card title="Cash in Pocket" icon={<CashIcon/>} />
        </ScrollView>
    )
}

export default Record;
