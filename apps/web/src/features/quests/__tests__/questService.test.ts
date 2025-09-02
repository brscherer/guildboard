import { it, expect } from 'vitest';
import { getQuests } from '../questService';

global.fetch = (url: string) =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: 'stub', difficulty: 'easy', reward: '0' }])
  } as any);

it('getQuests returns data', async () => {
  const data = await getQuests();
  expect(data[0].title).toBe('stub');
});
