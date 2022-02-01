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

interface TextInputProps extends RNTextInputProps {
  label?: string
  name?: string
  style?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<TextStyle>
}

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  style,
  inputStyle,
  ...props
}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label || name}</Text>
      <RNTextInput
        placeholderTextColor={colors.grey}
        style={[styles.input, inputStyle]}
        {...props}
      />
    </View>
  )
}
