import React from 'react'
import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useTranslation } from 'react-i18next'
import HomeStack from 'navigation/App/homeStack'
import { BottomTabParams } from 'navigation/types'
import ProfileScreen from 'screens/Profile'

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
            <Text style={{ color, fontSize: 14 }}>{t('Home')}</Text>
          ),
          tabBarBadge: 1,
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
            <Text style={{ color, fontSize: 14 }}>{t('Profile')}</Text>
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default AppNav
