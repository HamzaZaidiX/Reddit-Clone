import Link from 'next/link'
import { LinkIcon, PhotographIcon } from '@heroicons/react/outline'
import { CreatePostIcon } from '../../assets/CreatePostIcon'

const style = {
  wrapper: `flex items-center space-x-3 rounded border border-[#343536] bg-[#1a1a1b] px-3 py-2 `,
  redirectContainer: `flex flex-1`,
  redirectButton: `w-full cursor-pointer rounded border border-[#343536] bg-[#272729] px-4 py-2 text-left text-sm text-white hover:bg-[#333333] focus:outline-none`,
  iconsContainer: `flex items-center space-x-1 px-1`,
  icon: `h-9 w-9 cursor-pointer rounded stroke-[1.5px] p-1.5 text-gray-400 hover:bg-[#343536]`,
}

const CreatePost = () => {
  return (
    <div className={style.wrapper}>
      <CreatePostIcon />

      <div className={style.redirectContainer}>
        <Link href={`/new`}>
          <a className={style.redirectButton}>Create Post</a>
        </Link>
      </div>

      <div className={style.iconsContainer}>
        <PhotographIcon className={style.icon} />
        <LinkIcon className={style.icon} />
      </div>
    </div>
  )
}

export default CreatePost
