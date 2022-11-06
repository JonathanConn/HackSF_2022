import { React, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Pill from './Pill';
import AppHeader from './AppHeader';
import TriangleDownIcon from '../assets/TriangleDownIcon';
import TriangleUpIcon from '../assets/TriangleUpIcon';

const TopFilter = () => {
    const [hasNewNotification, setHasNewNotification] = useState(false);
    const [chosenFilter, setChosenFilter] = useState('Most Recent');
    const [showFilterOptions, setShowFilterOptions] = useState(false);

    return (
        <AppHeader title="Your Contacts." extension=
        {
            <View>
                <Pressable style={ styles.filter } onPress={() => { setShowFilterOptions(!showFilterOptions) }}>
                    <View style={ styles.filterSelector } >
                        <Text style={ styles.filterText }>Filter by</Text>
                        { showFilterOptions ? <TriangleUpIcon /> : <TriangleDownIcon /> }
                    </View>
                    <Pill spaced text={chosenFilter} bgColor={"#E2EFFF"}/>
                </Pressable>
                { showFilterOptions ? 
                    <View style={ styles.filterOptions }>
                        <View style={styles.optionGroup}>
                            <Text style={ styles.optionGroupTitle }>Activity</Text>
                            <View style={styles.row}>
                                <Pill spaced text={"Most Recent"} bgColor={ chosenFilter == "Most Recent" ? "#E2EFFF" : "#FFF" } onPressHandler={() => { setChosenFilter('Most Recent'); setShowFilterOptions(false) }}/>
                                <Pill spaced text={"Most Relevant"} bgColor={ chosenFilter == "Most Relevant" ? "#E2EFFF" : "#FFF" } onPressHandler={() => { setChosenFilter('Most Relevant'); setShowFilterOptions(false) }}/>
                            </View>
                        </View>
                        <View style={styles.optionGroup}>
                            <Text style={ styles.optionGroupTitle }>Ranking</Text>
                            <View style={styles.row}>
                                <Pill spaced text={'Highest to lowest'} bgColor={ chosenFilter == 'Highest to lowest' ? "#E2EFFF" : "#FFF" } onPressHandler={() => { setChosenFilter('Highest to lowest'); setShowFilterOptions(false) }}/>
                                <Pill spaced text={'Lowest to highest'} bgColor={ chosenFilter == 'Lowest to highest' ? "#E2EFFF" : "#FFF" } onPressHandler={() => { setChosenFilter('Lowest to highest'); setShowFilterOptions(false) }}/>
                            </View>
                        </View>
                    </View> 
                    : null 
                }
            </View>
        }/>
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
    filter: {
        flexDirection: 'row',
        alignItems: 'center',
        cursor: 'pointer',
    },
    filterSelector: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
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
