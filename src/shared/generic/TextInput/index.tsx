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
  return (
    <View style={style}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        placeholderTextColor={colors.grey}
        style={[styles.input, inputStyle]}
        {...props}
      />
      {error && isTouched && <Text>{error}</Text>}
    </View>
  )
}
