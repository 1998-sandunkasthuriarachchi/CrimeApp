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
    form:{
        paddingLeft:25,
        paddingRight:25
    },
    formtext:{
        fontWeight:'600',
        fontSize:15,
        color:'#fff',
        paddingBottom:10
    },
    inputBox:{
        backgroundColor:'#F0EBEB',
        padding:10,
        height:130,
        borderRadius:5,
        fontSize:15,
    },
    btnSend:{
        color:'#ffff',
        backgroundColor:'#FF5677',
        paddingVertical:20,
        paddingHorizontal:80,
        borderRadius:40,
        alignItems:'center',
        marginTop:25

    },
    subject:{
        height:35,
        padding:10,
        backgroundColor:'#F0EBEB',
        marginBottom:15,
        borderRadius:5,
        fontSize:15,
    },
    text:{
      fontSize:20,
      color:'#ffff',
      textTransform:'uppercase',
      fontFamily:'robotobold',
    },
    btnBack:{
        color:'#ffff',
        backgroundColor:'#009EFA',
        paddingVertical:20,
        paddingHorizontal:80,
        borderRadius:40,
        alignItems:'center',
        marginTop:25

    },
});