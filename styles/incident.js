import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#0A2435',
    },
    card:{
        margin:10,
        borderStyle:'solid',
        borderWidth:1,
        padding:25,
        borderRadius:35,
        marginVertical:35,
        borderColor:'#3498DB',
        alignItems:'center'
    },
    content:{
        flexDirection:'row'
    },
    titleText:{
        fontSize:20,
        color:'#ffff',
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
        justifyContent:'center'
    },
    MenuItem:{
        fontWeight:'500',
        fontSize:18,
        marginLeft:10
    }
});