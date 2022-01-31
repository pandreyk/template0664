import React from 'react'
import { View, Button } from 'react-native'
import { AuthScreenProps } from 'navigation/types'
import { setUser } from 'helpers/user'

const LoginScreen: AuthScreenProps<'LOGIN_PATH'> = ({ navigation }) => {
  const login = async () => {
    await setUser('some string')
    navigation.reset({
      index: 0,
      routes: [{ name: 'APP_NAVIGATOR' }],
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title={'LOGIN'} onPress={login} />
    </View>
  )
}

export default LoginScreen
