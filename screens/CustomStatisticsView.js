import { View, Text } from 'react-native'
import React from 'react'
import Spacer, { SpacerHorizontal } from './spacer'
import Icons from './Icons/IconsSet';
import { size } from './size';

const CustomStatisticsView = ({ Title, Num }) => {
  return (
    <View style={{ backgroundColor: '#F9F9F9', marginBottom: 10, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center', borderRadius: 6, paddingHorizontal: 15, paddingVertical: 8 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ borderRadius: 25, padding: 6, borderColor: '#BBBBBB', borderWidth: 1, }}>
          <Icons.AntDesign name={'star'} size={20} color='#0C3982' style={{ alignSelf: 'center' }} />
        </View>
        <SpacerHorizontal size={size.mid} />
        <Text style={{ fontSize: 16, fontWeight: '600' }}>{Title}</Text>
      </View>
      <Text style={{ fontWeight: '700', fontSize: 16 }}>{Num}</Text>
    </View>
  )
}

export default CustomStatisticsView