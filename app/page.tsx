import MainBody from '@/components/MainBody'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <main className=' flex justify-between mt-20 max-md:mt-16 max-md:flex-col-reverse relative'>
        <Sidebar />
        <MainBody />
      </main>
    </>
  )
}

export default page
