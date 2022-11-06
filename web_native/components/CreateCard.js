import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import ConnectNonSelectedIcon from '../assets/Front_End_Materials_1/ConnectNonSelectedIcon';
import Card from './Card';
import Pill from './Pill';



const CreateCard = ({exitHandler}) => {
    const [selectedCardType, setSelectedCardType] = useState('')


    return (
        <View>
            {
            selectedCardType === '' && 
            <Pill spaced xlarge text={"Exit"} bgColor={ "lightgrey" } onPressHandler={exitHandler}
            />
            }

            <Card>
                <View style={[styles.rowSpaceBetween, styles.cardHeader]}>
                    {/* TODO: fetch and put username instead of boilerplate */}
                    <Text style={styles.cardHeader}>Hi Derek.</Text>
                    <ConnectNonSelectedIcon/>
                </View>
                <Text>Which card would you like to create?</Text>
                <Pill spaced xlarge text={"Professional"} bgColor={ "#E2EFFF" } onPressHandler={() => { setSelectedCardType('Professional') }}/>
                <Pill spaced xlarge text={"Social"} bgColor="#F0E9FF" onPressHandler={() => { setSelectedCardType('Social') }}/>
                <Pill spaced xlarge text={"Experience"} bgColor="#FFE6DC" onPressHandler={() => { setSelectedCardType('Experience') }}/>
            </Card>
            <View style={styles.rowSpaceBetween}>
                <Pill spaced xlarge text={"Back"} bgColor={ "lightgrey" } onPressHandler={exitHandler}/>
                <Pill spaced xlarge text={"Next"} bgColor={ "lightgrey" } onPressHandler={exitHandler}/>
            </View>
        </View>

    );
}


const styles = StyleSheet.create({

    cardHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingVertical: 20,
    },
    cardsContainer: {
    },
    rowSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

});

export default CreateCard;
