import Image from 'next/image'
import { HadithProps } from '@/types'
import { IoCopyOutline } from 'react-icons/io5'
import { MdOutlineBookmarkBorder } from 'react-icons/md'
import { CiShare2, CiShare1 } from 'react-icons/ci'
import { PiWarningOctagonLight } from 'react-icons/pi'
import { useContext } from 'react'
import { StateContext } from '@/context'

const HadithCard = ({ hadith }: { hadith: HadithProps }) => {
  const state = useContext(StateContext)

  return (
    <div className='rounded-2xl bg-white dark:bg-dark-gray p-4 flex flex-col gap-4 w-full mt-4'>
      <div className=' flex gap-3 items-center'>
        <Image
          src='/assets/others/pattern.svg'
          alt='pattern'
          width={25}
          height={25}
        />
        <p className=' text-primary text-xl'>
          {hadith.hadith_id.toLocaleString('bn-BD')}
        </p>
      </div>
      <div
        className=' font-KFGQPC text-xl px-4 leading-[46px]'
        style={{ wordSpacing: '5px', fontSize: state?.state.arabicFontSize }}
      >
        {hadith.ar}
      </div>
      <div
        className=' text-primary mt-8'
        style={{ fontSize: state?.state.translationFontSize }}
      >
        {hadith.narrator} থেকে বর্ণিত:
      </div>
      <p
        className='  leading-8'
        style={{ fontSize: state?.state.translationFontSize }}
      >
        {hadith.bn}
      </p>
      <div className=' flex justify-between items-center mt-8'>
        <div className=' flex gap-2 items-center'>
          <p>হাদিসের মান :</p>
          <button
            className='pt-1.5 pb-1 rounded-[.3rem] text-white px-3 flex items-center justify-center font-medium text-sm'
            style={{ backgroundColor: `${hadith.grade_color}` }}
          >
            {hadith.grade}
          </button>
        </div>
        <div className=' flex items-center gap-10 text-[#868686]'>
          <IoCopyOutline className=' w-6 h-6 cursor-pointer' />
          <MdOutlineBookmarkBorder className=' w-6 h-6 cursor-pointer' />
          <CiShare2 className=' w-6 h-6 cursor-pointer' />
          <PiWarningOctagonLight className=' w-6 h-6 cursor-pointer' />
          <CiShare1 className=' w-6 h-6 cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default HadithCard
