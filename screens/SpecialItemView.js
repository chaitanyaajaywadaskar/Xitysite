import { View, Text, Image } from 'react-native'
import React from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import { size } from './size'
import noodles from '../images/noodles.png'
const SpecialItemView = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image source={noodles} style={{ width: 65, height: 65 }} />
            <SpacerHorizontal size={size.mid} />
            <View style={{ flex: 1, justifyContent: 'center' }} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <Text style={{ fontWeight: '700', fontSize: 18, }}>Noodels</Text>
                    <Text style={{ fontWeight: '700', fontSize: 18, }}>$28.00</Text>
                </View>
                <Spacer size={size.sh} />
                <View style={{ borderStyle: 'dashed', borderWidth: 1, borderColor: '#707070' }} />
                <Spacer size={size.sh} />

                <Text style={{ fontSize: 12 }}>
                    Netus et malesuada fames ac turpis egestas.
                </Text>
            </View>
        </View>
    )
}

export default SpecialItemView