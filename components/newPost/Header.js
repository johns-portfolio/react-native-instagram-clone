import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Header({ navigation }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 10
      }}
    >
      <TouchableOpacity
        style={{ width: 40 }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back-outline" color={'white'} size={30} />
      </TouchableOpacity>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: '900',
          flex: 1,
          textAlign: 'center'
        }}
      >
        New Post
      </Text>
      <Text style={{}}>xxx</Text>
    </View>
  )
}
