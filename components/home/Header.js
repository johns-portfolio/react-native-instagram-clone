import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Header({navigation}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Image
        source={require('../../assets/logo.jpg')}
        style={{ height: 50, width: 150, resizeMode: 'contain' }}
      />
      <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.push('NewPost')}>
          <Ionicons
            name="duplicate-outline"
            color={'white'}
            size={30}
            style={{ paddingHorizontal: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="heart-outline"
            color={'white'}
            size={30}
            style={{ paddingHorizontal: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="chatbox-outline"
            color={'white'}
            size={30}
            style={{ paddingHorizontal: 5 }}
          />
          <View style={{ position: 'absolute', right: 2, top: -6 }}>
            <Text
              style={{
                color: 'white',
                backgroundColor: 'red',
                paddingHorizontal: 6,
                paddingVertical: 1,
                borderRadius: 30
              }}
            >
              20
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
