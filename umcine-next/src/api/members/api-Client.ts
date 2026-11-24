import ky from 'ky'
import { env } from '@/config/env'

const baseUrl =
  typeof window !== 'undefined' && env.apiBaseUrl.startsWith('/')
    ? `${window.location.origin}${env.apiBaseUrl}`
    : env.apiBaseUrl

export const apiClient = ky.create({ baseUrl })