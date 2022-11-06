import { React } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import TelegramIcon from '../assets/Front_End_Materials_2/TelegramIcon';
import InstagramIcon from '../assets/Front_End_Materials_2/InstagramIcon';
import OtherLinkIcon from '../assets/Front_End_Materials_2/OtherLinkIcon';

const NftCard = ({contactCard}) => {

    return (
        <View style={styles.container}>
            <Image
                style={styles.contactImg}
                source={{uri: contactCard.nftImageUrl}}
            />
            <View style={styles.imgOverlay}>
                <Text style={styles.contactName}>{contactCard.name}</Text>
                <Text style={styles.contactENS}>{contactCard.ens}</Text>
                <Text style={styles.cardtype}>{contactCard.type}</Text>
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
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 400,
    },
    contactImg: {
        width: '100%',
        height: '100%',
    },
    imgOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },

    contactName: {
        fontSize: 20,
    },

    contactENS: {
        fontSize: 20,

    },
    cardtype: {
        fontSize: 20,

    },
        
    socialIcons: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },

    socialIcon: {
        margin: 5,
    }

  });

export default NftCard;
