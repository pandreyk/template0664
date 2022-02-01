import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'
import { moderateVerticalScale } from 'react-native-size-matters'
import HomeStack from 'navigation/App/homeStack'
import { BottomTabParams } from 'navigation/types'
import ProfileScreen from 'screens/Profile'
import { Text } from 'generic/Text'

const Tab = createBottomTabNavigator<BottomTabParams>()

const AppNav = () => {
  const { t } = useTranslation()

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HOME_STACK'}
        component={HomeStack}
        options={{
          title: t('Home'),
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>H</Text>
          ),
          tabBarLabel: ({ color }) => (
            <Text
              type={'ct'}
              style={{ color, marginBottom: moderateVerticalScale(2) }}
            >
              {t('Home')}
            </Text>
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
            <Text style={{ color, fontSize: size }}>P</Text>
          ),
          tabBarLabel: ({ color }) => (
            <Text
              type={'ct'}
              style={{ color, marginBottom: moderateVerticalScale(2) }}
            >
              {t('Profile')}
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNav
