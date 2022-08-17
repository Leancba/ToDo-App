import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, Platform, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"
import  Card  from "../components/card"

import { MaterialIcons } from '@expo/vector-icons';

export default function Homepage() {

    //State variables
    const [list, setList] = useState([])
    const [value, setValue] = useState("")

    // A function that add data to the list array
    function addText(text) {
        if (value !== "") {
            setList(prev => {
                return [
                    ...prev,
                    { text: text, isSelected: false } // Adding a JS Object
                ]
            })
            setValue("")
        } else {
            alert("Please type in something!")
        }
    }

    // A function that set the value of isSelected based on the state of the checkbox
    function setIsSelected(index, value) {
        let data = []

        // Making a deep copy of the list array
        for (let i = 0; i < list.length; i++) {
            if (index === i) {
                data.push({ ...list[i], isSelected: value }) // Updating the object at position i === index
            } else {
                data.push(list[i])
            }
        }

        setList(data) // Setting the new state
    }

    // A function that delete an item at position idx from the list array
    function deleteItem(idx) {
        Alert.alert(
            "Delete Item",
            "Are you sure you want to delete this item?",
            [
                {
                    text: "Cancel",
                    
                },
                {
                    text: "Yes", onPress: () => {
                        const data = list.filter((item, index) => index !== idx)
                        setList(data)
                    }
                }
            ])
    }


    return <View style={styles.container}>
        <Text style={{ fontSize: 25, color: 'black', marginBottom: 15, textAlign:'center', fontWeight: '700'}}>Today's task</Text>
        
        <FlatList style={{ marginBottom: 50}}
            data={list}
            renderItem={({ item, index }) => <Card data={item} index={index} setIsSelected={setIsSelected} deleteItem={deleteItem} />}
            keyExtractor={(item, index) => index.toString()}
        />
        

        <View style={styles.textBoxWrapper}>
            <TextInput
                style={styles.textInput}
                placeholder="New Task"
                placeholderTextColor='rgba(000, 000, 000, .3)'
                onChangeText={text => setValue(text)}
                value={value}/>
                <TouchableOpacity 
                onPress={() => addText(value)}>
                <MaterialIcons name="add-task" size={30} color="black" 
                
                />
                </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? 40 : StatusBar.currentHeight + 10,
        flex: 1,
        backgroundColor: 'rgba( 173, 216, 230, 0.3)',
        padding: 18
    },
    textBoxWrapper: {
        width: "105%",
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 18
    },
    textInput: {
        fontWeight:'500',
        elevation: 1,
        borderRadius: 25,
        backgroundColor: 'rgba(255,255,255, .5)',
        height: 42,
        paddingLeft: 15,
        width: "90%",
        color: 'black',
        marginRight: 15,
        fontSize : 20
    },
    btn: {
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 12 },
        shadowRadius: 12,
        backgroundColor: 'red',
        height: 42,
        width: 42,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
    }
})
