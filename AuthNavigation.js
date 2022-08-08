import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAuth } from 'firebase/auth'
import { SignedInStack, SignedOutStack } from './Navigation'

const auth = getAuth()

export default function AuthNavigation() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => auth.onAuthStateChanged((user) => setCurrentUser(user)), [])

  return currentUser ? <SignedInStack /> : <SignedOutStack />
}
