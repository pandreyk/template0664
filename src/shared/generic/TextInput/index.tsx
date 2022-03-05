import React from 'react'
import {
  Text,
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Theme } from 'generic/types'
import { colors } from '../themes'
import { styles } from './styles'

export interface TextInputProps extends RNTextInputProps {
  label?: string
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
  error?: string
  isTouched?: boolean
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  style,
  inputStyle,
  error,
  isTouched,
  ...props
}) => {
  const { colors }: Theme = useTheme()

  return (
    <View style={style}>
      {label && (
        <Text style={[styles.label, { color: colors.text }]}>{label}</Text>
      )}
      <RNTextInput
        placeholderTextColor={colors.grey}
        style={[
          styles.input,
          { color: colors.text },
          { borderColor: colors.border },
          inputStyle,
        ]}
        {...props}
      />
      {error && isTouched && <Text>{error}</Text>}
    </View>
  )
}
