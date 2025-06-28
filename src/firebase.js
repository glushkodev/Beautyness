import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDuiU-Scd-iVdgo4ZUQ6QaQLJqoYmR0SPo",
  authDomain: "beautyness-ec495.firebaseapp.com",
  projectId: "beautyness-ec495",
  storageBucket: "beautyness-ec495.firebasestorage.app",
  messagingSenderId: "458477986603",
  appId: "1:458477986603:web:d3b186f0fe82a66d8e5b6e"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)