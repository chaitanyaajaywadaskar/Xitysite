import { View, FlatList } from 'react-native'
import React from 'react'
import Icons from './Icons/IconsSet';
const DATA = [
    {
        id: 'S1',
    },
    {
        id: 'S2',
    },
    {
        id: 'S3',
    },
    {
        id: 'S4',
    },
    {
        id: 'S5',
    },
];
const StarsImage = ({ size, mLeft = 0 }) => {
    return (
        <View>
            <FlatList data={DATA}
                renderItem={
                    ({ item, index }) => <Icons.FontAwesome name={'star'} size={size} color='gold' style={{ alignSelf: 'center', marginLeft: mLeft }} />
                }
                scrollEnabled={false}
                horizontal={true}
                keyExtractor={item => item.id} />

        </View>
    )
}

export default StarsImage