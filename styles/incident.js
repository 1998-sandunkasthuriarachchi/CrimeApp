import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0A2435',
    },
    card:{
        margin:10,
        borderRadius:10 ,
        padding:15,
        marginVertical:30,
        alignItems:'center',
        borderColor:'#fff',
        borderWidth:1
    },
    content:{
        flexDirection:'row'
    },
    titleText:{
        fontFamily:'robotoregular',
        fontWeight:'500',
        textTransform:'uppercase',
        fontSize:20,
        color:'#00C897',
        letterSpacing:1
    },
    icon:{
        marginTop:2,
        marginRight:5
    },
    IncidentMenu:{
        justifyContent:'center',
        alignItems:'center',
        margin:3
    },
    IncidentCard:{
        height:50,
        borderRadius:10,
        backgroundColor:'#203239',
        flexDirection:'row',
        alignItems:'center'
        // borderBottomColor: '#00C897',
        // borderBottomWidth: 2,
    },
    MenuItem:{
        textTransform:'uppercase',
        fontWeight:'500',
        fontSize:18,
        marginLeft:10,
        color:'#fff'
    },
    roundcard:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#D7DBDD',
        borderColor:'#3498DB',
        height:80,
        width:80,
        borderRadius:80/2,
        margin:4,
        fontWeight:'500',
    },
    cardarea:{
        flexDirection:'row',
        justifyContent:'center',
    }
});