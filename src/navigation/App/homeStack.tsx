import React from 'react'
import { useTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useTranslation } from 'react-i18next'
import {
  setStackNavigatorOptions,
  setStackScreenOptions,
} from 'navigation/helpers'
import { HomeStackParams } from 'navigation/types'
import DetailScreen from 'screens/Detail'
import HomeScreen from 'screens/Home'
import { Theme } from 'generic/types'

const Stack = createStackNavigator<HomeStackParams>()

const HomeStack = () => {
  const { t } = useTranslation()
  const { colors }: Theme = useTheme()

  return (
    <Stack.Navigator
      screenOptions={(props) =>
        setStackNavigatorOptions<HomeStackParams>(props, colors)
      }
    >
      <Stack.Screen
        name={'HOME_PATH'}
        component={HomeScreen}
        options={(props) =>
          setStackScreenOptions<HomeStackParams>(props, colors, {
            title: t('HomeScreen'),
          })
        }
      />
      <Stack.Screen
        name={'DETAIL_PATH'}
        component={DetailScreen}
        options={(props) =>
          setStackScreenOptions<HomeStackParams>(props, colors, {
            title: t('DetailScreen'),
          })
        }
      />
    </Stack.Navigator>
  )
}

export default HomeStack
