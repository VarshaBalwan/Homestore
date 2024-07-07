import React, { useContext, useEffect, useState } from 'react'
import {auth} from '../components/Firebase'
import { useStateValue } from './StateProvider'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [{}, dispatch] = useStateValue()

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    function login(email, password) {
      return auth.signInWithEmailAndPassword(email, password)
    }

    function logout() {
      return auth.signOut()
    }

    function resetPassword(email) {
      return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email) {
      return currentUser.updateEmail(email)
    }

    function updatePassword(password) {
      return currentUser.updatePassword(password)
    }

    function updateUserProfile(username){
      return currentUser.updateProfile({
        displayName: username,
      })
    }

    function updateImg(img){
      return currentUser.updateProfile({
        photoURL: img,
      })
    }
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
          if(authUser){
            if(currentUser?.displayName === null) {
              updateUserProfile(currentUser?.email.substring(0, currentUser?.email.lastIndexOf("@")))
            }
            console.log(currentUser)
            if(currentUser?.photoURL === null) {
              updateImg('https://firebasestorage.googleapis.com/v0/b/homestore-41e86.appspot.com/o/avatar%2Fprofile_picture.jpg?alt=media&token=63dacd35-2e8b-450f-a3fc-e75643264f39')
            }
            dispatch({
                type: 'SET_USER',
                user: authUser
            })
          }else{
              dispatch({
                  type: 'SET_USER',
                  user: null
              })
          }
          setCurrentUser(authUser)
          setLoading(false)
        })

        return unsubscribe
    }, [currentUser])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateUserProfile,
        updateImg,
    }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
