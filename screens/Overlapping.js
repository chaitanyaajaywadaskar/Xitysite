import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const Overlapping = ({ overlaytitle, title }) => {
    return (
        <View style={{ height: 50, alignSelf: 'center' }}>
            <Text style={{ color: '#DFEBFF', fontWeight: '700', fontSize: responsiveFontSize(3.5) }}>{overlaytitle}</Text>
            <Text style={{ color: '#0C3982', fontWeight: '700', position: 'absolute', fontSize: responsiveFontSize(2.4), alignSelf: 'center', paddingTop: 5 }}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default Overlapping