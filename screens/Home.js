import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'

export default function Home() {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
        <Header />
        <Stories />
        <Text style={{color:'white'}}>Test</Text>
    </SafeAreaView>
  )
}
