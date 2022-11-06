import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import AppHeader from '../components/AppHeader';
import HandShakeArrowDownIcon from '../assets/HandShakeArrowDownIcon';
import Pill from '../components/Pill';


const HndshkPage = () => {
    const [showDropDown, setShowDropDown] = useState(false)
    const [selectedCard, setSelectedCard] = useState(null)

    return (
        <View style={styles.container}>
            <AppHeader title={"Hndshk."} />
                <View style={styles.content}>
                    <Text style={styles.textBeforeType}>
                        You are shaking your
                    </Text>
                    <Pressable onPress={() => setShowDropDown(!showDropDown)}>
                      <View style={styles.row}>
                          <View style={styles.typePlaceHolder}></View>
                          <Text style={styles.textAfterType}>
                              Card
                          </Text>
                          {/* <HandShakeArrowDownIcon style={styles.arrowIcon} /> */}
                      </View>
                    </Pressable>
                    {showDropDown &&
                      <View>
                          <Pill spaced xlarge text={"Professional"} bgColor={ "#E2EFFF" } onPressHandler={() => { setSelectedCard('Professional') }}/>
                          <Pill spaced xlarge text={"Social"} bgColor="#F0E9FF" onPressHandler={() => { setSelectedCard('Social') }}/>
                          <Pill spaced xlarge text={"Experience"} bgColor="#FFE6DC" onPressHandler={() => { setSelectedCard('Experience') }}/>
                      </View>
                    }
                </View>

        </View>
    );
}


const styles = StyleSheet.create({
  container: {
    height: '100%',
    
  },
  content: {
    margin: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  typePlaceHolder: {
    height: 30,
    width: 100,
    borderBottomWidth: 3,
    borderBottomColor: "#C7ACFE",
    position: 'relative',
    bottom: 0,
    left: 0,
  },
  textBeforeType: {
    fontSize: 30,
  },
  
  textAfterType: {
    marginLeft: 8,
    color: "#C7ACFE",
    fontWeight: "bold",
    fontSize: 30,
  },
  arrowIcon: {
    Left: 8,
  },


});

export default HndshkPage;
