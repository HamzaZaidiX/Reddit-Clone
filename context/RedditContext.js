import { createContext, useState, useEffect } from 'react'
import { supabase } from '../services/supabaseClient'

export const RedditContext = createContext()

export const RedditProvider = ({ children }) => {
  
  const [selectedPost, setSelectedPost] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  useEffect(() => {
    const { user } = supabase.auth.session() || { user: null }
    setCurrentUser(user)
    supabase.auth.onAuthStateChange((_event, authSession) => {
      setCurrentUser(authSession.user)
    })
  }, [])

  return (
    <RedditContext.Provider
      value={{ 
        currentUser,
        fetcher,
        selectedPost,
        setSelectedPost,
    }}
    >
      {children}</RedditContext.Provider>
  )

}
