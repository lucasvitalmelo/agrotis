import { apiProps } from "../.."

type Properties = {
  id: number
  nome: string
  cnpj: string
}

export async function getProperties() {
  const { data } = await apiProps.get<Properties[]>('')
  return data
}