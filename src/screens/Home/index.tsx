import React from 'react'
import { View, Button } from 'react-native'
import { ScreenProps } from 'navigation/types'
import { removeUser } from 'helpers/user'

const HomeScreen: ScreenProps<'HOME_PATH'> = ({ navigation }) => {
  const logout = async () => {
    await removeUser()
    navigation.reset({
      index: 0,
      routes: [{ name: 'AUTH_NAVIGATOR' }],
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DETAIL_PATH', { DetailId: '1' })}
      />

      <View style={{ marginTop: 10 }}>
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  )
}

export default HomeScreen
