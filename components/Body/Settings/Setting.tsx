'use client'

import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import SupportUs from './SupportUs'
import { ThemeContext } from '@/context'
import { toggleTheme } from '@/lib/utils'

const Setting = () => {
  const [translateFontRange, setTranslateFontRange] = useState('17')
  const [arabicFontRange, setArabicFontRange] = useState('23')
  const theme = useContext(ThemeContext)

  const handleTranslateFontChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTranslateFontRange(e.target.value)
  }
  const handleArabicFontChange = (e: ChangeEvent<HTMLInputElement>) => {
    setArabicFontRange(e.target.value)
  }

  const toggleDropDown = () => {
    const dropdown = document.getElementById('fontDropdown')
    dropdown?.classList.toggle('hidden')
  }

  const handleThemeChange = () => {
    if (theme?.theme === 'light') {
      theme.setTheme('dark')
      toggleTheme('dark')
    } else if (theme?.theme == 'dark') {
      theme?.setTheme('light')
      toggleTheme('light')
    }
  }

  return (
    <div
      id='setting'
      className='rounded-2xl max-xl:pb-36 max-xl:hidden h-[calc(100vh_-_115px)] overflow-y-auto  min-w-[350px] w-[350px] flex flex-col scrollbar custom-scrollbar dark:text-carbon-dark'
    >
      <div className='p-5 rounded-xl max-xl:p-0 bg-white dark:bg-dark-gray'>
        <div className='font-medium text-center text-2xl '>সেটিংস</div>
        <div className='xl-max:mt-6'>
          <div className=''>
            <div className=' mt-4 mb-2 text-md'>আরবি ফন্ট সিলেক্ট করুন</div>
            <div className='relative'>
              <div
                className='w-full h-12  font-sans border border-solid border-[#ECEEF0] dark:border-none dark:bg-hadith-bg-lite-dark rounded-lg'
                onClick={toggleDropDown}
              >
                <div className='px-4 py-3 flex items-center justify-between cursor-pointer'>
                  <div className=' text-sm text-black dark:text-carbon-dark'>
                    <div>
                      <p>KFGQ</p>
                    </div>
                  </div>
                  <FaAngleDown className=' block' />
                </div>
              </div>
              <div
                id='fontDropdown'
                className='absolute hidden font-sans bg-white dark:bg-hadith-bg-lite-dark rounded-lg right-0 left-0 top-14 px-0 pt-3 shadow-2xl z-10'
              >
                <div className='cursor-pointer text-[15px] flex flex-col px-2 pb-2'>
                  <div className='hover:bg-[#f8f8f9] dark:hover:bg-dark-gray px-4 py-2 rounded-md'>
                    KFGQ
                  </div>
                  <div className='hover:bg-[#f8f8f9] dark:hover:bg-dark-gray px-4 py-2 rounded-md'>
                    Me Quran
                  </div>
                  <div className='hover:bg-[#f8f8f9] dark:hover:bg-dark-gray px-4 py-2 rounded-md'>
                    Al Mushaf
                  </div>
                  <div className='hover:bg-[#f8f8f9] dark:hover:bg-dark-gray px-4 py-2 rounded-md'>
                    Amiri
                  </div>
                  <div className='hover:bg-[#f8f8f9] dark:hover:bg-dark-gray px-4 py-2 rounded-md'>
                    Arial
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='h-4'></div>
          <div className='mt-3'>
            <label
              className=' text-md font-medium block my-2.5'
              htmlFor='translation'
            >
              এরাবিক ফন্ট সাইজ
            </label>
            <div className='mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center'>
              <input
                type='range'
                min='18'
                max='40'
                value={arabicFontRange}
                className=' bg-red'
                onChange={e => handleArabicFontChange(e)}
                name='translation'
              />
              <div className=''>
                {parseInt(arabicFontRange).toLocaleString('bn-BN')}
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <label className=' text-md font-medium block my-2.5'>
              অনুবাদ ফন্ট সাইজ
            </label>
            <div className='mb-2 gap-3 w-full grid grid-cols-[86%,10%] place-items-center'>
              <input
                type='range'
                min='14'
                max='25'
                value={translateFontRange}
                style={{ backgroundSize: '22.7273% 100%' }}
                onChange={e => handleTranslateFontChange(e)}
              />
              <div className=''>
                {parseInt(translateFontRange).toLocaleString('bn-BN')}
              </div>
            </div>
          </div>
          <div className='rounded-lg'>
            <div className='mt-6'>
              <div className='flex justify-between items-center'>
                <div className='text-md'>নাইট মোড</div>
                <div>
                  <button
                    className='bg-[#ECEEF0] dark:bg-[#234036] relative inline-flex h-5 w-10 items-center rounded-full'
                    type='button'
                    onClick={handleThemeChange}
                  >
                    <span
                      aria-hidden='true'
                      className='translate-x-[3px] dark:translate-x-[21px] bg-white dark:bg-[#2b9e76]
            pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full  shadow-lg ring-0 transition duration-200 ease-in-out'
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SupportUs />
    </div>
  )
}

export default Setting
