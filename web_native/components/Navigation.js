import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ConnectNonSelectedIcon from '../assets/Front End Materials 1/ConnectNonSelectedIcon';

const Navigation = () => {

    return (
    <View style={ styles.container }>
        <View style={ styles.navLink }><ConnectNonSelectedIcon selected={false}/></View>
        <View style={ styles.navLink }><Text>Circle</Text></View>
        <View style={ styles.navLink }><Text>Circle</Text></View>
        <View style={ styles.navLink }><Text>Map</Text></View>
    </View>
    );
}


const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
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
