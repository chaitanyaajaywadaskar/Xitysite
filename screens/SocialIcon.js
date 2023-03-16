import { Image } from 'react-native'
import React from 'react'

const SocialIcon = ({ Img }) => {
    return (
        <Image source={Img} style={{
            height: 40,
            width: 40,
            marginHorizontal: 5,
            borderRadius: 8,
        }} />
    )
}

export default SocialIcon