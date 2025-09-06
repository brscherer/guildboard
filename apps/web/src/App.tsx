import React, { useEffect, useState } from 'react';
import { getQuests } from './features/quests/questService';
import { QuestDTO } from '../../../libs/contracts/src';
import Board from './components/Board';

export default function App() {
  const [quests, setQuests] = useState<QuestDTO[] | null>(null);
  const [error, setError] = useState<string | null>(null);

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
      <header style={{ padding: 16 }}>
        <h1>Guildboard — Quests</h1>
      </header>
      {error && <div style={{ padding: 8, color: '#b65' }}>{error}</div>}
      <main>
        <Board quests={quests ?? []} />
      </main>
    </div>
  );
}
