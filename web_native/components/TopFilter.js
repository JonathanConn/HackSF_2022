import { React, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NotificationIcon from '../assets/Front End Materials 1/NotificationIcon';
import HasNewNotificationIcon from '../assets/Front End Materials 1/HasNewNotificationIcon';

const TopFilter = () => {
    const [hasNewNotification, setHasNewNotification] = useState(false);


    return (
        <View style={styles.container}>
            <View style={ styles.header }>
                <Text style={ styles.headerText }>Your Contacts.</Text>
                { hasNewNotification ? <HasNewNotificationIcon /> : <NotificationIcon /> }
            </View>
            


        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        position: 'sticky',
        backgroundColor: 'red',
        top: 0,
        zIndex: 1,
        width: '100%',
        height: 80,
    },

    header: {

        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',

    }
    

  });

export default TopFilter;
