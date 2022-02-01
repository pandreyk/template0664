import React from 'react'
import { View } from 'react-native'
import { AuthStackProps } from 'navigation/types'
import { Button } from 'generic/Button'
import { margins } from 'generic/styles'
import { TextInput } from 'generic/TextInput'

const SetupAddressScreen: React.FC<AuthStackProps<'SETUP_ADDRESS_PATH'>> = ({
  navigation,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <TextInput
        name={'port'}
        label={'port'}
        placeholder={'port'}
        style={margins.a10}
      />
      <TextInput
        name={'host'}
        label={'host'}
        placeholder={'host'}
        style={margins.a10}
      />
      <Button
        onPress={() => navigation.navigate('LOGIN_PATH')}
        style={margins.a10}
      >
        Go to LOGIN
      </Button>
    </View>
  )
}

export default SetupAddressScreen
