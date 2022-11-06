import { StatusBar } from 'expo-status-bar';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import { 
  StyleSheet, 
  View, 
} from 'react-native';


export default function App() {
  

  return (
    <View style={styles.container}>
      
      <View style={styles.main}>
        <HomePage />

      </View>

      <Navigation style={[styles.navigation]} />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  main: {
    overflow: 'auto',
    height: '90%',
    width: '100%',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  navigation: {

    height : '10%',
    position: 'fixed',
    bottom: 0,
  }

});
