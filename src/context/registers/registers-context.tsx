import { createContext } from 'react'
import type { Registers } from './registers.types'

export type RegistersContextType = {
  registers: Registers[]
  addRegister: (data: Registers) => void
  removeRegister: (id: number) => void
  editRegister: (id: number, data: Partial<Registers>) => void
  clearRegisters: () => void
};

export const RegistersContext = createContext<RegistersContextType | undefined>(undefined)
