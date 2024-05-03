'use client'

import { StateContext, ThemeContext } from '@/context'
import { StateType, ThemeType } from '@/types'
import { useState } from 'react'

export const initialState: StateType = {
  book: 'সহিহ বুখারী',
  chapter: 'ওহীর সূচনা অধ্যায়',
}

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState)
  const [theme, setTheme] = useState<ThemeType>('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StateContext.Provider value={{ state, setState }}>
        {children}
      </StateContext.Provider>
    </ThemeContext.Provider>
  )
}

export default AppContext
