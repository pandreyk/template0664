import React from 'react'
import { View, Text } from 'react-native'
import { ScreenProps } from 'navigation/types'

const DetailScreen: ScreenProps<'DETAIL_PATH'> = ({
  navigation,
  route: { params },
}) => {
  const { DetailId } = params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Detail ${DetailId} Screen`}</Text>
    </View>
  )
}

export default DetailScreen
