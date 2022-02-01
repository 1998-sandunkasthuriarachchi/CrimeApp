import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { styles } from '../styles/incident';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { Card } from "react-native-shadow-cards";

 export default function Incident(){
     const [incident,setIncident]=useState([
         {
             id:'1',
             name:'Covid'
         },
         {
            id:'2',
            name:'Crime'
        },
        {
            id:'3',
            name:'Child Abuse'
        },
        {
            id:'4',
            name:'Drug Deal'
        }
     ]);

     const EventHandler=(id)=>{
        if(id===1){
            return
                <View>
                    <Text style={{color:'#fff'}}>Pressed 1</Text>
                </View>
            
        }

     }

     return(
         <View style={styles.container}>
            <View style={styles.card}>
                    <View style={styles.content}>
                        <MaterialIcons name="menu" color='#707070' size={20} style={styles.icon} />
                        <Text style={styles.titleText}>Select Incident</Text>
                    </View>
            </View>
            <View>
                {incident.map((item)=>{
                    return(
                        <View style={styles.IncidentMenu}>
                        <TouchableOpacity onPress={()=>EventHandler(item.id)}>
                        <Card style={styles.IncidentCard} key={item.id}>
                        <Text style={styles.MenuItem}>{item.name}</Text>
                        </Card>
                        </TouchableOpacity>
                        </View>
                    );
                })}
            </View> 
            <View style={styles.card}>
                    <View style={styles.content}>
                        <MaterialIcons name="menu" color='#707070' size={20} style={styles.icon} />
                        <Text style={styles.titleText}>Select Receiver</Text>
                    </View>
            </View>
            <View>
                {EventHandler}
            </View>
         </View>
     );

 }