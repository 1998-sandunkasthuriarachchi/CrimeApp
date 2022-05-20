import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/incident";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Card } from "react-native-shadow-cards";
import Reciever from "../components/Reciever";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Incident({navigation}) {
  const [id, setid] = useState("");

  const [incident, setIncident] = useState([
    {
      id: "1",
      name: "Covid",
    },
    {
      id: "2",
      name: "Crime",
    },
    {
      id: "3",
      name: "Child Abuse",
    },
    {
      id: "4",
      name: "Drug Deal",
    },
  ]);


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          {/* <MaterialIcons
            name="menu"
            color="#fff"
            size={20}
            style={styles.icon}
          /> */}
          <Text style={styles.titleText}>select Incident</Text>
        </View>
      </View>
      <View>
        {incident.map((item) => {
          return (
            <View key={item.id} style={styles.IncidentMenu}>
              <TouchableOpacity onPress={() => setid(item.id)}>
                <Card style={styles.IncidentCard} key={item.id}>
                <MaterialCommunityIcons name="menu-right" size={24} color="#fff" />
                  <Text style={styles.MenuItem}>{item.name}</Text>
                </Card>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.card}>
        <View style={styles.content}>
          {/* <MaterialIcons
            name="menu"
            color="#fff"
            size={20}
            style={styles.icon}
          /> */}
          <Text style={styles.titleText}>Select Receiver</Text>
        </View>
      </View>
        <Reciever id={id} navigation={navigation} />
    </View>
  );
}
