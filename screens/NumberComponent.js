import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const NumberComponent = ({ num, title }) => {
    return (
        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
            <Text style={styles.numheading}>{num}.</Text>
            <Text style={styles.heading}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 14,
        fontWeight: '700',
        color: 'black'
    },
    numheading: {
        color: 'black', fontSize: 14,
        fontWeight: '700',
    }
})
export default NumberComponent