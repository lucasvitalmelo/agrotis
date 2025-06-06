export type envKeys =
  | 'API_LABORATORIES'
  | 'API_PROPERTIES'

export type envType = {
  [key in envKeys]: string
}

export const env: envType = {
  API_LABORATORIES: import.meta.env.VITE_API_LABORATORIES,
  API_PROPERTIES: import.meta.env.VITE_API_PROPERTIES,
}
