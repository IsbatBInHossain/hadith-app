import Image from 'next/image'
import { RiHandHeartFill } from 'react-icons/ri'
import { IoIosSettings } from 'react-icons/io'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <nav className='fixed z-10 top-0 left-0 right-0 flex items-center justify-between w-full max-md:h-16 h-20 px-4 bg-white border-b'>
      <div className=' flex items-center cursor-pointer'>
        <div className='w-11 md:w-fit'>
          <Image
            src='/assets/home-logo.png'
            alt='ihadis Logo'
            width={44}
            height={44}
            className=' w-11 h-11 max-md:w-9 max-md:h-9'
          />
        </div>
        <div className='ml-6 block max-md:hidden'>
          <h3 className='text-xl font-bold'>হাদিস সমূহ</h3>
          <h6 className='text-sm text-[#404040]'>হাদিস পড়ুন শিখুন এবং জানুন</h6>
        </div>
        <div className='ml-4 hidden max-sm:ml-3 max-md:block'>
          <h1 className='text-[28px] leading-7 text-primary max-xs:hidden max-sm:text-xl'>
            আল হাদিস
          </h1>
        </div>
      </div>
      <div className='flex items-center justify-end gap-16 max-md:gap-4'>
        <Searchbar />
        <div className=' hidden xl:flex items-center justify-center gap-2 bg-primary cursor-pointer px-5 py-3 text-white rounded-lg'>
          <p>সাপোর্ট করুন</p>
          <RiHandHeartFill className=' w-6 h-6' />
        </div>
        <div className=' w-10 h-10 bg-primary items-center justify-center rounded-lg  flex xl:hidden '>
          <IoIosSettings className=' w-6 h-6 text-white' />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
