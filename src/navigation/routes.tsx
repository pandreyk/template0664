import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AppStack from 'navigation/App'
import AuthStack from 'navigation/Auth'
import { RootStackParams } from 'navigation/types'

const Stack = createStackNavigator<RootStackParams>()

interface Routes {
  loading: boolean
  authed: boolean
}

const Navigation = ({ loading, authed }: Routes) => {
  const initialRouteName = authed ? 'APP_NAVIGATOR' : 'AUTH_NAVIGATOR'

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
        <Stack.Screen name={'AUTH_NAVIGATOR'} component={AuthStack} />
        <Stack.Screen name={'APP_NAVIGATOR'} component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
