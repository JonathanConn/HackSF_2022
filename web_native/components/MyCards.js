import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Carousel from './Carousel';
import Pill from '../components/Pill';



const cards = [
    { id: 1, name: 'John Abbot', ens: 'johnabbot.eth', type: 'Experience', socials: ['telegram', 'instagram', 'www.link.com'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png"},
    { id: 2, name: 'John Abbot', ens: 'johnabbot.eth', type: 'Professional', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png" },
    { id: 3, name: 'John Abbot', ens: 'johnabbot.eth', type: 'Social', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png" },
]

const MyCards = ({onCreateHandler, onEditHandler}) => {
    const [userContactCards, setUserContactCards] = useState([])

  // TODO: fetch cards
  useEffect(() => {
      setUserContactCards(cards)
  }, [])

  return (
    <View style={styles.container}>
        <View style={styles.rowAlignRight}>
            <Pill spaced xlarge text={"Edit"} onPressHandler={onEditHandler} prepend={
                null // add icon here
            }/>
            <Pill spaced xlarge text={"Create"} onPressHandler={onCreateHandler} prepend={
                null // add icon here
            }/>
        </View>
        <Carousel slides={userContactCards} />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    card: {
    },
    rowAlignRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

});

export default MyCards;
