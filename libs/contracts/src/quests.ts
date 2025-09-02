export interface QuestDTO {
  id: number;
  title: string;
  difficulty: 'easy' | 'medium' | 'hard';
  reward: string;
}