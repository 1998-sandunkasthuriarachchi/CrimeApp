import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    roundcard:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#B8405E',
        height:90,
        width:90,
        borderRadius:90/2,
        margin:4,
        fontWeight:'500',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4.84,

        elevation: 5,
    },
    cardarea:{
        flexDirection:'row',
        justifyContent:'center',
    },
    text:{
        marginTop:4,
        color:'#fff',
        fontWeight:'500',
        fontSize:15
    }
});