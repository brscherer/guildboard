import { expect, test } from 'vitest';
import { QuestService } from '../service';

test('list returns array', async () => {
  const list = await QuestService.list();
  expect(Array.isArray(list)).toBe(true);
  expect(list.length).toBeGreaterThan(0);
});
