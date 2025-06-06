import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { IconButton } from '@mui/material'
import { MoreVert } from '@mui/icons-material'
import { useRegisters } from '../../../../hooks/use-registers'
import { useSnackbar } from '../../../../hooks/use-snackbar'
import { TooltipStyled } from '../../../../components/tooltip'
import { useNavigate } from 'react-router-dom'

type OptionsProps = {
  registerId: number
}

export default function Options({ registerId }: OptionsProps) {
  const { removeRegister } = useRegisters()
  const { showSnackbar } = useSnackbar()
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)



  const handleEdit = () => {
    navigate('register-form/edit', { state: { registerId } })
    handleClose()
  };

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleRemove = () => {
    removeRegister(registerId)
    showSnackbar({
      message: 'Cadastro excluído com sucesso!',
      type: 'success',
    })
    handleClose()
  }

  return (
    <div>

      <TooltipStyled
        title={'Opções'}
      >
        <IconButton
          size="small"
          id="options-button"
          aria-controls={open ? 'options-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleOpen}
        >
          <MoreVert fontSize="small" />
        </IconButton>
      </TooltipStyled>

      <Menu
        id="options-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: { 'aria-labelledby': 'options-button' },
        }}
      >
        <MenuItem onClick={handleEdit}>
          Editar
        </MenuItem>
        <MenuItem onClick={handleRemove}>Excluir</MenuItem>
      </Menu>
    </div>
  )
}
