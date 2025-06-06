import { createContext } from 'react'
import type { SnackbarOptions } from './snackbar.types'

export type SnackbarContextType = {
  showSnackbar: (options: SnackbarOptions) => void
}

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)
