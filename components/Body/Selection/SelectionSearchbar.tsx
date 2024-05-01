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

// <form className=' w-fit mt '>
//   <div className='relative md-max:w-10 md-max:h-10 flex items-center justify-center rounded-lg max-md:bg-porcelain max-md:w-10 max-md:h-10'>
//     <div className=' relative'>
//       <IoSearchOutline className=' text-carbon w-[18px] h-[18px] absolute -top-[10px] left-4 max-md:-left-[9px] max-md:-top-[8px]' />
//     </div>
//     <input
//       type='text'
//       id='search_box'
//       placeholder='Search Hadith'
//       className='max-md:hidden font-sans border-slate-200  border-2 p-3 rounded-lg focus:outline-0 focus:text-black pl-10 pr-10'
//       onChange={e => handleChange(e)}
//       value={searchTerm}
//     ></input>
//   </div>
// </form>
