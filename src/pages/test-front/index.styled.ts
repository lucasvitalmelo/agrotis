import { Toolbar } from "@mui/material"
import styled from "styled-components"

export const PaperContainer = styled.div({})

export const Header = styled(Toolbar)({
  background: '#00876E',
  height: '56px',
  width: '100%',
  display: "flex",
  gap: '1rem'
})

export const NavContainer = styled.div({
  height: '56px',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '9px 9px 9px 0 '
})

export const RecordsContainer = styled.div({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px',
  gap: '1rem'
})

export const SearchContainer = styled.div({
  width: '100%',
  display: 'flex',
  padding: '0 16px',
  gap: '1rem'
})


export const NotFoundRecordsFooter = styled.footer({
  height: '56px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem'
})





