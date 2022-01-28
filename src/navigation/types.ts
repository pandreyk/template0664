import { FC } from 'react'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
  HOME_PATH: undefined
  DETAIL_PATH: { DetailId: string }
}

export type ScreenNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>

export type ScreenRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>

export type Props<T extends keyof RootStackParamList> = {
  route: ScreenRouteProp<T>
  navigation: ScreenNavigationProp<T>
}

export type ScreenProps<T extends keyof RootStackParamList> = FC<Props<T>>
