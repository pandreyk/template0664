import { FC } from 'react'
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Root Navigation
export type RootStackParams = {
  AUTH_NAVIGATOR: undefined
  APP_NAVIGATOR: undefined
}

// Auth Navigation
export type AuthStackParams = RootStackParams & {
  SETUP_ADDRESS_PATH: undefined
  LOGIN_PATH: undefined
}

// App Navigation
export type AppStackParams = RootStackParams & {
  HOME_PATH: undefined
  DETAIL_PATH: { DetailId: string }
}

// Auth Screen Props
type AuthProps<T extends keyof AuthStackParams> = {
  navigation: StackNavigationProp<AuthStackParams, T>
  route: RouteProp<AuthStackParams, T>
}
export type AuthScreenProps<T extends keyof AuthStackParams> = FC<AuthProps<T>>

// App Screen Props
type AppProps<T extends keyof AppStackParams> = {
  navigation: StackNavigationProp<AppStackParams, T>
  route: RouteProp<AppStackParams, T>
}
export type ScreenProps<T extends keyof AppStackParams> = FC<AppProps<T>>

// Universal Screen Props
type uPaths = keyof AppStackParams | keyof AuthStackParams
type uNavParams = AppStackParams & AuthStackParams
type uProps<T extends uPaths> = {
  navigation: StackNavigationProp<uNavParams, T>
  route: RouteProp<uNavParams, T>
}
export type uScreenProps<T extends uPaths> = FC<uProps<T>>
