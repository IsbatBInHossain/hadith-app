'use client'
import { roboto } from '@/consts/fonts'
import React, { ChangeEvent, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'

const SelectionSearchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setSearchTerm(e.target.value)
  }

  return (
    <div className='relative my-3 px-4 w-full'>
      <IoSearchOutline className=' absolute inset-y-[22px] left-7 font-sans text-[#5C5C5C] w-[18px] h-[18px]' />
      <input
        placeholder='Search For Filter'
        className={`mt-2 bg-hadith-bg w-full ${roboto.className} p-3 rounded-lg focus:outline-0 focus:text-black pl-10 pr-10`}
        type='text'
        value={searchTerm}
        onChange={e => handleChange(e)}
      />
    </div>
  )
}

export default SelectionSearchbar
