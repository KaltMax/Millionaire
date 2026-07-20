import type { Round } from '../types/quiz.ts'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:3000'

export async function fetchRound(signal?: AbortSignal): Promise<Round> {
  const response = await fetch(`${API_BASE_URL}/round`, { signal })

  if (!response.ok) {
    throw new Error(`Failed to fetch round: ${response.status} ${response.statusText}`)
  }

  return response.json()
}
