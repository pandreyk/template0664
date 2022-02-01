import React from 'react'
import { View, Button } from 'react-native'
import { TabProps } from 'navigation/types'
import { removeUser } from 'helpers/user'

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
        <Button title="Logout" onPress={logout} />
      </View>
    </View>
  )
}

export default ProfileScreen
