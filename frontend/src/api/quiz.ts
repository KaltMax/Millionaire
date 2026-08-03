import type { Round, GuessRequest, GuessResult } from '@millionaire/shared';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export async function fetchRound(signal?: AbortSignal): Promise<Round> {
  const response = await fetch(`${API_BASE_URL}/round`, { signal });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch round: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}

export async function submitGuess(
  roundId: number,
  answerId: number,
  signal?: AbortSignal,
): Promise<GuessResult> {
  const body: GuessRequest = { answerId };

  const response: Response = await fetch(
    `${API_BASE_URL}/round/${roundId}/guess`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal,
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to submit guess: ${response.status} ${response.statusText}`,
    );
  }

  return response.json();
}
