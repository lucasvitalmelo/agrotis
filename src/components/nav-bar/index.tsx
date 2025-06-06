import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'

import { AgrotisLogo } from './agrotis-logo'
import { CustomAppBar } from './index.styled'

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar position="static">
        <Toolbar>
          <AgrotisLogo />
        </Toolbar>
      </CustomAppBar>
    </Box>
  )
}