import { React, useEffect, useState } from 'react';
import { View, Pressable, StyleSheet, ScrollView, Text } from 'react-native';
import NftCard from '../components/NftCard';
import TopFilter from '../components/TopFilter';
import AppHeader from '../components/AppHeader';
import CardDetails from '../components/CardDetails';

const cards = [
    { id: 1, name: 'John Abbot', ens: 'johnabbot.eth', type: 'Experience', socials: ['telegram', 'instagram', 'www.link.com'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png", contactLevel: 1 },
    { id: 2, name: 'John Abbot', ens: 'johnabbot.eth', type: 'Professional', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png", contactLevel: 2 },
    { id: 3, name: 'John Abbot', ens: 'johnabbot.eth', type: 'Social', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png", contactLevel: 3 },
]

const HomePage = () => {
    const [userContactCards, setUserContactCards] = useState([])

    const [selectedCard, setSelectedCard] = useState(null)

    // TODO: fetch cards
    useEffect(() => {
        setUserContactCards(cards)
    }, [])

    return (
    <View style={styles.container}>
        {selectedCard == null ?
        <TopFilter style={styles.topNav}/> :
        <AppHeader title={"Your Contacts."} extension={
            <Pressable style={styles.row} onPress={() => setSelectedCard(null)}>
                <Text>Logo</Text>
                <Text style={styles.backButton}>Back</Text>
            </Pressable>
        }/>
        }
        
        <ScrollView>
            
            {
            selectedCard == null ?
                userContactCards.map((card) => {
                    return (
                        <Pressable key={card.id} onPress={() => { setSelectedCard(card) }}>
                            <NftCard contactCard={card} showDetails={ false }/>
                        </Pressable>
                    )
                }) :
                <CardDetails contactCard={selectedCard}/>
            }   
        </ScrollView>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
    },
    topNav: {
        width: '100%', 
        flexGrow: 0,
    },
    row: {
        flexDirection: 'row',
    }

  });

export default HomePage;
