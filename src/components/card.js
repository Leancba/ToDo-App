import React from 'react';
import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native"
import CheckBox from 'expo-checkbox';
import { Entypo } from '@expo/vector-icons';

export default function Card(props) {

    
    return <Pressable style={styles.view} onLongPress={() => props.deleteItem(props.index)}>
        <CheckBox style={styles.checkbox}
            color= 'lightblue'
            value={props.data.isSelected}
            onValueChange={(value) => props.setIsSelected(props.index, value)}
        />
        <Text style={{...styles.text, textDecorationLine: props.data.isSelected ? "line-through" : "none"}}>{props.data.text}</Text>
        <TouchableOpacity style= {{position:'absolute', left: '100%'}}
        onPress={() => props.deleteItem(props.index)}  >
        <Entypo name="trash" size={24} color="black" />
        </TouchableOpacity>
        
    </Pressable>
}

const styles = StyleSheet.create({
    view: {
        elevation: 2, 
        shadowRadius:12 ,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 19,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba( 255, 255, 255, 0.5)',
        marginBottom: 15
    },
    text: {
        fontSize: 20,
        color: 'black'
    },
    checkbox: {
        marginRight: 15,
        color: 'black'
        
    }
})