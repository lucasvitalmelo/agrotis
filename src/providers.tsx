import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from 'styled-components'

import { CssBaseline } from '@mui/material'
import { Router } from "./router"
import theme from './theme'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { RegistersProvider } from "./context/registers/registers-provider"
import { SnackbarProvider } from "./context/snackbar/snackbar-provider"

import 'dayjs/locale/pt-br'
import dayjs from "dayjs"

dayjs.locale('pt-br')


export function Provivers() {
  const queryClient = new QueryClient()
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'pt-br'}>
            <SnackbarProvider>
              <RegistersProvider>
                <Router />
              </RegistersProvider>
            </SnackbarProvider>
          </LocalizationProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

