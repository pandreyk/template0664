import { NavigatorScreenParams, RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

// Root Navigation
export type RootStackParams = {
  AUTH_NAVIGATOR: undefined
  APP_NAVIGATOR: undefined
}

//-----------------------------------------------------------------------------

// Auth Navigation
export type AuthStackParams = RootStackParams & {
  SETUP_ADDRESS_PATH: undefined
  LOGIN_PATH: undefined
}

// App Navigation
export type BottomTabParams = RootStackParams & {
  HOME_STACK: NavigatorScreenParams<AuthStackParams>
  PROFILE_PATH: undefined
}

// App Navigation
export type HomeStackParams = RootStackParams & {
  HOME_PATH: undefined
  DETAIL_PATH: { DetailId: string }
}

//-----------------------------------------------------------------------------

// Auth Screen Props
export type AuthStackProps<T extends keyof AuthStackParams> = {
  navigation: StackNavigationProp<AuthStackParams, T>
  route: RouteProp<AuthStackParams, T>
}

// App Tab Screen Props
export type TabProps<T extends keyof BottomTabParams> = {
  navigation: StackNavigationProp<BottomTabParams, T>
  route: RouteProp<BottomTabParams, T>
}

// App Screen Props
export type HomeProps<T extends keyof HomeStackParams> = {
  navigation: StackNavigationProp<HomeStackParams, T>
  route: RouteProp<HomeStackParams, T>
}
