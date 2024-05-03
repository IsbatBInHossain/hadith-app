import { Dispatch, SetStateAction, createContext } from 'react'

interface ThemeContextType {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType | null>(null)
