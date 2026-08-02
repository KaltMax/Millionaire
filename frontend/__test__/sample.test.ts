import { describe, it, expect } from 'vitest';

// Sanity check that the Vitest setup runs correctly
describe('vitest smoke test', () => {
  it('adds numbers', () => {
    const result: number = 2 + 3;
    expect(result).toBe(5);
  });
});
