import {LoadingAnimation} from '../assets/LoadingAnimation'

const style = {
  wrapper: 'fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-center gap-6 overflow-hidden bg-black/80 select-none',
  loadingText: 'text-center text-2xl font-semibold text-white select-none',
  loadingIcon: 'mr-2 h-20 w-20 animate-spin fill-white text-gray-600'
}

const Loading = () => {
  return (
    <div className={style.wrapper}>
    <LoadingAnimation style={style}/>
      <h2 className={style.loadingText}>Loading...</h2>
    </div>
  )
}

export default Loading