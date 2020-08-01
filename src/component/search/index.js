import React, { Component } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, StyleSheet, TextInput, ImagePropTypes } from 'react-native'
export default SearchInput = (props) => {
    return(
        <View style={{flex:.1, paddingHorizontal:20}}>
            <TextInput
                placeholder="Search"
                placeholderTextColor="#ccc"
                style={{
                    width:'100%',
                    height: 46,
                    paddingHorizontal:20, 
                    borderWidth:1,
                    borderRadius:6,
                    borderColor: '#ccc'
                }}
                value = {props.searchInput}
                onChangeText = {props.onSearch}
            />
        </View>
    )
}