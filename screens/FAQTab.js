import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Suggestionsblock from './Suggestionsblock'
import BottomPage from './BottomPage'

const FAQTab = () => {
    return (
        <View style={{ marginRight: 15, marginLeft: 15 }}>
            <View style={{ borderRadius: 5, marginBottom: 10, padding: 8, backgroundColor: '#FFFFFF', alignSelf: 'center', height: 110, width: 330, }}>
                <Text style={{ color: 'black', alignItems: 'center' }}>
                    Lorem ipsum dolor sit amet, consectetur adipsicing elit, sed do eiusmod tempor incididunt ut labore Etiamdolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </Text>
            </View>
            <Suggestionsblock />
            <Suggestionsblock />
            <View style={{ marginBottom: 40 }}></View>
            <Text style={{ fontSize: 25, fontWeight: '600', color: '#0C3982', alignSelf: 'center' }}>Still Need Help ?</Text>
            <View style={styles.hmargin}></View>

            <BottomPage />

        </View>
    )
}

const styles = StyleSheet.create({
    hmargin: {
        borderWidth: 1.5,
        borderColor: "#4286F5",
        borderRadius: 10,
        margin: 10,
        alignSelf: 'center',
        width: 80,
        marginBottom: 30
    }
})
export default FAQTab

