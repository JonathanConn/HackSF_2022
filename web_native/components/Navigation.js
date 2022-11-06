import { React } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import ConnectNonSelectedIcon from '../assets/Front_End_Materials_1/ConnectNonSelectedIcon';
import HomeIcon from '../assets/Front_End_Materials_1/HomeIcon';
import MyCardsIcon from '../assets/Front_End_Materials_1/MyCardsIcon';
import MapIcon from '../assets/Front_End_Materials_1/MapIcon';

const Navigation = ({ changePage, activePage }) => {


    return (
    <View style={ styles.container }>
        <Pressable style={ [styles.navLink, activePage? styles.active : styles.unactive] } onPress={() => changePage("Home")}><HomeIcon selected={activePage == "Home"} /></Pressable>
        <Pressable style={ [styles.navLink, activePage? styles.active : styles.unactive] } onPress={() => changePage("MyCards")}><MyCardsIcon selected={activePage == "MyCards"} /></Pressable>
        <Pressable style={ [styles.navLink, activePage? styles.active : styles.unactive] } onPress={() => changePage("Hndshk")}><ConnectNonSelectedIcon selected={activePage == "Hndshk"}/></Pressable>
        <Pressable style={ [styles.navLink, activePage? styles.active : styles.unactive] } onPress={() => changePage("Map")}><MapIcon selected={activePage == "Map"}/></Pressable>
    </View>
    );
}


const styles = StyleSheet.create({
    
    container: {
        borderTopColor: 'grey',
        borderTopWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

    },

    navLink: {
        paddingVertical: 10,
        width: '25%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
    }

  });

export default Navigation;
