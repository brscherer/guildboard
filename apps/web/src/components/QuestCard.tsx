import React from 'react';
import type { QuestDTO } from '@guildboard/contracts';
import '../styles/components/_quest-card.scss';

type Props = {
  quest: QuestDTO;
  rotation?: number;
  onSelect: () => void;
  'data-testid'?: string;
};

export default function QuestCard({ quest, rotation = 0, onSelect, 'data-testid': dt }: Props) {
  // CSS variable for rotation so we can assert styles if needed
  const style: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
  };

  return (
    <button
      className="quest-card"
      style={style}
      onClick={onSelect}
      aria-label={`Open quest ${quest.title}`}
      data-testid={dt ?? 'quest-card'}
    >
      <div className="quest-card__nail" aria-hidden="true" />
      <div className="quest-card__content">
        <h3 className="quest-card__title" data-testid="quest-title">
          {quest.title}
        </h3>
        {/* placeholder blurred preview */}
        <p className="quest-card__preview" data-testid="quest-preview">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
      </div>
    </button>
  );
}
