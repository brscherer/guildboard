import React, { useEffect, useState } from 'react';
import { getQuests } from './questService';
import type { QuestDTO } from '@guildboard/contracts';

export default function QuestList() {
  const [quests, setQuests] = useState<QuestDTO[] | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    getQuests()
      .then(setQuests)
      .catch((e) => setErr(String(e)));
  }, []);

  if (err) return <div role="alert">Error: {err}</div>;
  if (!quests) return <div>Loading...</div>;

  return (
    <ul>
      {quests.map((q) => (
        <li key={q.id}>
          <strong>{q.title}</strong> — {q.difficulty} — {q.reward}
        </li>
      ))}
    </ul>
  );
}
