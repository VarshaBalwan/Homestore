import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

// api from firebase
const app = firebase.initializeApp({
  apiKey: process.env.React_App_Api_Key,
  authDomain: process.env.React_App_Auth_Domain,
  projectId: process.env.React_App_Project_Id,
  storageBucket: process.env.React_App_Storage_Bucket,
  messagingSenderId: process.env.React_App_Messaging_SenderId,
  appId: process.env.React_App_App_Id,
  measurementId: process.env.React_App_Measurement_Id
})

// authentication
export const auth = app.auth()

// database
export const db = firebase.firestore()

// storage
export const storage = firebase.storage()

export default app