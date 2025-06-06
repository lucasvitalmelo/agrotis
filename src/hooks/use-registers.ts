import { useContext } from 'react'
import { RegistersContext } from '../context/registers/registers-context'

export const useRegisters = () => {
  const context = useContext(RegistersContext)
  if (!context) {
    throw new Error('useRegisters deve ser usado dentro do RegistersProvider')
  }
  return context
}
