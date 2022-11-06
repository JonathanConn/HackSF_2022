import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import AppHeader from '../components/AppHeader';
import MyCards from '../components/MyCards';
import CreateCard from '../components/CreateCard';
import EditCard from '../components/EditCard';


const MyCardsPage = () => {
    const [createMode, setCreateMode] = useState(false)
    const [editMode, setEditMode] = useState(false)

  return (
  <View style={styles.container}>
        <AppHeader title={"Your Cards."} extension={null}/>
        <ScrollView style={styles.cardsContainer}>
            { createMode ? 
                <CreateCard exitHandler={()=>{setCreateMode(false)}}/> : editMode ? 
                    <EditCard exitHandler={()=>{setEditMode(false)}}/> : 
                    <MyCards onCreateHandler={() => {setCreateMode(true)}} onEditHandler={() => {setEditMode(true)}}/>
            
            }
        </ScrollView>
  </View>
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
    rowAlignRight: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

});

export default MyCardsPage;
