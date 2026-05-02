function MoodHistory({ history }) {
  return (
    <section className="mood-history">
      <h2>Recent Moods</h2>
      <div className="history-list">
        {history.map((entry, index) => (
          <div
            key={entry.id}
            className="history-item"
            style={{ animationDelay: `${index * 0.06}s` }}
          >
            <span className="history-emoji">{entry.mood.emoji}</span>
            <div className="history-body">
              <div className="history-mood">{entry.mood.label}</div>
              {entry.note && <div className="history-note">{entry.note}</div>}
            </div>
            <div className="history-time">
              <span>{entry.date}</span>
              <span>{entry.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MoodHistory
