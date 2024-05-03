import { StateType } from '@/types'
import { Dispatch, SetStateAction, createContext } from 'react'

interface StateContextType {
  state: StateType
  setState: Dispatch<SetStateAction<StateType>>
}

export const StateContext = createContext<StateContextType | null>(null)
