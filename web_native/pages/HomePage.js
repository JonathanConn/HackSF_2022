import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NftCard from '../components/NftCard';

const cards = [{ key: 1, name: 'john abbot' }]

const HomePage = () => {
    const [userContactCards, setUserContactCards] = useState([])

    // TODO: fetch cards
    useEffect(() => {
        setUserContactCards(cards)
    }, [])

    return (
    <View>
        <Text>HomePage</Text>
        {/* for each cards in userContactCards, inject NftCard  */}
        {userContactCards.map((card) => {
            return (
                <View>
                    <NftCard contactCard={card}/>
                </View>
            )
        })}

    </View>
    );
}


const styles = StyleSheet.create({


  });

export default HomePage;
