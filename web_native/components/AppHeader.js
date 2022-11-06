import { React, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import NotificationIcon from '../assets/Front_End_Materials_1/NotificationIcon';
import HasNewNotificationIcon from '../assets/Front_End_Materials_1/HasNewNotificationIcon';

const AppHeader = (props) => {
    const [hasNewNotification, setHasNewNotification] = useState(false);

    return (
        <View style={styles.container}>
            <View style={ styles.header }>
                <Text style={ styles.headerText }>{props.title}</Text>
                { hasNewNotification ? <HasNewNotificationIcon /> : <NotificationIcon /> }
            </View>
            {props.extension}
        </View>
    );
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    container: {
        backgroundColor: '#fff',
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        zIndex: 100,
        
        width: '100%',
        padding: 10,
        paddingTop: 20,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 30,
        fontWeight: 'bold',

    },
    

  });

export default AppHeader;
