import { api } from '@/lib/axios'

interface GetProfileResponse {
  id: string
  name: string
  email: string
  phone: string | null
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
