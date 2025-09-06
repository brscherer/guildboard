import type { QuestDTO } from '@guildboard/contracts';
import React, { useState } from 'react';
import '../styles/components/_board.scss';
import QuestCard from './QuestCard';
import QuestDetail from './QuestDetail';

type Props = {
  quests: QuestDTO[];
};

export default function Board({ quests }: Props) {
  const [selected, setSelected] = useState<QuestDTO | null>(null);

  return (
    <div className="board" data-testid="board">
      {quests.map((q, i) => (
        <QuestCard
          key={q.id}
          quest={q}
          // rotate slightly by index for randomness
          rotation={((i % 5) - 2) * 2} // yields -4, -2, 0, 2, 4 degrees
          onSelect={() => setSelected(q)}
          data-testid={`quest-card-${q.id}`}
        />
      ))}

      {selected && (
        <QuestDetail
          quest={selected}
          onClose={() => setSelected(null)}
          data-testid="quest-detail"
        />
      )}
    </div>
  );
}
