import { SearchIcon } from '@heroicons/react/outline'

const style = {
  wrapper:
    'mx-4 flex flex-1 items-center space-x-3 rounded border border-[#343536] bg-[#272729] px-4 py-1.5',
  search: 'h-5 w-5 text-[#878A8C]',
  input: 'flex-1 bg-transparent text-sm focus:outline-none',
}

const SearchBar = () => {
  return (
    <div className={style.wrapper}>
      <SearchIcon className={style.search} />
      <input className={style.input} type='text' placeholder='Search Reddit' />
    </div>
  )
}

export default SearchBar
