import type { NextPage } from 'next'
import Header from '../components/header'
import Banner from '../components/community/Banner'
import CreatePost from '../components/feed/CreatePost'
import About from '../components/community/About'
import Feed from '../components/feed'
import Login from '../components/Login'
import useSWR from 'swr'
import { useContext, useState, useEffect } from 'react'
import { RedditContext } from '../context/RedditContext'
import { supabase } from '../services/supabaseClient'

const style = {
  wrapper: `flex min-h-screen flex-col bg-black text-white`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
}

const Home: NextPage = () => {

  const { currentUser, fetcher } = useContext(RedditContext)
  const [myPosts, setMyPosts] = useState([])
  const { data, error } = useSWR('/api/get-posts', fetcher, { refreshInterval: 200 })

  // this function will save and insert a new user in database 
  const saveAndUpdateUser = async () => {
    if (!currentUser) return

    await supabase.from('users').upsert({
      email: currentUser.user_metadata.email,
      name: currentUser.user_metadata.full_name,
      profileImage: currentUser.user_metadata.avatar_url,
    }, {
      onConflict: 'email'
    })
  }

  useEffect(() => {
    if (!data) return
    setMyPosts(data.data)
  }, [data])

  useEffect(() => {
    saveAndUpdateUser()
  }, [])

  return (
    <>
      {currentUser ? <HomePage myPosts={myPosts} /> : <Login />}
    </>
  )
}

const HomePage = ({ myPosts }) => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Banner />
      <main className={style.main}>
        <div className={style.content}>
          <CreatePost />
          <Feed posts={myPosts} />
        </div>
        <div className={style.infoContainer}>
          <About />
        </div>
      </main>
    </div>
  )
}

export default Home
