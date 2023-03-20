import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Listings from '../images/Listings.png'
import Icons from './Icons/IconsSet';


const MultipleImage = ({ num }) => {
    return (
        <View style={styles.subView}>
            <Image source={Listings} style={{ height: 90, width: 90, borderRadius: 6 }} />
            <View>
                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>{num}</Text>
                <Text style={{ fontSize: 18, fontWeight: '500', color: 'black' }}>TownName</Text>
                <Text style={{ fontSize: 14, fontWeight: '500', color: 'black' }}>0 Listings</Text>
            </View>
            <View>
                <TouchableOpacity style={{ borderRadius: 30, height: 60, width: 60, borderWidth: 0.2, borderColor: 'black' }}>
                    <Icons.AntDesign name='arrowright' size={23} color='black' style={{ alignSelf: 'center', marginTop: 15 }} />
                </TouchableOpacity>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({

    subView: {
        borderColor: '#C5C5C5',
        borderWidth: 0.9,
        padding: 12,
        borderRadius: 6,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
})
export default MultipleImage