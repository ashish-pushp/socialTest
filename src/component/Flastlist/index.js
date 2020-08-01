import React, { Component } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, StyleSheet, TouchableOpacity, TextInput,FlatList, StatusBar } from 'react-native'
import History from "../history"
import Payload from "../payload"

export default FlatListComponent = (props) => {
    return(
        <View style={{flex:1, marginTop:10}}>
            <FlatList
                data={props.data} 
                keyExtractor ={(item, index) => props.history ? item.id + index  : item.payload_id + index}
                renderItem={({ item, index }) => {
                    return (
                        props.history ? <History data = {item} /> : <Payload data = {item} />
                    )
                }}
            />
        </View>
    )
}