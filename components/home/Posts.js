import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import numeral from 'numeral'
import { posts } from '../../data/posts'
import Divider from '../Divider'

export default function Posts() {
  return (
    <ScrollView>
      {posts.map((p, i) => (
        <Post key={i} post={p} />
      ))}
    </ScrollView>
  )
}

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Divider />
      <PostTop post={post} />
      <Image
        source={{ uri: post.imageUrl }}
        style={{ height: 400, resizeMode: 'cover' }}
      />
      <PostAction post={post} />
      <Text style={{ color: 'white' }}>
        {numeral(post.like).format('0,0')} likes
      </Text>
      <View style={{ flexDirection: 'row', paddingTop: 5 }}>
        <Text style={{ color: 'white', marginRight: 4, fontWeight: '900' }}>
          {post.username}
        </Text>
        <Text style={{ color: 'white' }}>{post.caption}</Text>
      </View>
      <Comments post={post} />
    </View>
  )
}

const Comments = ({ post }) => {
  return (
    <View>
      <Text style={{ color: 'grey', paddingTop: 5 }}>
        View all {post.comments.length} comments
      </Text>
      {post.comments.map((c) => (
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'white', paddingRight: 4, fontWeight: '900' }}>
            {c.username}
          </Text>
          <Text style={{ color: 'white' }}>{c.message}</Text>
        </View>
      ))}
    </View>
  )
}

const PostTop = ({ post }) => {
  return (
    <>
      <View
        style={{
          marginBottom: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <View
          style={{ marginTop: 5, flexDirection: 'row', alignItems: 'center' }}
        >
          <Image
            source={{ uri: post.avatar }}
            style={{
              height: 40,
              width: 40,
              resizeMode: 'contain',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#ff8501',
              marginRight: 10
            }}
          />
          <Text style={{ color: 'white', fontWeight: '900' }}>
            {post.username}
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}

const PostAction = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
          <Ionicons
            name="heart-outline"
            color={'white'}
            size={30}
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="chatbubble-outline"
            color={'white'}
            size={30}
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons
            name="navigate-outline"
            color={'white'}
            size={30}
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" color={'white'} size={30} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
