import { TouchableOpacity, Text, Image } from 'react-native'
import React from 'react'
import { SpacerHorizontal } from './spacer'
import { size } from './size'

const ExpandIconButton = ({ name, onPress, Img, isBig, isDark, isThereText = true }) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ backgroundColor: isDark ? '#0C3982' : '#8BB7FF', flexDirection: 'row', paddingHorizontal: 12, paddingVertical: isBig ? 13 : 10, borderRadius: 8 }}>
            <Image source={Img} resizeMode='contain' style={{ width: isBig ? 20 : 15, height: isBig ? 20 : 15, alignSelf: 'center' }} />
            {isThereText && <SpacerHorizontal size={size.sm} />}
            {isThereText && <Text style={{ color: 'white', fontWeight: '700', fontSize: isBig ? 16 : 14, }}>{name}</Text>}
        </TouchableOpacity>
    )
}

export default ExpandIconButton