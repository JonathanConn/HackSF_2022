import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';


const LoginSuccessful = () => {
    // TODO: maybe fetch from server
    const [userName, setUserName] = useState('Gregory House');

    const [showBox, setShowBox] = useState(true);

    useEffect(() =>{
      const interval = setInterval(() => {
        setShowBox((showBox) => !showBox)
      }, 800);
      return () => {clearInterval(interval)};
    }, []);

    return (
    <View>
        <Text style={ styles.textStyle }>Welcome</Text>
        <View style={styles.nameContainer}>
          <Text style={ styles.textStyle }>{userName}.</Text>
          <View style={ [styles.flashingRectangle, { backgroundColor: showBox ? 'grey' : '#fff' }] }></View>
        </View>

    </View>
    );
}


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'grey',
    },

    flashingRectangle: {
        width: 10,
        height: 30,
        backgroundColor: 'grey',
        alignSelf: 'start',
    },

    nameContainer: {
        flexDirection: 'row',
    }

  });

export default LoginSuccessful;
