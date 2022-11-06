import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Pill = ({pillText, onPressHandler, backgroundColor, color}) => {

    return (
        <Pressable onPress={() => { () => {onPressHandler} }}>
            <Text style={ [styles.pill, {borderColor:{color}}, {color:{color}}, {backgroundColor:{backgroundColor}}] }>{pillText}</Text>
        </Pressable>
    );
}


const styles = StyleSheet.create({
    pill: {
        fontSize: 12,
        padding: 4,
        
        borderRadius: 10,
        borderWidth: 1,
    },

  });

export default Pill;
