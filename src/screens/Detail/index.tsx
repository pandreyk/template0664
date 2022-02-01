import React, { useCallback } from 'react'
import { View, Text, Button, Linking, Alert } from 'react-native'
import { HomeProps } from 'navigation/types'

const DetailScreen: React.FC<HomeProps<'DETAIL_PATH'>> = ({
  navigation,
  route: { params },
}) => {
  const { DetailId } = params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Detail ${DetailId} Screen`}</Text>
      <Button
        title={'Go to waze'}
        onPress={() =>
          Linking.openURL(
            'https://ul.waze.com/ul?ll=56.82860001%2C60.60015188&navigate=yes&zoom=17&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location',
          )
        }
      />
    </View>
  )
}

export default DetailScreen
