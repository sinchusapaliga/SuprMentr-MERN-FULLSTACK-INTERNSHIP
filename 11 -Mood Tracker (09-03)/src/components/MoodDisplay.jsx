function MoodDisplay({ mood, note, onNoteChange, onLog }) {
  return (
    <div
      className="mood-display"
      style={{ '--mood-gradient-active': mood.gradient }}
    >
      <div className="mood-display-header">
        <span key={mood.id} className="mood-display-emoji">{mood.emoji}</span>
        <div className="mood-display-info">
          <h3>Feeling {mood.label}</h3>
          <p>{mood.description}</p>
        </div>
      </div>

      <textarea
        id="mood-note"
        className="mood-note-area"
        placeholder="Add a note about your mood... (optional)"
        value={note}
        onChange={(e) => onNoteChange(e.target.value)}
        rows={3}
      />

      <button
        id="log-mood-btn"
        className="log-btn"
        style={{ background: mood.gradient }}
        onClick={onLog}
      >
        Log This Mood ✓
      </button>
    </div>
  )
}

export default MoodDisplay
