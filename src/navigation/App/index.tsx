import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AppStackParams } from 'navigation/types'
import DetailScreen from 'screens/Detail'
import HomeScreen from 'screens/Home'

const Stack = createStackNavigator<AppStackParams>()

const AppStack = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HOME_PATH'}
        options={{
          title: t('HomeScreen'),
          headerTitleAlign: 'center',
        }}
        component={HomeScreen}
      />
      <Stack.Screen
        name={'DETAIL_PATH'}
        options={({ navigation }) => ({
          title: t('DetailScreen'),
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
        component={DetailScreen}
      />
    </Stack.Navigator>
  )
}

export default AppStack
