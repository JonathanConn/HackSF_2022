import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const NftCard = (contactCard) => {

    return (
        <View style={styles.container}>
            <Text>Card of {contactCard.name}</Text>


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: 'grey',
    }

  });

export default NftCard;
