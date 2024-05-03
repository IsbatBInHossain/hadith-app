'use client'
import { ChapterProps } from '@/types'
import Image from 'next/image'
import HadithCard from './HadithCard'
import { useContext } from 'react'
import { StateContext } from '@/context'

const ChapterCard = ({ chapter }: { chapter: ChapterProps }) => {
  const state = useContext(StateContext)
  return (
    <>
      <div className=' rounded-2xl bg-white dark:bg-dark-gray p-4 flex items-center w-full mt-4'>
        <div className=' flex flex-col gap-4'>
          <div className=' flex items-center gap-2'>
            <Image
              src='/assets/others/book_open.svg'
              alt='Open book image'
              width={30}
              height={30}
            />
            <h4>{chapter.number}</h4>
          </div>
          <div style={{ fontSize: state?.state.translationFontSize }}>
            {chapter.title}
          </div>
          {chapter.preface ? (
            <>
              <div className=' w-full border-b border-slate-200 dark:border-accent-dark' />
              <div
                className=' text-slate-600 dark:text-carbon-dark'
                style={{ fontSize: state?.state.translationFontSize }}
              >
                {chapter.preface}
              </div>
            </>
          ) : null}
        </div>
      </div>
      {chapter.hadith.map(hadith => (
        <HadithCard key={hadith.hadith_id} hadith={hadith} />
      ))}
    </>
  )
}

export default ChapterCard
