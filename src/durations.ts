// Copyright (c) 2026 Meister DEV UG (haftungsbeschränkt).
// All rights reserved. See LICENSE.

export function totalDurationMs(durationsMs: readonly number[]): number {
  return durationsMs.reduce((total, durationMs) => total + durationMs, 0);
}

export interface DurationSummary {
  count: number;
  totalMs: number;
  minMs: number;
  medianMs: number;
  maxMs: number;
}

export function summarizeDurations(durationsMs: number[]): DurationSummary {
  if (durationsMs.length === 0) {
    return { count: 0, totalMs: 0, minMs: 0, medianMs: 0, maxMs: 0 };
  }

  const ordered = durationsMs.sort();
  const middle = Math.floor(ordered.length / 2);

  return {
    count: ordered.length,
    totalMs: totalDurationMs(ordered),
    minMs: ordered[0] ?? 0,
    medianMs: ordered[middle] ?? 0,
    maxMs: ordered.at(-1) ?? 0,
  };
}
