export interface HadithProps {
  id: number
  book_id: number
  book_name: string
  chapter_id: number
  chapter_id_main: number
  section_id: number
  section_id_main: number
  hadith_key: string
  hadith_id: number
  narrator: string
  bn: string
  ar: string
  note: string
  grade_id: number
  grade: string
  grade_color: string
}

export interface ChapterProps {
  id: number
  book_id: number
  book_name: string
  chapter_id: number
  section_id: number
  title: string
  preface: string
  number: string
  sort_order: number
  hadith: HadithProps[]
}
