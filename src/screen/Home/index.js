import React, { Component } from 'react'
import { View, Text, SafeAreaView, Modal, ActivityIndicator, StyleSheet, TouchableOpacity, TextInput,FlatList, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import { getSpaceXHistory, getSpaceXPayload } from '../../actions'
import Tabs from '../../component/tabs'
import Header from '../../component/Header'
import SearchInput from "../../component/search"
import History from "../../component/history"
import Payload from "../../component/payload"
import FlatListComponent from "../../component/Flastlist"
class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
        history:[],
        payload:[],
        historyPressed: false,
        payloadPressed: true,
        searchText: '',
        loading: false,
        searchData: []
    }
  }

  async componentDidMount(){
    const { dispatch } = this.props;  
    await dispatch(getSpaceXHistory()).then(() => {
        this.setState({history: this.props.spaceXHistory})
    });

    await dispatch(getSpaceXPayload()).then(() => {
        this.setState({payload: this.props.spaceXPayload})
        console.log('this.props.spaceXPayload === ', this.props.spaceXPayload)
    });
  }

  payloadPressed = () => {
      this.setState({
          historyPressed: false,
          payloadPressed: true
      })
  }

  historyPressed = () => {
    this.setState({
        historyPressed: true,
        payloadPressed: false
    })
  }

  onSearch = (val) => {
    const { history, payload, historyPressed } = this.state
    this.setState({searchText: val})
    if(historyPressed) {
        this.searchHistoryData(history, val)
    } else {
        this.searchPayloadData(payload, val)
    }
  }

  searchHistoryData = (val, text) => {
    const newData = val.filter(item => {   
    const itemData = `${item.title.toLowerCase()}`;
        const textData = text.toString().toLowerCase();
        return itemData.indexOf(textData) > -1;    
    });
    console.log(' data' , newData)
    this.setState({ searchData: newData, isRefreshing:false }); 
  }

  searchPayloadData = (val, text) => {
    const newData = val.filter(item => {   
    const itemData = `${item.payload_id.toLowerCase()}`;
        const textData = text.toString().toLowerCase();
        return itemData.indexOf(textData) > -1;    
    });
    this.setState({ searchData: newData, isRefreshing:false }); 
  }

  render() {  
    const { history, payload, historyPressed, payloadPressed, searchData, searchText } = this.state
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor:'#f8f9f9'}} >
                <StatusBar backgroundColor="tomato" barStyle="dark-content" translucent /> 
                <Header title = {"SpaceX"} />
                <Tabs onPayloadClick = {this.payloadPressed} onhistoryClick = {this.historyPressed} historyPressed = {historyPressed} payloadPressed = {payloadPressed} />
                <View style={{flex:1, marginTop:30}}>
                    <SearchInput searchInput = {searchText} onSearch = {this.onSearch} />
                    <FlatListComponent history = {historyPressed} data = {searchText.length > 0 ?  searchData : historyPressed ? history : payload} />
                </View>
            </SafeAreaView>
        )
  }
}

function mapStateToProps(state) {
  return {
    spaceXHistory: state.dashboard.spaceXHistory,
    spaceXPayload: state.dashboard.spaceXPayload
  }
}

export default connect(mapStateToProps)(HomeScreen)

