import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthStackParams } from 'navigation/types'
import LoginScreen from 'screens/Login'
import SetupAddressScreen from 'screens/SetupAddress'

const Stack = createStackNavigator<AuthStackParams>()

const AuthStack = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'SETUP_ADDRESS_PATH'}
        options={{
          title: t('SetupAddressScreen'),
          headerTitleAlign: 'center',
        }}
        component={SetupAddressScreen}
      />
      <Stack.Screen
        name={'LOGIN_PATH'}
        options={({ navigation }) => ({
          title: t('LoginScreen'),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Text>{'<<<<<<'}</Text>
            </TouchableOpacity>
          ),
        })}
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthStack
