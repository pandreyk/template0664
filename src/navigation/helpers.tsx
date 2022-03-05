import React from 'react'
import { ParamListBase } from '@react-navigation/native'
import {
  StackNavigationOptions,
  StackScreenProps,
} from '@react-navigation/stack/lib/typescript/src/types'
import { StackHeaderOptions } from '@react-navigation/stack/src/types'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { margins, paddings } from 'generic/styles'
import { ThemeColor } from 'generic/types'
import { BackArrow } from 'icons/BackArrow'

type MyOptions = StackNavigationOptions & {
  backButton?: boolean
}

export const setStackScreenOptions = <T extends ParamListBase>(
  props: StackScreenProps<T, keyof T>,
  colors: ThemeColor,
  options?: MyOptions,
): StackNavigationOptions => {
  const { navigation } = props
  const backButton = options?.backButton

  return {
    headerTitleAlign: 'center',
    headerLeft: () =>
      backButton && (
        <TouchableOpacity
          style={[margins.h10, paddings.a5]}
          onPress={() => {
            navigation.goBack()
          }}
        >
          <BackArrow fill={colors.secondary} />
        </TouchableOpacity>
      ),
    ...options,
  }
}

export const setStackNavigatorOptions = <T extends ParamListBase>(
  props: StackScreenProps<T, keyof T>,
  colors: ThemeColor,
  options?: StackHeaderOptions,
): StackHeaderOptions => {
  return {
    headerStyle: {
      backgroundColor: colors.thirdLight,
      elevation: 0,
    },
    headerTintColor: colors.text,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    ...options,
  }
}
