import { React, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import TelegramIcon from '../assets/Front_End_Materials_2/TelegramIcon';
import InstagramIcon from '../assets/Front_End_Materials_2/InstagramIcon';
import OtherLinkIcon from '../assets/Front_End_Materials_2/OtherLinkIcon';
import TierOneIcon from '../assets/Flowers/TierOneIcon';
import TierTwoIcon from '../assets/Flowers/TierTwoIcon';
import TierThreeIcon from '../assets/Flowers/TierThreeIcon';
import Pill from './Pill';
import Card from './Card';


// TODO: would be fetched from the backend
const contactDetails = [
    { id: 1, detailLogo: "coffeeLogo", detailText: "next coffee is on me!" },
    { id: 2, detailLogo: "coffeeLogo", detailText: "next coffee is on me!" },
    { id: 3, detailLogo: "coffeeLogo", detailText: "next coffee is on me!" },
]

const windowWidth = Dimensions.get('window').width;

const Detail = ({detailLogo, detailText}) => {


    return (
        <View style={styles.detail}>
            <Text>{detailLogo}</Text>
            <Text>{detailText}</Text>
        </View>
    );
}

const NftCard = ({contactCard, showDetails}) => {
    const [details, setDetails] = useState(contactDetails);

    return (
        <Card style={styles.container}>
            <View style={styles.nftContainer}>
                <Image
                    style={styles.contactImg}
                    source={{uri: contactCard.nftImageUrl}}
                />
                <View style={styles.imgOverlay}>
                    <Text style={styles.contactName}>{contactCard.name}.</Text>
                    <Text style={styles.contactENS}>{contactCard.ens}</Text>
                    <View style={[styles.row, styles.bottom]}>
                        <View style={styles.socialIcons}>
                            {contactCard.socials.map((social) => {
                                    switch (social){
                                        case 'telegram':
                                            return <View style={styles.socialIcon}><TelegramIcon color={'black'}/></View>
                                        case 'instagram':
                                            return <View style={styles.socialIcon}><InstagramIcon color={'black'}/></View>
                                        default:
                                            return <View style={styles.socialIcon}><OtherLinkIcon color={'black'}/></View>
                                    }
                            })}
                        </View>
                        <Pill text={contactCard.type} bgColor={"white"}/>
                    </View>

                </View>
                <View style={styles.contactLevel}>
                    {/* Display different TierIcon depending of contactCard contactLevel */}
                    {
                        contactCard.contactLevel === 1 ? <TierOneIcon /> :
                        contactCard.contactLevel === 2 ? <TierTwoIcon /> :
                        contactCard.contactLevel === 3 ? <TierThreeIcon /> :
                        null
                    }
                </View>
            </View>
            { showDetails ?
                <View>
                    {details.map((detail) => {
                        return <Detail key={detail.id} detailLogo={detail.detailLogo} detailText={detail.detailText}/>
                    })}
                </View>
                : null
            }
        </Card>
    );
}


const styles = StyleSheet.create({
    nftContainer: {
        width: windowWidth * 0.89,
        height: 400,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        elevation: 5,
    },
    contactImg: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
    },
    imgOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        padding: 8,
    },

    contactName: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
    },

    contactENS: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },
    cardtype: {
        fontSize: 20,

    },

    socialIcons: {
        flexDirection: 'row',
        
    },

    socialIcon: {
        marginRight: 5,
    },

    row: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 
    bottom: {
        position: 'absolute',
        bottom: 8,
        left: 8,
    },
    contactLevel: {
        position: 'absolute',
        top: -20,
        right: -12,
    },
    detail: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    shadowProp: {
        backgroundColor: '#fff',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

  });

export default NftCard;
