import { QuestRepo } from './repo';
import type { QuestDTO } from '@guildboard/contracts';

export const QuestService = {
  list: async (): Promise<QuestDTO[]> => {
    // add business logic if needed, map DTOs, etc.
    return QuestRepo.findAll();
  },
  save: async (quest: Omit<QuestDTO, 'id'>): Promise<QuestDTO> => {
    // add business logic if needed, validations, etc.
    return QuestRepo.save(quest);
  }
};
