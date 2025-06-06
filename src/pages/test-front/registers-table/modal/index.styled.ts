import { Box, Toolbar } from "@mui/material"
import styled from "styled-components"

export const ModalContainer = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 639,
  height: 314,
  bgcolor: '#fff',
})

export const ModalHeader = styled(Toolbar)({
  background: '#00876E',
  height: '56px',
  width: '100%',
  display: "flex",
  gap: '1rem'
})

export const ModalContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  background: '#fff',
  minHeight: 206,

})

export const ModalFooter = styled.div({
  background: '#F3F2F1',
  height: 56,
  display: "flex",
  padding: '10px 1rem',
  justifyContent: 'end',
  fontSize: 14
})


export const PropertyContent = styled.span({
  height: 48,
  display: "flex",
  padding: '10px 1rem',
  alignItems: 'center'
})
