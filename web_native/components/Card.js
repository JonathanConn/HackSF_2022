import { React } from 'react';
import { View, StyleSheet, Text } from 'react-native';
const Card = (props) => {

    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
  });

export default Card;
