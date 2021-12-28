import { StyleSheet } from "react-native";

export const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A2435',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button:{
        color:'#ffff',
        backgroundColor:'#E74C3C',
        paddingVertical:20,
        paddingHorizontal:60,
        borderRadius:35
      },
      text:{
        fontSize:20,
        color:'#ffff',
        textTransform:'uppercase',
        fontFamily:'robotobold'
      },
      titleArea:{
        marginBottom:150,
      },
      title:{
        fontSize:20,
        color:'#ffff',
        fontFamily:'robotoregular'
      }
});