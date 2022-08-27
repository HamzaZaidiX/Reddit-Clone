import {supabase} from '../services/supabaseClient'
import Loading from './Loading'
import {useState, useEffect} from 'react'

const style = {
  wrapper: 'flex min-h-screen flex-col items-center justify-center space-y-2 select-none',
  loginBtn: 'group flex items-center space-x-4 rounded border border-gray-300 p-4 hover:bg-white',
  loginBtnText: 'font-bold group-hover:text-black',
}

const Login = () => {

  
  const signInWithGoogle = async () => {
    try {
      await supabase.auth.signIn({
        provider: 'google'
      })
    } catch (error) {
      console.error(error)
    }
  }
    
  return (
    <div className={style.wrapper}>
      <img
        className='h-52'
        src='https://download.logo.wine/logo/Reddit/Reddit-Horizontal-White-Logo.wine.png'
      />
      <button onClick={signInWithGoogle} className={style.loginBtn}>
      <img
        className='h-6 w-6'
        src="https://cdn-icons-png.flaticon.com/128/281/281764.png"
      />
        <span className={style.loginBtnText}>Sign In with Google</span>
      </button>
    </div>
  )
}

export default Login