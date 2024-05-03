'use client'

import { StateContext, ThemeContext } from '@/context'
import { StateType } from '@/types'
import { useState } from 'react'

export const initialState: StateType = {
  book: 'bukhari',
  chapter: 1,
}

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState)
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StateContext.Provider value={{ state, setState }}>
        {children}
      </StateContext.Provider>
    </ThemeContext.Provider>
  )
}

export default AppContext
