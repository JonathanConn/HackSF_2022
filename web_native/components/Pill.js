import { React } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';


const Pill = ({bgColor, color, text, prepend, onPressHandler, large, xlarge, spaced}) => {
    let moreStyles = StyleSheet.create({
        pill: {
            backgroundColor: bgColor,
            color: color,  
            fontSize: 12 + (xlarge ? 12 : large ? 8 : 0),
            paddingVertical: 4 + (xlarge ? 4 : large ? 2 : 0),
            paddingHorizontal: 8 + (xlarge ? 6 : large ? 4 : 0),
            
            borderRadius: 4,
            borderWidth: 1,
            alignSelf: 'flex-start', 
            margin: spaced ? (xlarge || large) ? 8 : 4 : 0,
        }
    });

    return (
        <Pressable style={moreStyles.pill} onPress={onPressHandler != null ? onPressHandler : () => {}}>
            {prepend}
            <Text>{text}</Text>
        </Pressable>
    );
}


export default Pill;
