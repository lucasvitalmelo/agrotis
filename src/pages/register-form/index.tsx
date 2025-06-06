import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { ArrowBackIos } from '@mui/icons-material'
import { ButtonStyled } from '../../components/button/index.styled'

import { useGetLabs } from '../../hooks/use-get-labs'
import { useGetProperties } from '../../hooks/use-get-properties'

import { registerFormSchema, type FormData } from './register-form-schema'
import { FormContent, Header } from './index.styled'
import { RenderChips } from './render-chips'
import { useRegisters } from '../../hooks/use-registers'
import { useSnackbar } from '../../hooks/use-snackbar'
import { useEffect } from 'react'
import dayjs from 'dayjs'

export function RegisterForm() {
  const { data: labs = [] } = useGetLabs()
  const { data: properties = [] } = useGetProperties()
  const { registers, addRegister, editRegister } = useRegisters()
  const { showSnackbar } = useSnackbar()
  const { state } = useLocation()
  const navigate = useNavigate()


  const registerId = state?.registerId
  const initialData = registers.find((reg) => reg.id === registerId)

  const {
    control,
    register,
    handleSubmit,
    formState: { isValid },
    watch,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      startDate: null,
      endDate: null,
      labId: '',
      properties: [],
      notes: '',
    },
  })

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.nome,
        startDate: dayjs(initialData.dataInicial),
        endDate: dayjs(initialData.dataFinal),
        labId: String(initialData.laboratorio.id),
        properties: initialData.propriedades.map((p) => p.id),
        notes: initialData.observacoes ?? '',
      })
    }
  }, [initialData, reset])

  const notesValue = watch('notes') ?? ''

  const onSubmit = (data: FormData) => {
    if (!data.startDate || !data.endDate) return

    const lab = labs.find((lab) => lab.id === Number(data.labId))

    const selectedProperties = properties
      .filter((prop) => data.properties.includes(prop.id))
      .map((prop) => ({ id: prop.id, nome: prop.nome }))

    const payload = {
      nome: data.name,
      dataInicial: data.startDate.toDate().toISOString(),
      dataFinal: data.endDate.toDate().toISOString(),
      propriedades: selectedProperties,
      laboratorio: { id: lab!.id, nome: lab!.nome },
      observacoes: data.notes ?? '',
    }

    if (initialData?.id) {
      editRegister(initialData.id, payload);
      showSnackbar({ message: 'Cadastro atualizado com sucesso!', type: 'success' });
    } else {
      addRegister(payload);
      showSnackbar({ message: 'Cadastro realizado com sucesso!', type: 'success' });
    }

    reset()
    navigate('/')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Header>
        <NavLink to="/">
          <IconButton sx={{ mr: '1rem' }}>
            <ArrowBackIos fontSize="small" sx={{ color: '#fff' }} />
          </IconButton>
        </NavLink>

        <Typography variant="subtitle1" color="#fff">
          Teste Front-End /
        </Typography>

        <Typography variant="h6" color="#fff">
          Novo Cadastro
        </Typography>

        <ButtonStyled disabled={!isValid} type="submit" sx={{ ml: 'auto' }}>
          Salvar
        </ButtonStyled>
      </Header>

      <FormContent>
        <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
          <TextField
            label="Nome *"
            variant="standard"
            fullWidth
            {...register('name')}
          />

          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Data inicial *"
                value={field.value}
                onChange={field.onChange}
                slotProps={{
                  textField: {
                    variant: 'standard',
                    sx: { width: '38rem' },
                  },
                }}
              />
            )}
          />

          <Controller
            name="endDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                label="Data final *"
                value={field.value}
                onChange={field.onChange}
                slotProps={{
                  textField: {
                    variant: 'standard',
                    sx: { width: '38rem' },
                  },
                }}
              />
            )}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
          <FormControl variant="standard" fullWidth>
            <InputLabel id="properties-label">Propriedades *</InputLabel>
            <Controller
              name="properties"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  labelId="properties-label"
                  multiple
                  displayEmpty
                  renderValue={(selecteds) =>
                    !!selecteds.length && (
                      <RenderChips
                        labs={properties}
                        selectedIds={selecteds}
                      />
                    )
                  }
                >
                  {properties.map((prop) => (
                    <MenuItem key={prop.id} value={prop.id}>
                      {prop.nome}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>

          <FormControl variant="standard" fullWidth>
            <InputLabel id="lab-label">Laboratório *</InputLabel>
            <Controller
              name="labId"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  value={field.value ?? ''}
                  onChange={(e) => {
                    const v = e.target.value
                    field.onChange(v === '' ? '' : v);
                  }}
                  labelId="lab-label"
                  displayEmpty
                  variant="standard"
                >

                  {labs.map(({ id, nome }) => (
                    <MenuItem key={id} value={String(id)}>
                      {nome}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </div>

        <Box sx={{ mt: 2 }}>
          <TextField
            label="Observações"
            variant="standard"
            fullWidth
            multiline
            inputProps={{ maxLength: 100 }}
            {...register('notes')}
          />
          <Typography
            variant="caption"
            color={notesValue.length > 100 ? 'error' : 'textSecondary'}
            sx={{ display: 'block', textAlign: 'right', mt: 0.5 }}
          >
            {notesValue.length}/100
          </Typography>
        </Box>
      </FormContent>
    </form>
  );
}
