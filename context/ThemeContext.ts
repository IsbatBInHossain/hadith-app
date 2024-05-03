import { ThemeType } from '@/types'
import { Dispatch, SetStateAction, createContext } from 'react'

interface ThemeContextType {
  theme: ThemeType
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
