import Image from 'next/image'

const style = {
  wrapper:
    'flex flex-col space-y-2 divide-y divide-[#343536] rounded border border-[#343536] bg-[#1a1a1b] p-4 text-gray-300 select-none',
  profileInfoContainer: 'flex items-center space-x-4 ',
  profilePicContainer: `relative h-12 w-12`,
  profilePic: 'object-contain',
  aboutContent: 'py-2 text-sm',
  statsWrapper: 'flex items-center space-x-16',
  stat: 'flex flex-col',
  statTitle: 'text-xs',
  footer: 'flex flex-col space-y-4 pt-2',
  createdAt: 'text-sm font-light',
  joinedButton:
    'cursor-pointer rounded-full border border-gray-300 py-1 text-center text-sm font-semibold',
}

const About = () => {
  return (
    <div className={style.wrapper}>
      <div className='pb-2'>
        <div className={style.profileInfoContainer}>
          <div className={style.profilePicContainer}>
            <Image
              src='https://i.ibb.co/Z1rLRHw/logo.png'
              layout='fill'
              className={style.profilePic}
              alt='Profile Image'
            />
          </div>
          <p>r/Hamza Zaidi</p>
        </div>
        <p className={style.aboutContent}>
          I m a Full Stack Dev
I like to build amazing UI/UX experiences for humans 🚀
Currently I m focused on to learning how to code & change my future 👨‍💻
        </p>

        <div className={style.statsWrapper}>
          <div className={style.stat}>
            <span>2.1m</span>
            <span className={style.statTitle}>Members</span>
          </div>
          <div className={style.stat}>
            <span>246</span>
            <span className={style.statTitle}>Online</span>
          </div>
        </div>
      </div>

      <div className={style.footer}>
        <p className={style.createdAt}>Created Jul 11, 2022</p>

        <div className={style.joinedButton}>Joined</div>
      </div>
    </div>
  )
}

export default About
