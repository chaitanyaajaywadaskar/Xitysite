import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react';
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const RadioButtons = () => {
    const [selectedRadio, setSelectedRadio] = useState(1)
    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setSelectedRadio(1)}>
                    <View style={styles.radioWrapper}>
                        {selectedRadio === 1 ?
                            <View style={styles.radiobg}>
                            </View> : null}

                    </View>
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2) }}>
                    Questions
                </Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setSelectedRadio(2)}>
                    <View style={styles.radioWrapper}>
                        {selectedRadio === 2 ?
                            <View style={styles.radiobg}>
                            </View> : null}
                    </View>
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2) }}>
                    Comments
                </Text>
            </View>

            <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => setSelectedRadio(3)}>
                    <View style={styles.radioWrapper}>
                        {selectedRadio === 3 ?
                            <View style={styles.radiobg}>
                            </View> : null}
                    </View>
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: responsiveFontSize(2.2), }}>
                    Suggestions
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    radioWrapper: {
        height: 25,
        width: 25,
        borderRadius: 15,
        borderWidth: 3,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    radiobg: {
        height: 12,
        width: 12,
        borderRadius: 10,
        backgroundColor: 'white',

    },
    main: {
        marginTop: 25,
    }
})
export default RadioButtons