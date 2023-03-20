import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Contents = ({ title, isThereLine }) => {
    return (
        <View style={{ marginBottom: 15 }}>
            <Text style={styles.headingText}>{title}</Text>
            <Text style={styles.numText}>0</Text>
            {isThereLine &&
                <View style={{ alignItems: 'center', borderWidth: 0.6, width: 320, height: 0.1, borderColor: '#C5C5C5' }}></View>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    headingText: {
        color: 'black',
        fontSize: 28, fontWeight: '600'
    },
    numText: {
        fontSize: 33,
        color: '#4286F5',
        fontWeight: '700',
        marginBottom: 12
    }
})
export default Contents 
