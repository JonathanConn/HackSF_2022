import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import ConnectNonSelectedIcon from '../assets/Front_End_Materials_1/ConnectNonSelectedIcon';
import Card from './Card';



const EditCard = () => {

    return (
    <Card style={styles.container}>
        <View style={styles.rowSpaceBetween}>
            {/* TODO: fetch and put username instead of boilerplate */}
            <Text>Hi Derek.</Text>
            <ConnectNonSelectedIcon />
        </View>
    </Card>
    );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    card: {
    },
    cardsContainer: {
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});

export default EditCard;
