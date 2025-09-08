import type { QuestDTO } from '@guildboard/contracts';

// Simple in-memory store for POC
const quests: QuestDTO[] = [
  { id: 1, title: 'Slay the Crawler', difficulty: 'easy', reward: '50 gold' },
  { id: 2, title: 'Rescue the Villagers', difficulty: 'medium', reward: '200 gold' },
];

export const QuestRepo = {
  findAll: async (): Promise<QuestDTO[]> => {
    return quests;
  },
  findById: async (id: number): Promise<QuestDTO | undefined> => {
    return quests.find((q) => q.id === id);
  },
  save: async (quest: Omit<QuestDTO, 'id'>): Promise<QuestDTO> => {
    const newQuest = { id: quests.length + 1, ...quest };
    quests.push(newQuest);
    return newQuest;
  }
};
