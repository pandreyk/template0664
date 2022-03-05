import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTheme } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { moderateVerticalScale } from 'react-native-size-matters'
import HomeStack from 'navigation/App/homeStack'
import { BottomTabParams } from 'navigation/types'
import ProfileScreen from 'screens/Profile'
import { Text } from 'generic/Text'
import { Theme } from 'generic/types'
import { Home } from 'icons/Home'
import { Profile } from 'icons/Profile'

const Tab = createBottomTabNavigator<BottomTabParams>()

const AppNav = () => {
  const { colors }: Theme = useTheme()
  const { t } = useTranslation()

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.secondary,
        inactiveTintColor: colors.text,
        style: {
          borderTopColor: colors.grey,
          backgroundColor: colors.thirdLight,
          elevation: 0,
          // height: moderateVerticalScale(50),
        },
        showLabel: false,
      }}
    >
      <Tab.Screen
        name={'HOME_STACK'}
        component={HomeStack}
        options={{
          title: t('Home'),
          tabBarIcon: ({ color, size }) => (
            <Home fill={color} width={size} height={size} />
          ),

          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name={'PROFILE_PATH'}
        component={ProfileScreen}
        options={{
          title: t('Profile'),
          tabBarIcon: ({ color, size }) => (
            <Profile fill={color} width={size} height={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNav
