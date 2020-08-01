import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'8%', 
        flexDirection:'row', 
        borderBottomWidth:1, 
        borderBottomColor:'#ccc'
    },
    payloadTab:{
        flex:1,  
        borderRightWidth:1, 
        borderRightColor:'#ccc', 
        alignItems:'center', 
        justifyContent:'center'
    },
    historyTab: {
        flex:1, 
        alignItems:'center', 
        justifyContent:'center'
    }
})    