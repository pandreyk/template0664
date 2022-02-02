import React from 'react'
import { FormikProps } from 'formik/dist/types'
import { TextInput, TextInputProps } from 'generic/TextInput'

type TextInputFieldProps = FormikProps<any> &
  TextInputProps & {
    name: string
  }

export const TextInputField = ({
  name,
  handleChange,
  handleBlur,
  ...rest
}: TextInputFieldProps) => {
  const value = rest.values[name]
  const error = rest.errors[name]?.toString()
  const touched = Boolean(rest.touched[name])

  return (
    <TextInput
      value={value}
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      error={error}
      isTouched={touched}
      {...rest}
    />
  )
}
