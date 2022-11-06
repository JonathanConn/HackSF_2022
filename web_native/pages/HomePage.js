import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NftCard from '../components/NftCard';
import TopFilter from '../components/TopFilter';

const cards = [
    { key: 1, name: 'john abbot' },
    { key: 2, name: 'john abbot' },
    { key: 3, name: 'john abbot' },
    { key: 4, name: 'john abbot' },
]

const HomePage = () => {
    const [userContactCards, setUserContactCards] = useState([])

    // TODO: fetch cards
    useEffect(() => {
        setUserContactCards(cards)
    }, [])

    return (
    <View>
        <TopFilter />
        <ScrollView>
            {/* for each cards in userContactCards, inject NftCard  */}
            {userContactCards.map((card) => {
                return (
                    <View style={styles.card}>
                        <NftCard contactCard={card}/>
                    </View>
                )
            })}
        </ScrollView>
    </View>
    );
}


const styles = StyleSheet.create({
    card: {
        margin: 10,
    }

  });

export default HomePage;
