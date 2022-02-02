import React from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { AuthStackProps } from 'navigation/types'
import { TextInputField } from 'containers/TextInputField'
import { Button } from 'generic/Button'
import { margins } from 'generic/styles'

interface Values {
  protocol: string
  host: string
}

const SetupAddressScreen: React.FC<AuthStackProps<'SETUP_ADDRESS_PATH'>> = ({
  navigation,
}) => {
  const { t } = useTranslation()

  const initialValues: Values = {
    protocol: 'https',
    host: 'pepega.com',
  }

  const validationSchema: Yup.SchemaOf<Values> = Yup.object().shape({
    protocol: Yup.string()
      .matches(/^(https?|http)\b/, t('IncorrectProtocol'))
      .required(t('RequiredField')),
    host: Yup.string().required(t('RequiredField')),
  })

  const onSubmit = async (
    values: Values,
    formikHelpers: FormikHelpers<Values>,
  ) => {
    console.log('values', values)
    console.log('formikHelpers', formikHelpers)
    navigation.navigate('LOGIN_PATH')
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
              name="protocol"
              label="protocol"
              placeholder={t('Protocol')}
              style={margins.a10}
              {...props}
            />
            <TextInputField
              name="host"
              label="host"
              placeholder={t('Host')}
              style={margins.a10}
              {...props}
            />

            <Button
              onPress={props.handleSubmit}
              disabled={props.isSubmitting}
              style={margins.a10}
            >
              {t('Setup')}
            </Button>
          </>
        )}
      </Formik>
    </View>
  )
}

export default SetupAddressScreen
