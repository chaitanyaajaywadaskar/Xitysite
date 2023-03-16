import { View, Text, Image } from 'react-native'
import React from 'react'
import { SpacerHorizontal } from './spacer'
import { size } from './size'
import Icons from './Icons/IconsSet';

const PromotedListningItem = ({ Img }) => {
    return (
        <>
            <View style={{ alignSelf: 'flex-end', backgroundColor: '#0C3982', height: 25, width: 25, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}>
                <Text style={{ fontSize: 8, color: 'white', fontWeight: '800' }}>3.5</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>

                <Image source={Img} style={{ width: 70, height: 70, borderRadius: 5 }} />
                <SpacerHorizontal size={size.sm} />
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: '700' }}>Iconic Cafe</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Icons.Ionicons name={'location-sharp'} size={18} color='#4286F5' style={{ alignSelf: 'center' }} />

                        <Text>27th Brooklyn New York, USA</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default PromotedListningItem