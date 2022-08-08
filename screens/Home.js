import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Header from '../components/home/Header'
import Stories from '../components/home/Stories'
import Posts from '../components/home/Posts'
import BottomTabs from '../components/home/BottomTabs'

export default function Home({navigation}) {
  return (
    <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>
      <Header navigation={navigation} />
      <Stories />
      <Posts />
      <BottomTabs />
    </SafeAreaView>
  )
}
