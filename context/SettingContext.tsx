import { Dispatch, SetStateAction, createContext } from 'react'

interface SettingContextType {
  settingOpen: boolean
  setSettingOpen: Dispatch<SetStateAction<boolean>>
}

export const SettingContext = createContext<SettingContextType | null>(null)
