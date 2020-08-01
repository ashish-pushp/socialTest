import React, { Component } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native'
import styles from "./style"

export default Header = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}