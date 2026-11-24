import ky from 'ky'
import { env } from '../../config/env'

const raw =
  typeof window !== 'undefined' && env.apiBaseUrl.startsWith('/')
    ? `${window.location.origin}${env.apiBaseUrl}`
    : env.apiBaseUrl

const baseUrl = raw.endsWith('/') ? raw : `${raw}/`

export const apiClient = ky.create({ baseUrl })