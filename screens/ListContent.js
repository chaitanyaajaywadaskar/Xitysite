import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListContent = ({ num, title }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.numheading}>{num}.</Text>
            <Text style={styles.heading}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    heading: {
        fontSize: 13,
        fontWeight: '700',
        color: 'black',
        alignSelf: 'center',
        marginLeft: 6

    },
    numheading: {
        color: 'black',
        fontSize: 12,
        fontWeight: '700',

    }
})
export default ListContent