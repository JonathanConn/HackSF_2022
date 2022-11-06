import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NftCard from '../components/NftCard';
import TopFilter from '../components/TopFilter';

const cards = [
    { id: 1, name: 'john abbot', ens: 'johnabbot.eth', type: 'social', socials: ['telegram', 'instagram', 'www.link.com'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png", contactLevel: 1 },
    { id: 2, name: 'john abbot', ens: 'johnabbot.eth', type: 'social', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png", contactLevel: 2 },
    { id: 3, name: 'john abbot', ens: 'johnabbot.eth', type: 'social', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png", contactLevel: 3 },
    { id: 4, name: 'john abbot', ens: 'johnabbot.eth', type: 'social', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png", contactLevel: 1 },
]

const HomePage = () => {
    const [userContactCards, setUserContactCards] = useState([])

    // TODO: fetch cards
    useEffect(() => {
        setUserContactCards(cards)
    }, [])

    return (
    <View >
        <TopFilter title={"Your Contacts."} showFilter={true}/>
        <ScrollView style={styles.cardContainer}>
            {/* for each cards in userContactCards, inject NftCard  */}
            {userContactCards.map((card) => {
                return (
                    <View key={card.id} style={styles.card}>
                        <NftCard contactCard={card}/>
                    </View>
                )
            })}
        </ScrollView>
    </View>
    );
}


const styles = StyleSheet.create({
    cardContainer: {
        padding: 16,
    },
    card: {
        marginVertical: 16,

    }

  });

export default HomePage;
