'use client'
import Image from 'next/image'
import { iconType, sideBarIcons } from '@/consts'
import { useState } from 'react'
import { ImBooks } from 'react-icons/im'

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState<iconType | null>(null)
  return (
    <div className=' py-8 max-md:py-3 max-md:drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)] fixed bottom-0 bg-white dark:bg-dark-gray calc-height max-md:h-20 max-md:w-full w-[96px]'>
      <ul className=' flex flex-col max-md:flex-row justify-evenly h-full text-carbon dark:text-carbon-dark items-center'>
        {sideBarIcons.map(icon => (
          <li
            key={icon.name}
            className={`p-4 rounded-lg hover:bg-hadith-bg-lite dark:hover:bg-hadith-bg-lite-dark cursor-pointer ${
              icon.name === 'Others' ? 'max-md:hidden' : ''
            } ${icon.name === 'Books' ? 'bg-primary' : ''}`}
            onMouseEnter={() => setIsHovered(icon)}
            onMouseLeave={() => setIsHovered(null)}
          >
            {icon.name === 'Books' ? (
              <ImBooks className=' w-6 h-6 text-white' />
            ) : (
              <Image
                src={isHovered?.name == icon.name ? icon.hoverSrc : icon.src}
                alt={`${icon.name} logo`}
                width={24}
                height={24}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
