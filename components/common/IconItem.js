const style = {
  icon: 'h-9 w-9 cursor-pointer rounded stroke-[1.5px] p-1.5 text-gray-300 hover:bg-[#343536]',
}

export const IconItem = ({ Icon }) => {
  return <Icon className={style.icon} />
}
