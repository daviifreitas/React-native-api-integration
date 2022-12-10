import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert , Button} from 'react-native';
import api from "../my-app/src/services/api"

export default function App() {

  async function consulta(){
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data); 
    console.log(data.slip);
    console.log(data.slip.advice);
    return toString(data.slip.advice);
  }

  return (
    <View style={styles.container}>
      <Button title="Clique e se surpreenda-se!" onPress={() => Alert.alert( "Hehe",consulta())}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
