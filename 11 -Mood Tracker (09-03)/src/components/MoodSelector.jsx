import MOODS from './moods'

function MoodSelector({ currentMood, onSelect }) {
  return (
    <section className="mood-selector">
      <h2>Select Your Mood</h2>
      <div className="moods-grid">
        {MOODS.map((mood) => (
          <button
            key={mood.id}
            id={`mood-btn-${mood.id}`}
            className={`mood-btn ${currentMood?.id === mood.id ? 'active' : ''}`}
            style={{ '--mood-gradient': mood.gradient }}
            onClick={() => onSelect(mood)}
            title={mood.label}
          >
            <span className="mood-emoji">{mood.emoji}</span>
            <span className="mood-label">{mood.label}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default MoodSelector
