import { ThemeType } from '@/types'
import { Dispatch, SetStateAction, createContext } from 'react'

interface ThemeContextType {
  theme: ThemeType
  setTheme: Dispatch<SetStateAction<ThemeType>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
