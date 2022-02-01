import React from 'react'
import { View } from 'react-native'
import { TabProps } from 'navigation/types'
import { removeUser } from 'helpers/user'
import { Button } from 'generic/Button'

const ProfileScreen: React.FC<TabProps<'PROFILE_PATH'>> = ({ navigation }) => {
  const logout = async () => {
    await removeUser()
    navigation.reset({
      index: 0,
      routes: [{ name: 'AUTH_NAVIGATOR' }],
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ marginTop: 10 }}>
        <Button onPress={logout}>LOGOUT</Button>
      </View>
    </View>
  )
}

export default ProfileScreen
