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
import ConnectWalletPage from './pages/ConnectWalletPage';


export default function App() {
  const [pageName, setPageName] = useState('home');
  const changePage = (pageName) =>{
      setPageName(pageName);
  }
  const[walletScreen, setWalletScreen] = useState(true);

  function onClickWalletHandler() {
    //connect to wallet
    // add a conditional if successfully connected to wallet
    console.log("imm her")
    setWalletScreen(false);
  }

  return (
    <View style={styles.container}>
      {walletScreen &&
      <View>
        <ConnectWalletPage 
          style={styles.walletPage}
          onClick = {() => { setWalletScreen(false) }}
        />
      </View>
      }
      {!walletScreen &&
      <View style={styles.main}>
        {
          pageName == "Home" ? <HomePage /> : 
          pageName == "MyCards" ? <MyCardsPage /> :
          pageName == "Hndshk" ? <HndshkPage /> :
          pageName == "Map" ? <MapPage /> :
          null
        }
      </View>}
      {!walletScreen &&
      <Navigation style={[styles.navigation]} changePage={changePage}/>}
      {!walletScreen &&
      <StatusBar style="auto" />}
      

    </View>
  );
}

const styles = StyleSheet.create({
  walletPage: {
    width: '100%',
    height: '100%',
    
    backgroundColor:'#F8F8F8',
  },

  main: {
    overflow: 'hidden',
    height: '90%',
    width: '100%',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },

  navigation: {

    height : '10%',
    position: 'fixed',
    bottom: 0,
  }

});
