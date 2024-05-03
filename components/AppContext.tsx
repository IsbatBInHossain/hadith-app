'use client'

import { StateContext, ThemeContext } from '@/context'
import { SettingContext } from '@/context/SettingContext'
import { StateType, ThemeType } from '@/types'
import { useState } from 'react'

export const initialState: StateType = {
  book: 'সহিহ বুখারী',
  chapter: 'ওহীর সূচনা অধ্যায়',
  arabicFontSize: 23,
  translationFontSize: 17,
}

const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(initialState)
  const [theme, setTheme] = useState<ThemeType>('light')
  const [settingOpen, setSettingOpen] = useState(false)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <StateContext.Provider value={{ state, setState }}>
        <SettingContext.Provider value={{ settingOpen, setSettingOpen }}>
          {children}
        </SettingContext.Provider>
      </StateContext.Provider>
    </ThemeContext.Provider>
  )
}

export default AppContext
