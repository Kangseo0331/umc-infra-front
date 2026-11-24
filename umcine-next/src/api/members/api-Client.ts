import ky from "ky";
import { env } from "../../config/env";

export const apiClient = ky.create({
  baseUrl: typeof window !== 'undefined'
    ? `${window.location.origin}${env.apiBaseUrl}`
    : env.apiBaseUrl,
})