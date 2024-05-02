import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import allBooks from '@/public/data/all-books.json'

const Content = () => {
  const books = allBooks.book

  return (
    <div className=' h-full w-full mx-6 flex items-center flex-col mt-8'>
      <div className='w-full '>
        <div className=' rounded-t-2xl font-sans text-sm text-[#667085] bg-hadith-bg-lite mb-0.5 p-4 flex items-center'>
          <Image
            src='/assets/others/breadcrumb_book.svg'
            alt='book image'
            width={17}
            height={17}
          />
          <MdOutlineKeyboardArrowRight className=' w-5 h-5' />
          <p>Bukhari</p>
          <MdOutlineKeyboardArrowRight className=' w-5 h-5' />
          <p>1</p>
        </div>
        <div className=' bg-white flex justify-between items-center py-6 px-6 rounded-b-2xl'>
          <div className=' flex gap-4'>
            <Image
              src='/assets/others/hadith.svg'
              alt='hadith image'
              width={40}
              height={40}
            />
            <div className=' flex flex-col'>
              <h3 className=' mb-2 text-2xl'>সহিহ বুখারী</h3>
              <p className=' text-sm'>
                সর্বমোট হাদিস - <span>৭৫৬৩</span>
              </p>
            </div>
          </div>
          <div className=' font-KFGQPC text-2xl tracking-wide'>
            صحيح البخاري
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
