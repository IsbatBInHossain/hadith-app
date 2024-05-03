'use client'
import React, { useEffect, useState } from 'react'
import allBooks from '@/public/data/all-books.json'
import bukhari from '@/public/data/bukhari.json'
import SelectionCard from './SelectionCard'
import { BookType } from '@/types'

const Books = ({ selector }: { selector: string }) => {
  const books = allBooks.book

  const chapters = bukhari.chap

  return (
    <div
      className=' flex flex-col gap-2 w-full px-4 overflow-y-auto'
      style={{ scrollbarWidth: 'thin' }}
    >
      {selector === 'books'
        ? books.map(book => (
            <SelectionCard
              key={book.id}
              title={book.title}
              code={book.abvr_code}
              number={book.number_of_hadis.toString()}
              selector={selector}
            />
          ))
        : chapters.map(chapter => (
            <SelectionCard
              key={chapter.id}
              title={chapter.title}
              code={chapter.chapter_id.toString()}
              number={chapter.hadis_range}
              selector={selector}
            />
          ))}
    </div>
  )
}

export default Books
