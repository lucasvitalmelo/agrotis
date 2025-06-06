export type SnackbarType = 'success' | 'error' | 'info' | 'warning'

export type SnackbarOptions = {
  message: string
  type: SnackbarType
}