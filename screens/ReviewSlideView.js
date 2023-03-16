import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SpacerHorizontal } from './spacer';
import { size } from './size';
import Thum from '../images/thum.png'
import SliderBase from '@react-native-community/slider';

const ReviewSlideView = ({ Title }) => {
    const [sliderValue, setSliderValue] = useState(0);

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ width: 80 }} >{Title}</Text>
                <SpacerHorizontal size={size.mid} />

                <SliderBase
                    style={{ marginVertical: 5, width: '60%' }}
                    minimumValue={0}
                    maximumValue={1}
                    onValueChange={(value) => {
                        setSliderValue(value);
                    }}
                    value={sliderValue}
                    minimumTrackTintColor="#0C3982"
                    maximumTrackTintColor="#EFEFEF"
                    thumbTintColor='#4286F5'
                    thumbImage={Thum}
                /></View>
            <Text> 5.0</Text>
        </View>
    )
}

export default ReviewSlideView