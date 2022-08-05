import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Divider from '../Divider'

export default function BottomTabs() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <View>
      <Divider />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          marginTop: 5
        }}
      >
        <TouchableOpacity onPress={() => setActiveTab('home')}>
          <Ionicons
            name={activeTab !== 'home' ? 'home-outline' : 'home'}
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('search')}>
          <Ionicons
            name={activeTab !== 'search' ? 'search-outline' : 'search'}
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('play')}>
          <Ionicons
            name={
              activeTab !== 'play'
                ? 'caret-forward-circle-outline'
                : 'caret-forward-circle'
            }
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('bag')}>
          <Ionicons
            name={activeTab !== 'bag' ? 'basket-outline' : 'basket'}
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setActiveTab('profile')}>
          <Ionicons
            name={activeTab !== 'profile' ? 'build-outline' : 'build'}
            color={'white'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
