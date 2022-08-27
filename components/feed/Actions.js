import { AnnotationIcon, GiftIcon, ShareIcon } from "@heroicons/react/outline"

const style = {
  icon: 'h-4 w-4',
  iconContainer: 'flex items-center space-x-1 text-[#818384]',
  wrapper: 'flex items-center space-x-4 text-[#818384]'
}

const Actions = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.iconContainer}>
      <AnnotationIcon className={style.icon}/>
        <span className="text-xs hover:{color:white}">19 Comments</span>
        </div>
      <div className={style.iconContainer}>
      <GiftIcon className={style.icon}/>
        <span className="text-xs">Award</span>
        </div>
      <div className={style.iconContainer}>
      <ShareIcon className={style.icon}/>
        <span className="text-xs">Share</span>
        </div>
    </div>
  )
}

export default Actions