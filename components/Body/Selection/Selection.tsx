'use client'
import React, { useState } from 'react'
import SelectionSearchbar from './SelectionSearchbar'
import Books from './Books'

const Selection = () => {
  const [selector, setSelector] = useState('chapters')
  const handleClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
    setSelector((e.target as HTMLParagraphElement).id)
  }

  return (
    <div className=' max-lg:hidden rounded-2xl h-[calc(100vh_-_115px)] bg-white w-[350px] flex items-center flex-col'>
      <div className='border-b-[1px] w-full flex items-center justify-center text-lg text-white border-porcelain '>
        <p
          onClick={e => handleClick(e)}
          className={`${
            selector == 'books'
              ? 'bg-primary text-white'
              : 'bg-white text-black'
          } w-1/2 text-center py-3 cursor-pointer rounded-tl-2xl text-xl`}
          id='books'
        >
          বই
        </p>
        <p
          onClick={e => handleClick(e)}
          className={`${
            selector == 'chapters'
              ? 'bg-primary text-white'
              : 'bg-white text-black'
          } text-xl w-1/2 text-center  py-3 cursor-pointer rounded-tr-xl`}
          id='chapters'
        >
          অধ্যায়
        </p>
      </div>
      <SelectionSearchbar />
      <Books selector={selector} />
    </div>
  )
}

export default Selection
