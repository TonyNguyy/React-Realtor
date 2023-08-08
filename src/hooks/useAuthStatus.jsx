import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useState } from 'react'

export function useAuthStatus() {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
  
    useEffect(() =>{
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            setLoggedIn(true)
        })
        setCheckingStatus(false)
    },[])
    return (loggedIn, checkingStatus)
}
