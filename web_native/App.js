import { StatusBar } from 'expo-status-bar';
import HomePage from './pages/HomePage';
import { useState } from 'react';
import Navigation from './components/Navigation';
import { 
  StyleSheet, 
  View, 
  Dimensions,
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

      <Navigation style={styles.navigation} changePage={changePage} activePage={pageName}/>

    </View>
  );
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingBottom: 100,
  },
  main: {

  },
  navigation: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    
    
  }

});
