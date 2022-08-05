import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { users } from '../../data/users'

export default function Stories() {
  return (
    <View style={{marginBottom: 12}}>
      <ScrollView horizontal>
        {users.map((u, i) => (
          <View key={i} style={{ marginRight: 8 }}>
            <Image
              source={{ uri: u.avatar }}
              style={{
                width: 60,
                height: 60,
                resizeMode: 'contain',
                borderRadius: 50,
                borderWidth: 2,
                borderColor: '#ff8501'
              }}
            />
            <Text style={{ color: 'white' }}>{u.name.slice(0, 8) + '...'}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
