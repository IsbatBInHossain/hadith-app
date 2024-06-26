'use client'

import { StateContext } from '@/context'
import { useContext } from 'react'

interface Props {
  title: string
  code: string
  number: string
  selector: string
}

const SelectionCard = ({ title, code, number, selector }: Props) => {
  let formattedNumber
  if (selector === 'books') {
    formattedNumber = parseInt(number).toLocaleString('bn-BD')
  }
  const state = useContext(StateContext)
  const isSpecial =
    state?.state.book === title || state?.state.chapter === title

  const handleClick = () => {
    if (selector === 'books') {
      state?.setState({ ...state.state, book: title })
    } else {
      state?.setState({ ...state.state, chapter: title })
    }
  }

  return (
    <div
      className={`p-4 flex  group cursor-pointer justify-between items-center rounded-2xl h-[6.25rem] ${
        isSpecial
          ? ' dark:bg-hadith-bg-lite-dark bg-accent'
          : 'bg-white dark:bg-dark-gray group dark:hover:bg-hadith-bg-lite-dark hover:bg-accent'
      }`}
      onClick={handleClick}
    >
      <div className=' flex items-center gap-4'>
        <div className='h-12 w-12 max-xl:w-10 max-xl:h-10  flex items-center justify-center relative'>
          <h3
            className={`${
              isSpecial ? 'text-white' : 'text-gray-400 group-hover:text-white'
            } absolute font-medium group-hover:opacity-100`}
          >
            {code}
          </h3>
          <svg
            className={` ${
              isSpecial
                ? 'fill-primary'
                : 'fill-[#f1f5f4] dark:fill-hadith-bg-lite-dark group-hover:fill-primary'
            }`}
            width='56'
            height='62'
            viewBox='0 0 56 62'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M22.375 3.11362C25.8558 1.104 30.1442 1.104 33.625 3.11362L49.3378 12.1854C52.8186 14.195 54.9628 17.909 54.9628 21.9282V40.0718C54.9628 44.091 52.8186 47.805 49.3378 49.8146L33.625 58.8864C30.1442 60.896 25.8558 60.896 22.375 58.8864L6.66219 49.8146C3.18143 47.805 1.03719 44.091 1.03719 40.0718V21.9282C1.03719 17.909 3.18143 14.195 6.66219 12.1854L22.375 3.11362Z'
              strokeWidth='1.5'
            ></path>
          </svg>
        </div>
        <div className='flex flex-col justify-between gap-1.5 group'>
          <h4 className='text-base font-medium leading-7 text-[15px] text-black dark:text-carbon-dark md:text-base dark:group-hover:text-primary xl:text-base'>
            {title}
          </h4>
          <p className='text-[#40404099] dark:text-accent-dark text-sm leading-[26px] md:text-[13px]'>
            {selector === 'books' ? 'সর্বমোট হাদিস - ' : 'হাদিসের রেঞ্জ: '}
            <span>{selector === 'books' ? formattedNumber : number}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SelectionCard
