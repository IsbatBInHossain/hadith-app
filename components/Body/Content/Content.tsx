import chapterHadith from '@/public/data/bukhari-1.json'
import ContentHeader from './ContentHeader'
import ChapterCard from './ChapterCard'

const Content = () => {
  const chapters = chapterHadith.hadith

  return (
    <div className=' h-full w-full mx-6 flex items-center flex-col mt-8 overflow-y-auto'>
      <ContentHeader />
      <div className=' rounded-2xl bg-white p-4 flex items-center gap-4 w-full mt-4'>
        <h4 className=' flex items-center justify-center text-white w-[42.34px] h-10 rounded-xl bg-primary font-medium leading-6'>
          ১
        </h4>
        <p className=' text-xl leading-7 text-slate-600'>ওহীর সূচনা অধ্যায়</p>
      </div>
      {chapters.map(chapter => (
        <ChapterCard key={chapter.chapter_id} chapter={chapter} />
      ))}
    </div>
  )
}

export default Content
