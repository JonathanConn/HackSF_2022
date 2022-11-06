import { React, useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import NftCard from '../components/NftCard';
import TopFilter from '../components/TopFilter';



const cards = [
  { id: 1, name: 'john abbot', ens: 'johnabbot.eth', type: 'social', socials: ['telegram', 'instagram', 'www.link.com'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png" },
  { id: 2, name: 'john abbot', ens: 'johnabbot.eth', type: 'social', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png" },
  { id: 3, name: 'john abbot', ens: 'johnabbot.eth', type: 'social', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png" },
  { id: 4, name: 'john abbot', ens: 'johnabbot.eth', type: 'social', socials: ['telegram', 'instagram'], nftImageUrl: "https://cdn.discordapp.com/attachments/1038280454656249918/1038584736056082442/Derek_Scott_preview.png" },
]

const MyCardsPage = () => {
  const [userContactCards, setUserContactCards] = useState([])

  // TODO: fetch cards
  useEffect(() => {
      setUserContactCards(cards)
  }, [])


  return (
  <View>
      <TopFilter title="Your Card." showFilter={false} />
      <ScrollView 
      contentContainerStyle={styles.contentContainer}
      horizontal={true}
      snapToInterval= {1}
      >
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
  card: {
    margin: 100,
  },

  contentContainer: {
    paddingHorizontal: 10,
    flexWrap:'nowrap',
    
  }

});

export default MyCardsPage;
