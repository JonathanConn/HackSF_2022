import { React } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ConnectNonSelectedIcon from '../assets/Front_End_Materials_1/ConnectNonSelectedIcon';
import HomeIcon from '../assets/Front_End_Materials_1/HomeIcon';
import MyCardsIcon from '../assets/Front_End_Materials_1/MyCardsIcon';
import MapIcon from '../assets/Front_End_Materials_1/MapIcon';

const Navigation = ({ changePage }) => {


    return (
    <View style={ styles.container }>
        <Pressable style={ styles.navLink } onPress={() => changePage("Home")}><HomeIcon selected={true} /></Pressable>
        <Pressable style={ styles.navLink } onPress={() => changePage("MyCards")}><MyCardsIcon selected={false} /></Pressable>
        <Pressable style={ styles.navLink } onPress={() => changePage("Hndshk")}><ConnectNonSelectedIcon selected={false}/></Pressable>
        <Pressable style={ styles.navLink } onPress={() => changePage("Map")}><MapIcon selected={false}/></Pressable>
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
