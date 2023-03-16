import { View, Text } from 'react-native'
import Icons from './Icons/IconsSet';
import Spacer, { SpacerHorizontal } from './spacer';
import { size } from './size';
import Hammer from '../images/hammericon.svg'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const DrawerFifthInsideItem = ({ Title, isHighlighted }) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 5, alignItems: 'center' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Hammer width={20} height={20} />
                <SpacerHorizontal size={size.lg} />
                <Text style={{ color: isHighlighted ? 'white' : '#D1D1D1', fontSize: responsiveFontSize(1.8) }}>{Title}</Text>
            </View>

        </View>
    )
}

export default DrawerFifthInsideItem