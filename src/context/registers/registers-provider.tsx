import { useState } from 'react'
import { RegistersContext } from './registers-context'
import type { Registers } from './registers.types'

type Props = { children: React.ReactNode }

export const RegistersProvider = ({ children }: Props) => {
  const [registers, setRegisters] = useState<Registers[]>([])
  const [nextId, setNextId] = useState(1)


  const addRegister = (data: Omit<Registers, 'id'>) => {
    const newRegister = { ...data, id: nextId }
    setRegisters(prev => [...prev, newRegister])
    setNextId(prev => prev + 1)
  }

  const removeRegister = (id: number) => {
    setRegisters(prev => prev.filter(reg => reg.id !== id))
  }

  const editRegister = (id: number, data: Partial<Omit<Registers, 'id'>>) => {
    setRegisters(prev =>
      prev.map(reg => (reg.id === id ? { ...reg, ...data } : reg))
    )
  }

  const clearRegisters = () => {
    setRegisters([])
    setNextId(1)
  }

  return (
    <RegistersContext.Provider
      value={{ registers, addRegister, removeRegister, editRegister, clearRegisters }}
    >
      {children}
    </RegistersContext.Provider>
  )
}
