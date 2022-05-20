import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import { styles } from "../styles/incident";
import { MaterialIcons } from "@expo/vector-icons";

export default function CardCirlcle({name,text}){
    return(

        <View style={styles.roundcard}>
                <MaterialIcons
                name={name}
                color="#707070"
                size={20}
                style={styles.icon}
                />
            <Text>{text}</Text>
        </View>
        
    );
}