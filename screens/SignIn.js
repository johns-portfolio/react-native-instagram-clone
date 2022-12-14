import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
  Pressable,
  Alert
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import * as yup from 'yup'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

export default function SignIn({ navigation }) {
  return (
    <SafeAreaView style={{ alignItems: 'center', paddingHorizontal: 10 }}>
      <Formik
        initialValues={{
          username: 'aaa@bbb.ccc',
          password: '111111'
        }}
        validationSchema={yup.object().shape({
          username: yup
            .string()
            .email('Must email')
            .required('Username is required!'),
          password: yup
            .string()
            .min(4, '4 digit')
            .required('Password is required!')
        })}
        validateOnMount={true}
        onSubmit={async ({ username, password }) => {
          const auth = getAuth()
          try {
            const userCredential = await signInWithEmailAndPassword(
              auth,
              username,
              password
            )
            console.log('🔥 Signed In')
          } catch (error) {
            console.log('🔥 error', error)
            Alert.alert('🔥Error Message', error.message, [
              {
                text: 'Ok',
                style: 'cancel'
              },
              {
                text: 'Sign Up',
                onPress: () => navigation.push('SignUp')
              }
            ])
          }
        }}
      >
        {({
          values,
          errors,
          handleSubmit,
          handleBlur,
          handleChange,
          isValid
        }) => (
          <>
            <Image
              style={{
                width: 100,
                height: 100,
                marginVertical: 50
              }}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
              }}
            />
            <View style={{ width: '100%', marginTop: 20 }}>
              <View
                style={styles.textInputs(!errors.username || !values.username)}
              >
                <TextInput
                  placeholder="Username"
                  value={values.username}
                  autoFocus={true}
                  onChangeText={handleChange('username')}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                />
              </View>
              <View
                style={styles.textInputs(!errors.password || !values.password)}
              >
                <TextInput
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  // keyboardType="visible-password"
                  secureTextEntry={true}
                  textContentType="password"
                />
              </View>
              <TouchableOpacity
                style={{ alignItems: 'flex-end', marginTop: 4 }}
              >
                <Text style={{ color: '#63a7ff' }}>Forgot password?</Text>
              </TouchableOpacity>
              <View style={{ marginTop: 30 }}>
                <Pressable
                  style={styles.button(isValid)}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
                <View
                  style={{
                    alignItems: 'center',
                    paddingTop: 50,
                    flexDirection: 'row',
                    justifyContent: 'center'
                  }}
                >
                  <Text>Don't have account? </Text>
                  <TouchableOpacity onPress={() => navigation.push('SignUp')}>
                    <Text style={{ color: '#63a7ff' }}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export const styles = StyleSheet.create({
  textInputs: (isValid) => ({
    borderColor: isValid ? '#ccc' : 'red',
    borderWidth: 1,
    width: '100%',
    marginVertical: 2,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#efefef'
  }),
  button: (isValid) => ({
    backgroundColor: isValid ? '#63a7ff' : '#a2c9fc',
    alignItems: 'center',
    paddingVertical: 10
  }),
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
