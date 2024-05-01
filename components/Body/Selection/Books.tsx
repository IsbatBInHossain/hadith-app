'use client'
import React from 'react'
import allBooks from '@/public/data/all-books.json'
import SelectionCard from './SelectionCard'

const Books = () => {
  const books = allBooks.book

  return (
    <div className=' flex flex-col gap-2 w-full px-4 overflow-y-auto'>
      {books.map(book => (
        <SelectionCard key={book.id} {...book} />
      ))}
    </div>
  )
}

export default Books
