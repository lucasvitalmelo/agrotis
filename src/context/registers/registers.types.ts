export type Properties = {
  id: number
  nome: string
}

export type Laboratory = {
  id: number
  nome: string
}

export type Registers = {
  id?: number
  nome: string
  dataInicial: string
  dataFinal: string
  propriedades: Properties[]
  laboratorio: Laboratory
  observacoes: string
}
