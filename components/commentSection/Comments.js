import useSWR from 'swr'
import {useState, useEffect, useContext} from 'react'
import {RedditContext} from '../../context/RedditContext'
import Image from 'next/image'

const style = {
  profileImage: '',
}

const Comments = ({postId}) => {

  const [comments, setComments] = useState([])
  const {fetcher} = useContext(RedditContext)

  const {data} = useSWR(
    `/api/get-comments?postId=${postId}`,
    fetcher,
    {refreshInterval: 200}
    )

  useEffect (() => {
    if(!data) return

    setComments(data.data)
  }, [data])
  
  return (
    <div>
    <h1>Comments</h1>
      {comments && comments.map((comment, id) => (
        <Image 
          src= {comment.users.profileImage}
          className= {style.profileImage}
          layout= 'fill'
          />
      ))}
    </div>
  )
}

export default Comments