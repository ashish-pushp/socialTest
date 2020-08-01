import React, { Component } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import styles from "./style"


export default Tabs = ({ onPayloadClick, onhistoryClick, historyPressed, payloadPressed }) => {
    console.log('onPayloadClick ', onPayloadClick)
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress = {onPayloadClick} style={[styles.payloadTab, { backgroundColor : payloadPressed ? '#005EEB' : "#C4C4C4"}]}>
                <Text>{'Payload'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress = {onhistoryClick} style={[styles.historyTab, { backgroundColor : historyPressed ? '#005EEB' : "#C4C4C4"}]}>
                <Text>{'History'}</Text>
            </TouchableOpacity>
        </View>
    )
}
