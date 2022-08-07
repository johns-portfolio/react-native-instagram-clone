import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '../components/newPost/Header'
import FormPost from '../components/newPost/FormPost'

export default function NewPost() {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <Header />
      <FormPost />
    </SafeAreaView>
  )
}