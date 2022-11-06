import { StatusBar } from 'expo-status-bar';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import Navigation from './components/Navigation';
import { 
  StyleSheet, 
  View, 
} from 'react-native';
import MapPage from './pages/MapPage';
import MyCardsPage from './pages/MyCardsPage';
import HndshkPage from './pages/HndshkPage';


export default function App() {
  const [pageName, setPageName] = useState('Home');
  const changePage = (pageName) =>{
      setPageName(pageName);
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.main}>
        {
          pageName == "Home" ? <HomePage /> : 
          pageName == "MyCards" ? <MyCardsPage /> :
          pageName == "Hndshk" ? <HndshkPage /> :
          pageName == "Map" ? <MapPage /> :
          null
        }

      </View>

      <Navigation style={[styles.navigation]} changePage={changePage} activePage={pageName}/>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({

  main: {
    flex: 9,
    overflow: 'hidden',
    // height: '90%',
    width: '100%',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  navigation: {
    flex: 1,
    // height : '10%',
    position: 'fixed',
    bottom: 0,
  }

});
