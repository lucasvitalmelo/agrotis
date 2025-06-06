import { Button } from "@mui/material"
import styled from "styled-components"

export const ButtonStyled = styled(Button)({
  backgroundColor: '#00735D',
  color: '#fff',

  "&:disabled": {
    opacity: '40%',
    color: '#fff',
  }
})