import React, { useEffect } from 'react';
import type { QuestDTO } from '@guildboard/contracts';
import '../styles/components/_quest-card.scss';

type Props = {
  quest: QuestDTO;
  onClose: () => void;
  'data-testid'?: string;
};

export default function QuestDetail({ quest, onClose, 'data-testid': dt }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="quest-detail-backdrop" onClick={onClose} data-testid={dt ?? 'quest-detail'}>
      <section
        className="quest-card quest-card--detail"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="quest-card__close" onClick={onClose} aria-label="Close quest">
          ×
        </button>
        <div className="quest-card__content">
          <h2 className="quest-card__title">{quest.title}</h2>
          <div className="quest-card__meta">
            <span>Difficulty: <span className={`quest-card__difficulty ${quest.difficulty}`}>{quest.difficulty}</span></span>
            <span>Reward: <div className='quest-card__gold' /> {quest.reward}</span>
          </div>
          <div className="quest-card__body">
            <p>
              {quest.description ?? 'No description provided.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
