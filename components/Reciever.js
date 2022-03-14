import { ScrollView, Text, View, TouchableOpacity,Platform, Linking } from "react-native";
import { styles } from "../styles/reciever";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons'; 
import { useState } from "react";

export default function Reciever({id,navigation}){
    const [casee,setCase]=useState("");

    const makeCall=(number)=>{
        
        let phoneNumber='';

        if(Platform.OS==='android'){
            phoneNumber=`tel:${number}`;
        }
        else{
            phoneNumber=`telprompt:${number}`;
        }
        Linking.openURL(phoneNumber);

    };

    const presshandler=()=>{
        navigation.navigate('Upload');
      }

    const EventHandler = (nid) => {
        switch (nid) {
            case "1":
                return(
                    <View style={styles.cardarea}>
                        <TouchableOpacity onPress={()=>makeCall(771211233)}>
                        <View style={styles.roundcard}>
                                <MaterialIcons
                                name="call"
                                color="#fff"
                                size={20}
                                style={styles.icon}
                                />
                            <Text style={styles.text}>PHI</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                );
                break;
            case "2":
                return(
                    <View style={styles.cardarea}>
                        <TouchableOpacity onPress={()=>makeCall(119)}>
                        <View style={styles.roundcard}>
                                <MaterialIcons
                                name="call"
                                color="#fff"
                                size={30}
                                style={styles.icon}
                                />
                            <Text style={styles.text}>119</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={presshandler}>
                        <View style={styles.roundcard}>
                                <Feather
                                name="send"
                                color="#fff"
                                size={30}
                                style={styles.icon}
                                />
                            <Text style={styles.text}>EMAIL</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                );
                break;
            case "3":
                return(
                    <View style={styles.cardarea}>
                        <TouchableOpacity onPress={()=>makeCall(1992)}>
                        <View style={styles.roundcard}>
                                <MaterialIcons
                                name="call"
                                color="#fff"
                                size={30}
                                style={styles.icon}
                                />
                            <Text style={styles.text}>1992</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.roundcard}>
                            <Feather
                                name="send"
                                color="#fff"
                                size={30}
                                style={styles.icon}
                                />
                            <Text style={styles.text}>EMAIL</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                );
                break;
            case "4":
                return(
                    <View style={styles.cardarea}>
                        <TouchableOpacity onPress={()=>makeCall(119)}>
                        <View style={styles.roundcard}>
                                <MaterialIcons
                                name="call"
                                color="#fff"
                                size={30}
                                style={styles.icon}
                                />
                            <Text style={styles.text}>POLICE</Text>
                        </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <View style={styles.roundcard}>
                                <Feather
                                name="send"
                                color="#fff"
                                size={30}
                                style={styles.icon}
                                />
                            <Text style={styles.text}>EMAIL</Text>
                        </View>
                        </TouchableOpacity>
                    </View>
                );
                break;
            default:
                null;
        }
      };
    return(
        <View>
            {EventHandler(id)}
        </View>
    );
}