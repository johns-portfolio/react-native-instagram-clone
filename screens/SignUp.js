import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './SignIn'
import { Formik } from 'formik'
import * as yup from 'yup'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, getFirestore } from 'firebase/firestore'

export default function SignUp({ navigation }) {
  return (
    <SafeAreaView style={{ alignItems: 'center', paddingHorizontal: 10 }}>
      <Formik
        initialValues={{
          email: 'aaa@bbb.ccc',
          name: 'Apisit Sianglert',
          password: '111111'
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          name: yup.string().min(3).required(),
          password: yup.string().min(4).required()
        })}
        validateOnMount={true}
        onSubmit={async ({ email, name, password }) => {
          const auth = getAuth()
          try {
            const userCredential = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            )

            const db = getFirestore()
            await setDoc(doc(db, 'users', userCredential.user.uid), {
              username: email,
              email: email,
              name: name,
              profile_picture: 'https://randomuser.me/api/portraits/men/62.jpg'
            })

            navigation.push('SignIn')
          } catch (error) {
            console.log('🔥 error', error)
            Alert.alert('🔥 Error Message', error.message, [
              {
                text: 'Ok',
                style: 'cancel'
              }
            ])
          }
        }}
      >
        {({ values, errors, handleSubmit, handleChange, isValid }) => (
          <>
            <Image
              style={{ width: 100, height: 100, marginVertical: 60 }}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png'
              }}
            />
            <View style={{ width: '100%' }}>
              <View style={styles.textInputs(!errors.email)}>
                <TextInput
                  placeholder="Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  autoFocus={true}
                />
              </View>
              <View style={styles.textInputs(!errors.name)}>
                <TextInput
                  placeholder="Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  textContentType="name"
                />
              </View>
              <View style={styles.textInputs(!errors.password)}>
                <TextInput
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  secureTextEntry={true}
                  keyboardType="visible-password"
                  textContentType="password"
                />
              </View>
            </View>
            <View style={{ width: '100%', marginTop: 50 }}>
              <Pressable style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </Pressable>
            </View>
            <View
              style={{
                alignItems: 'center',
                paddingTop: 50,
                flexDirection: 'row',
                justifyContent: 'center'
              }}
            >
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={{ color: '#63a7ff' }}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  )
}
