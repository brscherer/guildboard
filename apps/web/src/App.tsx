import React, { useEffect, useState } from 'react';
import { getQuests, saveQuest } from './features/quests/questService';
import { QuestDTO } from '../../../libs/contracts/src';
import Board from './components/Board';
import AddQuestModal from './components/AddQuestModal';

export default function App() {
  const [quests, setQuests] = useState<QuestDTO[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isAddQuestModalOpen, setIsAddQuestModalOpen] = useState<boolean>(false);

  useEffect(() => {
    let mounted = true;
    getQuests()
      .then((q) => {
        if (mounted) setQuests(q);
      })
      .catch((e) => {
        console.warn('Failed to fetch quests, using fallback', e);
        if (mounted) {
          setError('Using fallback quests');
          setQuests([
            { id: 1, title: 'Slay the Crawler', difficulty: 'easy', reward: '50 gold' },
            { id: 2, title: 'Rescue the Princess', difficulty: 'medium', reward: '200 gold' },
            { id: 3, title: 'Find the Lost Tome', difficulty: 'hard', reward: '500 gold' },
          ]);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  

  return (
    <div>
      <header style={{ padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1>Guildboard — Quests</h1>
        <button onClick={() => setIsAddQuestModalOpen(true)}>+ Add Quest</button>
      </header>
      {error && <div style={{ padding: 8, color: '#b65' }}>{error}</div>}
      <main>
        <Board quests={quests ?? []} />
        {
          isAddQuestModalOpen && (
            <AddQuestModal
              isOpen={isAddQuestModalOpen}
              onClose={() => setIsAddQuestModalOpen(false)}
              onSubmit={(quest) => {
                saveQuest(quest)
                  .then((newQuest) => {
                    setQuests((prev) => (prev ? [...prev, newQuest] : [newQuest]));
                  })
                  .catch((e) => {
                    alert("Failed to save quest: " + e.message);
                  })
                  .finally(() => {
                    setIsAddQuestModalOpen(false);
                  });
              }}
            />
          )
        }
      </main>
    </div>
  );
}
