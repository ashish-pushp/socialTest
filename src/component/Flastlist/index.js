import React, { Component } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, StyleSheet, TouchableOpacity, TextInput,FlatList, StatusBar } from 'react-native'
import History from "../history"
import Payload from "../payload"

export default FlatListComponent = (props) => {
    return(
        <View style={{flex:1, marginTop:10}}>
            <FlatList
                // refreshControl={
                //     <RefreshControl
                //     refreshing={this.state.isRefreshing}
                //     onRefresh={this.onRefresh}
                //     tintColor={'grey'}
                //     />
                // }
                data={props.data} 
                renderItem={({ item, index }) => {
                    return (
                        props.history ? <History data = {item} /> : <Payload data = {item} />
                    )
                }}
            />
        </View>
    )
}