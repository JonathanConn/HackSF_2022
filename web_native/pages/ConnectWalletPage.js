import { React, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button } from 'react-native';
import NftCard from '../components/NftCard';
import TopFilter from '../components/TopFilter';
import Vector3 from '../assets/Front_End_Materials_3/Vector21'
import Vector1 from '../assets/Front_End_Materials_3/Vector24'
import Vector2 from '../assets/Front_End_Materials_3/Vector22'
import Vector4 from '../assets/Front_End_Materials_3/Vector25'
import Vector5 from '../assets/Front_End_Materials_3/Vector27'
import Vector6 from '../assets/Front_End_Materials_3/Vector26'

const ConnectWalletPage = (props) => {

    return (
        <View style={styles.container}>
            
            <Vector6 style={styles.vect6}/>
            <Vector5 style={styles.vect5}/>
            <Vector4 style={styles.vect4}/>
            <Vector3 style={styles.vect3}/>
            <Vector2 style={styles.vect2}/>
            <Vector1 style={styles.vect1}/>
            <View style={styles.welcomeWindow}>
                <Image
                    style={styles.logo}
                    source={require('../assets/Front_End_Materials_3/Group5.png')}
                />
                <Text style={styles.welcomeText}>Welcome</Text >
                <Text style={styles.button} onPress={props.onClick}>
                    Connect your wallet to sign in
                </Text>

            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    button: {
        width: 253,
        height: 78,
        backgroundColor: '#FF824D',
        border: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 4,
        justifyContent: 'center',
        textColor: 'black',
        top: 20,
        alignItems:'center',
        fontSize:24,
        padding:5
    },
    logo: {
        bottom:35,
        height:48,
        width: 43,
    },
    welcomeText: {
        bottom:20,
        width: 167,
        height: 49,
        // fontFamily: 'Proxima-Nova',  //fix this later
        fontSize:40,
    },
    welcomeWindow: {
        position: 'fixed',
        top: '35%',
        width: 303,
        height: 294,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 9
    },
    container: {
        position: 'relative',
        width: '100%',
        height:'100%',
        backgroundColor:'#F8F8F8',
        justifyContent: 'top',
        alignItems:'center'
    },
    vect6: {
        background: '#F8F8F8',
        position: 'absolute',
        top: '10%'
    },
    
    vect5: {
        position: 'absolute',
        top: '10%'
    },
    vect4: {
        position: 'absolute',
        top: '20%'
    },
    vect3: {
        position: 'absolute',
        bottom: '14%'
    },
    vect2: {
        position: 'absolute',
        bottom: '7%'
    },
    vect1: {
        position: 'absolute',
        bottom: '0%',
    },
  });

export default ConnectWalletPage;
