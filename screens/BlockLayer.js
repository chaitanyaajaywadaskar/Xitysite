import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const BlockLayer = ({ Title, subtext, Icon, Image }) => {
    return (
        <View>
            <View style={styles.viewLayer}>
                {Icon}
                {Image}
                <Text style={{ fontSize: 19, fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#3B3B3B', paddingTop: 8 }}>{Title}</Text>
                <Text style={{ fontSize: 15, textAlign: 'center', color: '#3B3B3B' }}>Proin dapibus nisl ornare diam varius tempus. Anenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</Text>
                <View style={{ position: 'absolute', left: 0, right: 0, bottom: - 20, alignItems: 'center' }}>
                    <View style={{ borderRadius: 25, height: 50, width: 50, elevation: 6, backgroundColor: '#FFFFFF', }}>
                        <Text style={{ color: '#4286F5', textAlign: 'center', paddingTop: 12, fontWeight: '500', fontSize: 15 }}>{subtext}</Text>
                    </View></View>
            </View>
            <View style={styles.smallvertical}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    viewLayer: {
        paddingTop: 20,
        backgroundColor: '#F9F9F9',
        borderColor: '#BBBBBB',
        borderWidth: 1,
        height: 250,
        width: 280,
        alignSelf: 'center',
        borderRadius: 11,
        marginBottom: 0, paddingLeft: 12, paddingRight: 12
    },
    smallvertical: {
        marginTop: 18,
        alignSelf: 'center',
        borderColor: '#CFCFCF',
        borderWidth: 0.8,
        height: 45,
        width: 1

    }
});
export default BlockLayer