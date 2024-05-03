'use client'
import chapterHadith from '@/public/data/bukhari-1.json'
import ContentHeader from './ContentHeader'
import ChapterCard from './ChapterCard'
import { IoMenuOutline } from 'react-icons/io5'

const Content = () => {
  const chapters = chapterHadith.hadith

  return (
    <div className=' h-full w-full mx-6 flex items-center flex-col mt-8 overflow-y-auto scrollbar custom-scrollbar dark:text-carbon-dark'>
      <ContentHeader />

      <div className=' rounded-2xl bg-white dark:bg-dark-gray p-4 max-lg:flex hidden items-center gap-4 w-full'>
        <IoMenuOutline className=' w-6 h-6' />
        <h3 className=''>{chapters[0].book_name.toLocaleUpperCase('bn-BN')}</h3>
      </div>
      <div className=' rounded-2xl bg-white dark:bg-dark-gray p-4 flex items-center gap-4 w-full mt-4'>
        <h4 className=' flex items-center justify-center text-white w-[42.34px] h-10 rounded-xl bg-primary font-medium leading-6'>
          ১
        </h4>
        <p className=' text-xl leading-7 text-slate-600 dark:text-carbon-dark'>
          ওহীর সূচনা অধ্যায়
        </p>
      </div>
      {chapters.map(chapter => (
        <ChapterCard key={chapter.id} chapter={chapter} />
      ))}
    </div>
  )
}

export default Content
