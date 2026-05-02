import { useState, useCallback, useMemo } from 'react';
import TaskInput from './TaskInput';
import TaskItem from './TaskItem';
import './index.css';
import './components.css';
import './App.css';

const FILTERS = ['all', 'active', 'completed'];

const SAMPLE_TASKS = [
  { id: 1, text: 'Review React Hooks documentation', priority: 'high',   completed: false, createdAt: Date.now() - 120000 },
  { id: 2, text: 'Build the Dynamic List App assignment', priority: 'high',   completed: false, createdAt: Date.now() - 80000 },
  { id: 3, text: 'Style components with CSS animations', priority: 'medium', completed: true,  createdAt: Date.now() - 50000 },
  { id: 4, text: 'Push code to GitHub', priority: 'low',    completed: false, createdAt: Date.now() - 20000 },
];

let nextId = SAMPLE_TASKS.length + 1;

export default function App() {
  const [tasks, setTasks]     = useState(SAMPLE_TASKS);
  const [filter, setFilter]   = useState('all');

  /* ── Handlers (all using hooks) ───────── */
  const handleAdd = useCallback((text, priority) => {
    setTasks(prev => [
      { id: nextId++, text, priority, completed: false, createdAt: Date.now() },
      ...prev,
    ]);
  }, []);

  const handleDelete = useCallback((id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  }, []);

  const handleClearCompleted = useCallback(() => {
    setTasks(prev => prev.filter(t => !t.completed));
  }, []);

  /* ── Derived data ─────────────────────── */
  const stats = useMemo(() => ({
    total:     tasks.length,
    active:    tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t =>  t.completed).length,
  }), [tasks]);

  const filteredTasks = useMemo(() => {
    if (filter === 'active')    return tasks.filter(t => !t.completed);
    if (filter === 'completed') return tasks.filter(t =>  t.completed);
    return tasks;
  }, [tasks, filter]);

  const hasCompleted = tasks.some(t => t.completed);

  return (
    <div className="app-shell">
      {/* Hero Header */}
      <header className="app-header">
        <div className="header-glow" />
        <div className="header-icon">✅</div>
        <div className="header-text">
          <h1 className="app-title">Task<span className="title-accent">Flow</span></h1>
          <p className="app-subtitle">Stay organized, get things done.</p>
        </div>
      </header>

      {/* Main Card */}
      <main className="app-card">

        {/* Input */}
        <TaskInput onAdd={handleAdd} />

        {/* Stats */}
        <div className="stats-bar">
          <div className="stat-card"><div className="stat-value">{stats.total}</div><div className="stat-label">Total</div></div>
          <div className="stat-card"><div className="stat-value">{stats.active}</div><div className="stat-label">Active</div></div>
          <div className="stat-card"><div className="stat-value">{stats.completed}</div><div className="stat-label">Done</div></div>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs" role="tablist" aria-label="Filter tasks">
          {FILTERS.map(f => (
            <button
              key={f}
              id={`filter-${f}`}
              role="tab"
              aria-selected={filter === f}
              className={`filter-tab${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* List Header */}
        <div className="list-header">
          <span className="list-title-sm">{filteredTasks.length} task{filteredTasks.length !== 1 ? 's' : ''}</span>
          {hasCompleted && (
            <button id="clear-completed-btn" className="clear-btn" onClick={handleClearCompleted}>
              Clear completed
            </button>
          )}
        </div>

        {/* Task List */}
        {filteredTasks.length === 0 ? (
          <div className="empty-state">
            <span className="empty-icon">{filter === 'completed' ? '🎉' : '📋'}</span>
            <p className="empty-title">
              {filter === 'completed' ? 'No completed tasks yet' : 'No tasks here!'}
            </p>
            <p className="empty-sub">
              {filter === 'active' ? 'Nothing pending — enjoy your day!' : 'Add a task above to get started.'}
            </p>
          </div>
        ) : (
          <ul id="task-list" className="task-list" aria-label="Task list">
            {filteredTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDelete}
                onToggle={handleToggle}
              />
            ))}
          </ul>
        )}
      </main>

      <footer className="app-footer">
        Built with <span className="accent">React Hooks</span> · useState · useCallback · useMemo · useRef
      </footer>
    </div>
  );
}
