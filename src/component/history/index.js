import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from "./style"

export default History = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{props.data.title}</Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.detailText}>{props.data.details}</Text>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.linkText}>{'Links : '}</Text>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.link1}>{props.data.links.article}</Text>
                <Text style={styles.link2}>{props.data.links.wikipedia}</Text>
            </View>
        </View>
    )
}