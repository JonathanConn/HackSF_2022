import { React, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import NotificationIcon from '../assets/Front_End_Materials_1/NotificationIcon';
import HasNewNotificationIcon from '../assets/Front_End_Materials_1/HasNewNotificationIcon';
import { Pill } from './Pill';

const TopFilter = (props) => {
    const [hasNewNotification, setHasNewNotification] = useState(false);
    const [chosenFilter, setChosenFilter] = useState('Most Recent');
    const [showFilterOptions, setShowFilterOptions] = useState(false);



    return (
        <View style={styles.container}>
            <View style={ styles.header }>
                <Text style={ styles.headerText }>{props.title}</Text>
                { hasNewNotification ? <HasNewNotificationIcon /> : <NotificationIcon /> }
            </View>
            { props.showFilter &&
            <Pressable style={ styles.filter } onPress={() => { setShowFilterOptions(!showFilterOptions) }}>
                <View style={ styles.filterSelector } >
                    <Text style={ styles.filterText }>Filter by</Text>
                    <Text>Icon</Text>
                </View>
                <Text style={ styles.filterPill }>{ chosenFilter }</Text>
            </Pressable>}
            { showFilterOptions ? 
                <View style={ styles.filterOptions }>
                    <View style={styles.optionGroup}>
                        <Text style={ styles.optionGroupTitle }>Activity</Text>
                        <View style={styles.row}>
                            <Pressable style={ styles.filterOption } onPress={() => { setChosenFilter('Most Relevant'); setShowFilterOptions(false) }}>
                                <Text style={ styles.filterPill }>Most Recent</Text>
                            </Pressable>
                            <Pressable style={ styles.filterOption } onPress={() => { setChosenFilter('Most Relevant'); setShowFilterOptions(false) }}>
                                <Text style={ styles.filterPill }>Most Relevant</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.optionGroup}>
                        <Text style={ styles.optionGroupTitle }>Ranking</Text>
                        <View style={styles.row}>
                            <Pressable style={ styles.filterOption } onPress={() => { setChosenFilter('Highest to lowest'); setShowFilterOptions(false) }}>
                                <Text style={ styles.filterPill }>Highest to lowest</Text>
                            </Pressable>
                            <Pressable style={ styles.filterOption } onPress={() => { setChosenFilter('Lowest to highest'); setShowFilterOptions(false) }}>
                                <Text style={ styles.filterPill }>Lowest to highest</Text>
                            </Pressable>
                        </View>
                    </View>
                </View> 
                : null 
            }


        </View>
    );
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    container: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        padding: 10,
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
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
    },
    filterSelector: {
        flexDirection: 'row',
    },

    filterPill: {
        fontSize: 12,
        padding: 4,
        
        
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
    },

    filterOptions: {

    },
    filterOption: {

    },
    

  });

export default TopFilter;
