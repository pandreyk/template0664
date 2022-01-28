import React from 'react'
import { View, Text, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useTranslation } from 'react-i18next'
import env from 'react-native-config'
import { RootStackParamList, ScreenProps } from './navigation/types'
import './i18n/config'

const HomeScreen: ScreenProps<'HOME_PATH'> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('DETAIL_PATH', { DetailId: '1' })}
      />
    </View>
  )
}

const DetailScreen: ScreenProps<'DETAIL_PATH'> = ({
  navigation,
  route: { params },
}) => {
  const { DetailId } = params

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Detail ${DetailId} Screen`}</Text>
    </View>
  )
}

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
  const { t } = useTranslation()

  console.log('env', env.PEPEGA)

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  )
}

export default App
