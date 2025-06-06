import TablePagination from '@mui/material/TablePagination'

type Props = {
  page: number
  rowsPerPage: number
  totalCount: number
  onPageChange: (newPage: number) => void
  onRowsPerPageChange: (rowsPerPage: number) => void
}

export default function PaginationControler({
  page,
  rowsPerPage,
  totalCount,
  onPageChange,
  onRowsPerPageChange,
}: Props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TablePagination
        labelRowsPerPage='Registros por página:'
        component="div"
        count={totalCount}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={(_, newPage) => onPageChange(newPage)}
        onRowsPerPageChange={(event) => {
          onRowsPerPageChange(parseInt(event.target.value, 10))
          onPageChange(0)
        }}
      />
    </div>
  )
}
