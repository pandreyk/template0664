import React from 'react'
import { View, Button } from 'react-native'
import { AuthStackProps } from 'navigation/types'

const SetupAddressScreen: React.FC<AuthStackProps<'SETUP_ADDRESS_PATH'>> = ({
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
