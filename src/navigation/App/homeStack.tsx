import React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HomeStackParams } from 'navigation/types'
import DetailScreen from 'screens/Detail'
import HomeScreen from 'screens/Home'

const Stack = createStackNavigator<HomeStackParams>()

const HomeStack = () => {
  const { t } = useTranslation()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HOME_PATH'}
        component={HomeScreen}
        options={{
          title: t('HomeScreen'),
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name={'DETAIL_PATH'}
        component={DetailScreen}
        options={({ navigation }) => ({
          title: t('DetailScreen'),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
              style={{ paddingHorizontal: 16 }}
              onPress={() => {
                navigation.goBack()
              }}
            >
              <Text style={{ fontSize: 30 }}>{'<'}</Text>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  )
}

export default HomeStack
