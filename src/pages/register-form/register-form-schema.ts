import dayjs, { Dayjs } from 'dayjs'
import { z } from 'zod'

export type FormData = {
  name: string
  startDate: Dayjs | null
  endDate: Dayjs | null
  labId: string
  properties: number[]
  notes?: string
}

const dateField = z
  .custom<Dayjs>((v) => dayjs.isDayjs(v) && v.isValid())
  .refine(Boolean)

export const registerFormSchema: z.ZodType<FormData> = z.object({
  name: z.string().min(1),
  startDate: dateField,
  endDate: dateField,
  labId: z.string().min(1),
  properties: z.array(z.number()).min(1),
  notes: z.string().max(100).optional(),
})
