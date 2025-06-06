import { ModalContainer, ModalContent, ModalFooter, ModalHeader, PropertyContent } from './index.styled'

import { ButtonStyled } from '../../../../components/button/index.styled'
import { useRegisters } from '../../../../hooks/use-registers'

import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

export type SelectedRegister = {
  type: 'property' | 'observation',
  registerId: number | undefined
} | null

type InfosModalProps = {
  open: boolean
  onClose: () => void
  register: SelectedRegister | null
}

const mappingLabel = {
  'observation': 'Observação',
  'property': 'Propriedades',
}

export default function InfosModal({ open, onClose, register }: InfosModalProps) {
  const { registers } = useRegisters()

  const currentRegister = registers.find(reg => reg.id === register?.registerId)

  const properties = currentRegister?.propriedades
  const observations = currentRegister?.observacoes

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="register-infos"
        aria-describedby="infos-of-register"

      >
        <ModalContainer sx={{ boxShadow: 12 }}>
          <ModalHeader>
            <Typography
              variant="h6"
              color={'#fff'}>
              {register && mappingLabel[register.type]}
              {' '}
              {register?.type === 'property' && '(2)'}
            </Typography>
          </ModalHeader>
          <ModalContent>


            {register?.type === 'observation' &&
              <span style={{ padding: '1rem' }}>{observations}</span>
            }

            {register?.type === 'property' && (
              properties?.map((prop, index) => {
                const bgColor = index % 2 !== 0 ? '#E8E8E8' : '#fff'

                return (
                  <PropertyContent key={prop.id} style={{ background: bgColor }}>
                    {prop.nome}
                  </PropertyContent>
                )
              })
            )}

          </ModalContent>
          <ModalFooter>
            <ButtonStyled onClick={onClose}>Fechar</ButtonStyled>
          </ModalFooter>
        </ModalContainer>
      </Modal>
    </div>
  )
}
