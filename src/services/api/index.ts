import axios from 'axios'
import { env } from '../../settings/env'

export const apiLabs = axios.create({
  baseURL: env.API_LABORATORIES
})

export const apiProps = axios.create({
  baseURL: env.API_PROPERTIES
})