import React, { useState, useCallback, forwardRef } from 'react'
import MuiAlert, { type AlertColor, type AlertProps } from '@mui/material/Alert'

import { SnackbarContext } from './snackbar-context'
import type { SnackbarOptions } from './snackbar.types'
import Snackbar from '@mui/material/Snackbar'

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState<AlertColor>('info')

  const showSnackbar = useCallback(({ message, type }: SnackbarOptions) => {
    setMessage(message)
    setType(type)
    setOpen(true)
  }, [])

  const handleClose = () => setOpen(false)

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} open={open} autoHideDuration={3000} onClose={handleClose} >
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}
