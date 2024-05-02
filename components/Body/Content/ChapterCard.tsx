import { ChapterProps } from '@/types'
import Image from 'next/image'
import HadithCard from './HadithCard'

const ChapterCard = ({ chapter }: { chapter: ChapterProps }) => {
  return (
    <>
      <div className=' rounded-2xl bg-white p-4 flex items-center w-full mt-4'>
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
          <div>{chapter.title}</div>
          {chapter.preface ? (
            <>
              <div className=' w-full border border-slate-200' />
              <div className=' text-slate-600'>{chapter.preface}</div>
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
