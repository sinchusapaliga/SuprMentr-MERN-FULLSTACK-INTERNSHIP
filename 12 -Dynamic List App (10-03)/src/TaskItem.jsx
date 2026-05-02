import { useState } from 'react';

function formatTime(ts) {
  const d = new Date(ts);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) +
    ' · ' + d.toLocaleDateString([], { month: 'short', day: 'numeric' });
}

export default function TaskItem({ task, onDelete, onToggle }) {
  const [removing, setRemoving] = useState(false);

  const handleDelete = () => {
    setRemoving(true);
    setTimeout(() => onDelete(task.id), 280);
  };

  return (
    <li
      id={`task-${task.id}`}
      className={[
        'task-item',
        `priority-${task.priority}`,
        task.completed ? 'completed' : '',
        removing ? 'removing' : '',
      ].join(' ')}
    >
      {/* Checkbox */}
      <button
        id={`toggle-${task.id}`}
        className={`task-checkbox${task.completed ? ' checked' : ''}`}
        onClick={() => onToggle(task.id)}
        aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
        title={task.completed ? 'Mark incomplete' : 'Mark complete'}
      />

      {/* Content */}
      <div className="task-content">
        <p className="task-text" title={task.text}>{task.text}</p>
        <div className="task-meta">
          <span className={`task-priority-badge badge-${task.priority}`}>
            {task.priority}
          </span>
          <span className="task-timestamp">{formatTime(task.createdAt)}</span>
        </div>
      </div>

      {/* Delete */}
      <button
        id={`delete-${task.id}`}
        className="delete-btn"
        onClick={handleDelete}
        aria-label="Delete task"
        title="Delete task"
      >
        🗑
      </button>
    </li>
  );
}
