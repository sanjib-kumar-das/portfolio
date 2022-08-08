import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyDhnUcvqt3srU8vRqXJHo7HrzcJ4N7nh14',
  authDomain: 'portfolio-sanju.firebaseapp.com',
  projectId: 'portfolio-sanju',
  storageBucket: 'portfolio-sanju.appspot.com',
  messagingSenderId: '342408440769',
  appId: '1:342408440769:web:0365b0d3857e33a024dd40',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth()
const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage = getStorage(app)

export const signInWithGoogle = () => signInWithPopup(auth, provider)
