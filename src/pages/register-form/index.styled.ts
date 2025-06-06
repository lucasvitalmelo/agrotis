import { Toolbar } from "@mui/material"
import styled from "styled-components"

export const PaperContainer = styled.div({})

export const Header = styled(Toolbar)({
  background: '#00876E',
  height: '56px',
  width: '100%',
  display: "flex",
  gap: '4px'
});

export const NavContainer = styled.div({
  height: '56px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '9px 9px 9px 0 '
})

export const FormContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem'
})





