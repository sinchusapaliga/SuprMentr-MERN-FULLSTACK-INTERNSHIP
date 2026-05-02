import { useState, useRef } from 'react';

const PRIORITY_OPTIONS = ['low', 'medium', 'high'];

export default function TaskInput({ onAdd }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState('medium');
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    onAdd(trimmed, priority);
    setText('');
    inputRef.current?.focus();
  };

  return (
    <div className="input-section">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            ref={inputRef}
            id="task-input"
            className="task-input"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a new task…"
            autoFocus
            maxLength={120}
          />
          <button
            id="add-task-btn"
            className="add-btn"
            type="submit"
            disabled={!text.trim()}
          >
            <span className="add-btn-icon">+</span>
            Add Task
          </button>
        </div>

        <div className="input-meta">
          <span className="priority-label">Priority:</span>
          <div className="priority-chips" role="group" aria-label="Set priority">
            {PRIORITY_OPTIONS.map((p) => (
              <button
                key={p}
                type="button"
                id={`priority-${p}`}
                className={`priority-chip ${p}${priority === p ? ' active' : ''}`}
                onClick={() => setPriority(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
