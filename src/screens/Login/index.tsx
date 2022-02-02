import React from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { AuthStackProps } from 'navigation/types'
import { setUser } from 'helpers/user'
import { TextInputField } from 'containers/TextInputField'
import { Button } from 'generic/Button'
import { margins } from 'generic/styles'

interface Values {
  Username: string
  Password: string
}

const LoginScreen: React.FC<AuthStackProps<'LOGIN_PATH'>> = ({
  navigation,
}) => {
  const { t } = useTranslation()

  const initialValues: Values = {
    Username: 'Some User',
    Password: 'qwerty123',
  }

  const validationSchema: Yup.SchemaOf<Values> = Yup.object().shape({
    Username: Yup.string().required(t('RequiredField')),
    Password: Yup.string()
      // .min(8, t('Password8Characters'))
      .required(t('RequiredField')),
  })

  const onSubmit = async (
    values: Values,
    formikHelpers: FormikHelpers<Values>,
  ) => {
    await setUser('some string')
    navigation.reset({
      index: 0,
      routes: [{ name: 'APP_NAVIGATOR' }],
    })
  }

  return (
    <View style={{ flex: 1 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize={true}
      >
        {(props) => (
          <>
            <TextInputField
              name="Username"
              label={t('Username')}
              placeholder={t('Username')}
              style={margins.a10}
              {...props}
            />
            <TextInputField
              name="Password"
              label={t('Password')}
              placeholder={t('Password')}
              secureTextEntry={true}
              style={margins.a10}
              {...props}
            />

            <Button
              onPress={props.handleSubmit}
              disabled={props.isSubmitting}
              style={margins.a10}
            >
              {t('Login')}
            </Button>
          </>
        )}
      </Formik>
    </View>
  )
}

export default LoginScreen
