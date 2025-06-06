import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'


type SnackbarStyledProps = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function SnackbarStyled({ open, setOpen }: SnackbarStyledProps) {

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => setOpen(false)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={() => setOpen(false)} severity="success" sx={{ width: '100%' }}>
        Ação concluída com sucesso!
      </Alert>
    </Snackbar>
  );
}
