import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Subscribebutton = ({ content }) => {
    return (
        <View>
            <TouchableOpacity style={styles.button} >
                <Text style={{ color: 'white', fontWeight: '500', fontSize: 18 }}>{content}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 9,
        paddingHorizontal: 50,
        padding: 12,
        alignSelf: 'center',
        backgroundColor: '#012C72',
        margin: 25
    },
})
export default Subscribebutton