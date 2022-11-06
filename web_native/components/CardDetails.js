import { React, useState } from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import NftCard from './NftCard';
import TierOneIcon from '../assets/Flowers/TierOneIcon';
import Card from './Card';

const CardDetails = ({contactCard}) => {
    const [isReminderSet, setIsReminderSet] = useState(false);

    return (
        <View style={styles.container}>
            <NftCard contactCard={contactCard} showDetails={true}/>
            <Card style={styles.timelineContainer}>
                <View style={styles.timeline}>
                    <TierOneIcon />
                    <View style={styles.verticalBar}></View>
                    <TierOneIcon />
                    <View style={styles.verticalBar}></View>
                    <TierOneIcon />
                    <View style={styles.verticalBar}></View>
                    <TierOneIcon />
                    <View style={styles.verticalBar}></View>
                    <TierOneIcon />
                </View>
                <Image
                    style={styles.timelineImage}
                    source={{uri: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png"}}
                />
            </Card>
            <Pressable
                onPress={() => {setIsReminderSet(!isReminderSet)}}
            >
                <Text style={[styles.reminderButton, isReminderSet ? styles.reminderButtonSet : styles.reminderButtonUnset]}>Reminder to schedule a call</Text>
            </Pressable>
            <Text style={styles.cardExpiration}>Card expires in 1 year</Text>
        </View>
    );
}


const styles = StyleSheet.create({

    timelineContainer: {
        flexDirection: 'row',
    },
    timeline: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    verticalBar:{
        height: 20,
        width: 2,
        backgroundColor: 'black',
    },
    timelineImage: {
        resizeMode: 'contain',
    },
    reminderButton:{
        padding: 6,
        width: '100%',
    },
    reminderButtonSet: {
        borderColor: '#FF9F76',
        backgroundColor: '#FF9F76',
        borderWidth: 2,
        borderRadius: 10,
        color: "white",
    },
    reminderButtonUnset: {
        borderColor: '#FF9F76',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "white",
        color: '#FF9F76'
    },
    cardExpiration: {
        fontSize: 12,

    }



  });

export default CardDetails;
