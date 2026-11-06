const test = require('node:test');
const assert = require('node:assert/strict');
const { isWithinWorkingHours } = require('../src/middleware/working-hours');

test('allows weekdays from 09:00 inclusive to 17:00 exclusive', () => {
  assert.equal(isWithinWorkingHours(new Date(2026, 9, 19, 9, 0)), true);
  assert.equal(isWithinWorkingHours(new Date(2026, 9, 23, 16, 59)), true);
  assert.equal(isWithinWorkingHours(new Date(2026, 9, 19, 8, 59)), false);
  assert.equal(isWithinWorkingHours(new Date(2026, 9, 19, 17, 0)), false);
});

test('rejects Saturday and Sunday even during opening hours', () => {
  assert.equal(isWithinWorkingHours(new Date(2026, 9, 24, 10, 0)), false);
  assert.equal(isWithinWorkingHours(new Date(2026, 9, 25, 10, 0)), false);
});