// Copyright (c) 2026 Meister DEV UG (haftungsbeschränkt).
// All rights reserved. See LICENSE.

export function totalDurationMs(durationsMs: readonly number[]): number {
  return durationsMs.reduce((total, durationMs) => total + durationMs, 0);
}
