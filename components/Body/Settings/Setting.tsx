'use client'

import { ChangeEvent, useContext, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import { RxCross1 } from 'react-icons/rx'
import SupportUs from './SupportUs'
import { toggleTheme } from '@/lib/utils'
import { StateContext, ThemeContext, SettingContext } from '@/context'

const Setting = () => {
  const [translateFontRange, setTranslateFontRange] = useState('17')
  const [arabicFontRange, setArabicFontRange] = useState('23')
  const theme = useContext(ThemeContext)
  const settingContext = useContext(SettingContext)
  const state = useContext(StateContext)
  const isOpen = settingContext?.settingOpen

  const handleTranslateFontChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fontSize = e.target.value
    setTranslateFontRange(fontSize)
    state?.setState({ ...state.state, translationFontSize: parseInt(fontSize) })
  }
  const handleArabicFontChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fontSize = e.target.value
    setArabicFontRange(fontSize)
    state?.setState({ ...state.state, arabicFontSize: parseInt(fontSize) })
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

  const handleSettingToggle = () => {
    settingContext?.setSettingOpen(!settingContext.settingOpen)
  }

  return (
    <>
      <div
        className={`${
          isOpen
            ? 'fixed top-0 left-0 w-full h-screen bg-black dark:opacity-70 opacity-20'
            : ' hidden'
        }`}
        onClick={handleSettingToggle}
      />
      <div
        id='setting'
        className={` max-xl:pb-36 overflow-y-auto min-w-[350px] transition-all duration-200  scrollbar custom-scrollbar dark:text-carbon-dark ${
          isOpen
            ? 'fixed top-0 right-0 max-xl:block bg-white h-screen dark:bg-dark-gray px-6 pt-8 z-50 w-1/4'
            : 'flex flex-col h-[calc(100vh_-_115px)] max-xl:hidden rounded-2xl  w-[350px]'
        }`}
      >
        <div className='p-5 rounded-xl max-xl:p-0 bg-white dark:bg-dark-gray z-10'>
          <div className={` flex justify-between ${isOpen ? 'py-4' : ''}`}>
            <div className='font-medium text-center text-2xl dark:text-white'>
              সেটিংস
            </div>
            {isOpen ? (
              <RxCross1
                className=' w-6 h-6 text-[#4d4d4d] dark:text-white cursor-pointer'
                onClick={handleSettingToggle}
              />
            ) : null}
          </div>
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
    </>
  )
}

export default Setting
