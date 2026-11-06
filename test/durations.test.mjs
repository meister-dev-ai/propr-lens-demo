// Copyright (c) 2026 Meister DEV UG (haftungsbeschränkt).
// All rights reserved. See LICENSE.

import assert from 'node:assert/strict';
import test from 'node:test';
import { summarizeDurations, totalDurationMs } from '../src/durations.ts';

test('an empty review queue has zero total duration', () => {
  assert.equal(totalDurationMs([]), 0);
});

test('total duration includes every review', () => {
  assert.equal(totalDurationMs([100, 25, 3]), 128);
});

test('duration summaries order numeric values by magnitude', () => {
  assert.deepEqual(summarizeDurations([2, 10, 100]), {
    count: 3,
    totalMs: 112,
    minMs: 2,
    medianMs: 10,
    maxMs: 100,
  });
});

test('reading summary statistics preserves the caller\'s queue order', () => {
  const durationsMs = [30, 1, 20];
  summarizeDurations(durationsMs);
  assert.deepEqual(durationsMs, [30, 1, 20]);
});

test('the median of an even-sized queue averages its middle durations', () => {
  assert.equal(summarizeDurations([10, 20, 30, 40]).medianMs, 25);
});

test('an empty queue has an empty summary', () => {
  assert.deepEqual(summarizeDurations([]), {
    count: 0,
    totalMs: 0,
    minMs: 0,
    medianMs: 0,
    maxMs: 0,
  });
});
