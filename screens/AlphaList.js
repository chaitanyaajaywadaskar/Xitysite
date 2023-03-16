import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const AlphaList = ({ alpha, subtitle }) => {
    return (
        <View style={{ flexDirection: 'row', marginLeft: 5 }}>
            <Text style={styles.numheading}>{alpha}</Text>

            <Text style={styles.heading}>{subtitle}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 12,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'center',
        marginLeft: 10
    },
    numheading: {
        color: 'black',
        marginLeft: 10,
        fontSize: 14,
    }
})

export default AlphaList