import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyDb69IXAxQ2pA1cX-hXXh5m6y2Kx08IIE8',
  authDomain: 'instagram-clone-ba255.firebaseapp.com',
  projectId: 'instagram-clone-ba255',
  storageBucket: 'instagram-clone-ba255.appspot.com',
  messagingSenderId: '713129048739',
  appId: '1:713129048739:web:267c34105fb5c0e32a5d16',
  measurementId: 'G-T78YSR1ZYP'
}

export const app = initializeApp(firebaseConfig)
