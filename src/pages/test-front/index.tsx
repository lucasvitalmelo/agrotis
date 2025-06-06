import {
  Button,
  Divider,
  IconButton,
  Input,
  Typography
} from "@mui/material"

import {
  Header,
  NavContainer,
  NotFoundRecordsFooter,
  RecordsContainer,
  SearchContainer
} from "./index.styled"

import {
  Add,
  ArrowBackIos,
  Close,
  Search,
  Warning
} from '@mui/icons-material'

import { useMemo, useState } from "react"
import { NavLink } from "react-router-dom"
import { useRegisters } from "../../hooks/use-registers"
import RegistersTable from "./registers-table"
import PaginationControler from "./registers-table/pagination-controler"
import { TooltipStyled } from "../../components/tooltip"

export function TestFrontTable() {
  const [isSearch, setIsSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const { registers, addRegister } = useRegisters()

  function handleAddMock() {
    addRegister({
      nome: 'John lucas',
      dataFinal: new Date().toISOString(),
      dataInicial: new Date().toISOString(),
      laboratorio: { id: 1, nome: 'Lab Test' },
      propriedades: [
        { id: 1, nome: 'Castelinho Test' },
        { id: 2, nome: 'Castelinho Test' }
      ],
      observacoes: 'test'

    })
  }

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)


  const filteredRegisters = useMemo(() => {
    const term = searchTerm.trim().toLowerCase()
    if (!term) return registers

    return registers.filter((register) => {
      const nameMatch = register.nome.toLowerCase().includes(term)
      const idMatch = register.id?.toString().includes(term)
      return nameMatch || idMatch
    })
  }, [searchTerm, registers])

  const paginatedRegisters = filteredRegisters.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  )

  return (
    <>
      <Header>
        <IconButton onClick={handleAddMock}>
          <ArrowBackIos
            sx={{
              width: '16px',
              height: '16px',
              color: "#fff"
            }}
          />
        </IconButton>

        <Typography
          variant="subtitle1"
          color={'#fff'}>
          Teste Front-End
        </Typography>
      </Header>

      <NavContainer>
        {isSearch ? (
          <SearchContainer>
            <IconButton disabled>
              <Search />
            </IconButton>

            <Input
              title="Search"
              sx={{ flexGrow: 1 }}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Pesquisar por Código ou Nome"
            />
          </SearchContainer>
        ) : (
          <RecordsContainer >
            <Typography
              variant="body1">
              Registros ({registers.length})
            </Typography>

            <Divider orientation="vertical" />

            <NavLink to={'/register-form'}>
              <Button startIcon={<Add />}>
                Adicionar
              </Button>
            </NavLink>
          </RecordsContainer>
        )}

        <TooltipStyled
          title={isSearch ? 'pesquisar' : 'fechar'}
        >
          <IconButton
            onClick={() => setIsSearch(!isSearch)}
          >
            {isSearch ? <Close /> : <Search />}
          </IconButton>
        </TooltipStyled>
      </ NavContainer>

      <Divider />

      {
        registers.length !== 0 ?
          <>
            <RegistersTable paginatedRegisters={paginatedRegisters} />
            <PaginationControler
              page={page}
              rowsPerPage={rowsPerPage}
              totalCount={registers.length}
              onPageChange={setPage}
              onRowsPerPageChange={setRowsPerPage}
            />
          </>
          :
          <NotFoundRecordsFooter>
            <Warning color="warning" fontSize="small" />
            <Typography variant="body2">Nenhum cadastro encontrado.</Typography>
          </NotFoundRecordsFooter>
      }
    </>
  )
}



