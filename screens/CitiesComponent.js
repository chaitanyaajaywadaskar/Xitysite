import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';

const CitiesComponent = ({ city, Image }) => {
    return (
        <View style={styles.mainView}>
            <View style={{ flexDirection: 'row' }}>
                {Image}
                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                    <Text style={{ marginBottom: 6, fontWeight: '500', fontSize: 16 }}>{city}</Text>
                    <Text style={{ marginBottom: 10, color: 'black', fontSize: 12 }}>0 Pin Codes</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', elevation: 10, backgroundColor: 'white', paddingHorizontal: 25, paddingVertical: 8, borderRadius: 5 }}>
                        <Text style={{ color: 'black', marginRight: 5 }}>Visit</Text>
                        <Icons.AntDesign name={'arrowright'} size={19} color='black' style={{ alignSelf: 'center' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    mainView: {
        height: 160,
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginBottom: 18
    }
})
export default CitiesComponent