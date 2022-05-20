import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native';
import { styles } from '../styles/global';

export default function Home({navigation}) {
  const presshandler=()=>{
    navigation.navigate('Incident');
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>"Let's make World a safe place.</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.button} onPress={presshandler}>
          <Text style={styles.text}>Report</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
