import { apiLabs } from "../.."

export type Labs = {
  id: number
  nome: string
}

export async function getLabs() {
  const { data } = await apiLabs.get<Labs[]>('')
  return data
}