import { Paper } from "@mui/material"
import styled from "styled-components"

export const MainContainer = styled.div({
  backgroundColor: '#F3F2F1',
  height: '100vh'
})

export const OverflowContainer = styled.div({
  height: 'calc(100vh - 65px)',
  overflow: 'auto'
})

export const ContentContainer = styled(Paper)({
  backgroundColor: '#fff',
  margin: '1rem auto 0rem',
  maxWidth: '80rem',
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
})
