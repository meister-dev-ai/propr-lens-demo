// Copyright (c) 2026 Meister DEV UG (haftungsbeschränkt).
// All rights reserved. See LICENSE.

import assert from 'node:assert/strict';
import test from 'node:test';
import { totalDurationMs } from '../src/durations.ts';

test('an empty review queue has zero total duration', () => {
  assert.equal(totalDurationMs([]), 0);
});

test('total duration includes every review', () => {
  assert.equal(totalDurationMs([100, 25, 3]), 128);
});
