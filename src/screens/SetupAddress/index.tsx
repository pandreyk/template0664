import React from 'react'
import { View, Button } from 'react-native'
import { AuthScreenProps } from 'navigation/types'

const SetupAddressScreen: AuthScreenProps<'SETUP_ADDRESS_PATH'> = ({
  navigation,
}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to LOGIN"
        onPress={() => navigation.navigate('LOGIN_PATH')}
      />
    </View>
  )
}

export default SetupAddressScreen
