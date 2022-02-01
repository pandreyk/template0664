import React from 'react'
import { View } from 'react-native'
import { AuthStackProps } from 'navigation/types'
import { setUser } from 'helpers/user'
import { Button } from 'generic/Button'
import { margins } from 'generic/styles'
import { TextInput } from 'generic/TextInput'

const LoginScreen: React.FC<AuthStackProps<'LOGIN_PATH'>> = ({
  navigation,
}) => {
  const login = async () => {
    await setUser('some string')
    navigation.reset({
      index: 0,
      routes: [{ name: 'APP_NAVIGATOR' }],
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        name={'username'}
        label={'username'}
        placeholder={'username'}
        style={margins.a10}
      />
      <TextInput
        name={'password'}
        label={'password'}
        placeholder={'password'}
        secureTextEntry={true}
        style={margins.a10}
      />
      <Button onPress={login} style={margins.a10}>
        Go to LOGIN
      </Button>
    </View>
  )
}

export default LoginScreen
