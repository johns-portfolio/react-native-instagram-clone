import { View, Text, Image, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import Divider from '../Divider'

export default function FormPost({navigation}) {
  const [imageThumbnail, setImageThumbnail] = useState('')
  return (
    <Formik
      validateOnMount={true}
      validationSchema={yup.object().shape({
        caption: yup.string().min(1).max(100).required('Caption is required!'),
        url: yup.string().url().required('URL is required!')
      })}
      initialValues={{ caption: '', url: '' }}
      onChangeText={(values) => {
        console.log('🔥 onChange values', values)
      }}
      onSubmit={(values) => {
        console.log('🔥 onSubmit values', values)
        navigation.goBack()
      }}
    >
      {({
        values,
        errors,
        isValid,
        handleBlur,
        handleChange,
        handleSubmit
      }) => (
        <>
          <View style={{ flexDirection: 'row' }}>
            <Image
              source={{
                uri:
                  imageThumbnail ||
                  'https://www.nasco.co.th/wp-content/uploads/2022/05/placeholder.png'
              }}
              style={{ width: 100, height: 100, marginRight: 10 }}
            />
            <TextInput
              value={values.caption}
              onChangeText={handleChange('caption')}
              onBlur={handleBlur('caption')}
              placeholder="Enter caption..."
              placeholderTextColor={'grey'}
              multiline={true}
              textAlignVertical="top"
              style={{
                color: 'white',
                flex: 1,
                fontSize: 20
              }}
            />
          </View>
          <TextInput
            value={values.url}
            onChangeText={handleChange('url')}
            onBlur={handleBlur('url')}
            onChange={(e) => {
              setImageThumbnail(e.nativeEvent.text)
            }}
            placeholder="URL..."
            placeholderTextColor={'grey'}
            style={{
              color: 'white',
              fontSize: 14,
              marginVertical: 10
            }}
          />
          <Button title="Share" onPress={handleSubmit} disabled={!isValid}>
            Share
          </Button>
          {errors.caption && (
            <Text style={{ color: 'red' }}>{errors.caption}</Text>
          )}
          {errors.url && <Text style={{ color: 'red' }}>{errors.url}</Text>}
        </>
      )}
    </Formik>
  )
}
