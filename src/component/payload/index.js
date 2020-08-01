import React, { Component } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, StyleSheet, TouchableOpacity, TextInput,FlatList, StatusBar } from 'react-native'
export default Payload = (props) => {
    return(
        <View style={{flex:1, marginLeft:20, marginRight:20, marginTop:10, borderRadius:6, elevation:5, backgroundColor:'#fff', padding:15}}>
            <View style={{flex:1, flexDirection:'row', paddingHorizontal:10}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#000000'}}>{'Payload ID : '}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#97A7AD'}}>{props.data.payload_id}</Text>
                </View>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#000000'}}>{'Manufacturer : '}</Text>
                </View>
                <View style={{flex:.7, alignItems:'flex-end'}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#97A7AD'}}>{props.data.manufacturer}</Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row', paddingHorizontal:10, paddingVertical:10}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#000000'}}>{'Mass(kg) : '}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#97A7AD'}}>{props.data.payload_mass_kg}</Text>
                </View>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#000000'}}>{'Manufacturer(lbs) : '}</Text>
                </View>
                <View style={{flex:.7, alignItems:'flex-end'}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#97A7AD'}}>{props.data.payload_mass_lbs}</Text>
                </View>
            </View>
            <View style={{flex:1, flexDirection:'row', paddingHorizontal:10, paddingVertical:10}}>
                <View style={{flex:1}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#000000'}}>{'customers: '}</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#97A7AD'}}>{props.data.customers[0]}</Text>
                </View>
                <View style={{flex:1,}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#000000'}}>{'Payload Type : '}</Text>
                </View>
                <View style={{flex:.7, alignItems:'flex-end'}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'#97A7AD'}}>{props.data.payload_type}</Text>
                </View>
            </View>
        </View>
    )
}