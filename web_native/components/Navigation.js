import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConnectNonSelectedIcon from '../assets/Front End Materials 1/ConnectNonSelectedIcon';
import HomeIcon from '../assets/Front End Materials 1/HomeIcon';
import MyCardsIcon from '../assets/Front End Materials 1/MyCardsIcon';
import MapIcon from '../assets/Front End Materials 1/MapIcon';

const Navigation = () => {

    return (
    <View style={ styles.container }>
        <View style={ styles.navLink }><HomeIcon selected={true} /></View>
        <View style={ styles.navLink }><MyCardsIcon selected={false} /></View>
        <View style={ styles.navLink }><ConnectNonSelectedIcon selected={false}/></View>
        <View style={ styles.navLink }><MapIcon selected={false}/></View>
    </View>
    );
}


const styles = StyleSheet.create({
    
    container: {
        paddingTop: 10,
        borderTopColor: 'grey',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 40,
    },

    navLink: {
        width: '25%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        
    }

  });

export default Navigation;
