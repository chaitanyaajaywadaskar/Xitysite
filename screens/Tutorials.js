import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

import Suggestionsblock from './Suggestionsblock'
import BottomPage from './BottomPage'
import DiningHall from './DiningHall'
import Suggestions from './Suggestions'

const Tutorials = () => {
    return (
        <View style={{ marginLeft: 10, marginRight: 10 }}>
            <DiningHall />
            <DiningHall />
            <DiningHall />
            <Suggestionsblock />
            <View style={{ marginBottom: 40 }}></View>
            <Text style={{ fontSize: 25, fontWeight: '600', color: '#0C3982', alignSelf: 'center' }}>Still Need Help ?</Text>
            <View style={styles.smallmargin}></View>
            <BottomPage />
        </View>
    )
}

const styles = StyleSheet.create({
    hmargin: {
        borderWidth: 0.8,
        borderColor: "#BBBBBB",
        borderRadius: 10,
        margin: 13,
        alignItems: 'center',
        width: 325,


    },

    smallmargin: {
        borderWidth: 1.5,
        borderColor: "#4286F5",
        borderRadius: 10,
        margin: 10,
        alignSelf: 'center',
        width: 80,
        marginBottom: 30
    }
})

export default Tutorials