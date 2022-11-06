import { React } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TelegramIcon from '../assets/Front_End_Materials_2/TelegramIcon';
import InstagramIcon from '../assets/Front_End_Materials_2/InstagramIcon';
import OtherLinkIcon from '../assets/Front_End_Materials_2/OtherLinkIcon';
import TierOneIcon from '../assets/Flowers/TierOneIcon';
import TierTwoIcon from '../assets/Flowers/TierTwoIcon';
import TierThreeIcon from '../assets/Flowers/TierThreeIcon';

const NftCard = ({contactCard}) => {

    return (
        <View style={styles.container}>
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
                    <Text style={[styles.cardtype, styles.pill]}>{contactCard.type}</Text>
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
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
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
        bottom: 0,
        left: 0,
    },
    pill: {
        fontSize: 12,
        padding: 4,
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
    }, 
    contactLevel: {
        position: 'absolute',
        top: -20,
        right: -12,
    } 

  });

export default NftCard;
