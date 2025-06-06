import type { Labs } from "../../../services/api/modules/labs"

import { Chip } from "@mui/material"

export function RenderChips({ labs, selectedIds }: { labs: Labs[], selectedIds: number[] }) {
  if (!labs) return null

  return selectedIds
    .map((id) => labs.find((lab) => lab.id === id))
    .filter((lab): lab is { id: number, nome: string } => Boolean(lab))
    .map((lab) => (
      <Chip
        size='small'
        key={lab.id}
        label={lab.nome}
        sx={{
          background: '#00A98E',
          color: "white",
          marginRight: '8px'
        }}
      />
    ))
}