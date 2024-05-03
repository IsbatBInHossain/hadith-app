'use client'

import { roboto } from '@/consts/fonts'
import { ChangeEvent, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const Searchbar = () => {
  const [searchItem, setSearchItem] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchItem(e.target.value)
  }

  return (
    <form className=' w-fit '>
      <div className='relative md-max:w-10 md-max:h-10 flex items-center justify-center rounded-lg max-md:bg-porcelain dark:max-md:bg-porcelain-dark max-md:w-10 max-md:h-10'>
        <div className=' relative '>
          <IoSearchOutline className=' text-carbon dark:text-white w-[18px] h-[18px] absolute -top-[10px] left-4 max-md:-left-[9px] max-md:-top-[8px]' />
        </div>
        <input
          type='text'
          id='search_box'
          placeholder='Search Hadith'
          className={`max-md:hidden ${roboto.className} border-slate-200 dark:border-dark-border dark:bg-dark-gray border-2 p-3 rounded-lg focus:outline-0 focus:text-black pl-10 pr-10`}
          onChange={e => handleChange(e)}
          value={searchItem}
        ></input>
      </div>
    </form>
  )
}

export default Searchbar
