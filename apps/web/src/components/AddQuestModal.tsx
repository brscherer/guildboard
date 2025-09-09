import React, { useState } from "react";
import type { QuestDTO } from "@guildboard/contracts";
import '../styles/components/_add-quest-modal.scss';

interface AddQuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (quest: Omit<QuestDTO, "id">) => void;
}

const difficulties = ["easy", "medium", "hard"] as QuestDTO["difficulty"][];

const AddQuestModal: React.FC<AddQuestModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState(difficulties[0]);
  const [reward, setReward] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || reward < 0) return;
    onSubmit({ title, description, difficulty, reward: `${reward} gold` });
    setTitle("");
    setDescription("");
    setDifficulty(difficulties[0]);
    setReward(0);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="add-quest-modal__overlay">
      <div className="add-quest-modal">
        <button className="add-quest-modal__close-btn" onClick={onClose}>&times;</button>
        <h2 className="add-quest-modal__title">Add New Quest</h2>
        <form className="add-quest-modal__form" onSubmit={handleSubmit}>
          <label className="add-quest-modal__label">
            Title
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
              className="add-quest-modal__input"
              placeholder="Quest title"
            />
          </label>
          <label className="add-quest-modal__label">
            Description
            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
              className="add-quest-modal__input"
              placeholder="Quest description"
              rows={4}
            />
          </label>
          <label className="add-quest-modal__label">
            Difficulty
            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value as QuestDTO["difficulty"])}
              className="add-quest-modal__select"
            >
              {difficulties.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
          <label className="add-quest-modal__label">
            Reward (Gold)
            <input
              type="number"
              min={0}
              value={reward}
              onChange={e => setReward(Number(e.target.value))}
              required
              className="add-quest-modal__input"
              placeholder="0"
            />
          </label>
          <button type="submit" className="add-quest-modal__submit-btn">Add Quest</button>
        </form>
      </div>
    </div>
  );
};

export default AddQuestModal;
