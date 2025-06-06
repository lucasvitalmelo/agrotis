import { useState } from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { CommentOutlined } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { formatDate } from '../../../utils/format-date'

import { TextButton } from './index.styled'

import InfosModal, { type SelectedRegister } from './modal'
import Options from './options'
import type { Registers } from '../../../context/registers/registers.types'
import { TooltipStyled } from '../../../components/tooltip'


export default function RegistersTable({ paginatedRegisters }: { paginatedRegisters: Registers[] }) {

  const [selectedRegister, setSelectedRegister] = useState<SelectedRegister>(null)
  const [modalOpen, setModalOpen] = useState(false)


  const handleOpenModal = (data: SelectedRegister) => {
    setSelectedRegister(data)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedRegister(null)
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell align="left">Nome</TableCell>
              <TableCell align="left">Data Inicial</TableCell>
              <TableCell align="left">Data Final</TableCell>
              <TableCell align="left">Propriedade(s)</TableCell>
              <TableCell align="left">Laboratório</TableCell>
              <TableCell align="center">Obs.</TableCell>
              <TableCell align="center"><div /></TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRegisters.map((register, index) => {
              const bgColor = index % 2 === 0 ? '#E8E8E8' : '#fff'

              const properties = register.propriedades.length === 1 ?
                register.propriedades[0].nome
                :
                <TextButton onClick={() => handleOpenModal({ type: 'property', registerId: register.id })} >
                  {`(${register.propriedades.length})  propriedades`}
                </TextButton>


              return (
                <TableRow
                  key={register.id}
                  style={{ background: bgColor }}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell sx={{ width: '3rem' }} component="th" scope="row">
                    {register.id}
                  </TableCell>

                  <TableCell sx={{ width: '14rem' }} align="left">
                    {register.nome}
                  </TableCell>

                  <TableCell align="left">
                    {formatDate(new Date(register.dataInicial))}
                  </TableCell>

                  <TableCell align="left">
                    {formatDate(new Date(register.dataInicial))}
                  </TableCell>

                  <TableCell align="left">
                    {properties}
                  </TableCell>

                  <TableCell align="left">
                    {register.laboratorio.nome}
                  </TableCell>

                  <TableCell sx={{ width: '3rem' }} align="center">
                    <TooltipStyled
                      title={'Observações'}
                    >
                      <IconButton
                        size='small'
                        onClick={() => handleOpenModal(
                          { type: 'observation', registerId: register.id! }
                        )}
                      >
                        <CommentOutlined fontSize='small' />
                      </IconButton>
                    </TooltipStyled>
                  </TableCell>

                  <TableCell sx={{ width: '3rem' }} align="center">
                    <Options registerId={register!.id!} />
                  </TableCell>

                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <InfosModal
        open={modalOpen}
        onClose={handleCloseModal}
        register={selectedRegister}

      />
    </div>
  )
}