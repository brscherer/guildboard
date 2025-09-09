import type { QuestDTO } from '@guildboard/contracts';

const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000';

export async function getQuests(): Promise<QuestDTO[]> {
  try {
    const res = await fetch(`${API_BASE}/api/quests`);
    if (!res.ok) throw new Error('Failed to fetch quests');
    return (await res.json()) as QuestDTO[];
  } catch (e) {
    console.error('Error fetching quests:', e);
    throw e;
  }
}

export async function saveQuest(quest: Omit<QuestDTO, 'id'>): Promise<QuestDTO> {
  try {
    const res = await fetch(`${API_BASE}/api/quests`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quest),
    });
    if (!res.ok) throw new Error('Failed to save quest');
    return (await res.json()) as QuestDTO;
  } catch (e) {
    console.error('Error saving quest:', e);
    throw e;
  }
}