import { useState } from 'react'
import MoodSelector from './components/MoodSelector'
import MoodDisplay from './components/MoodDisplay'
import MoodHistory from './components/MoodHistory'
import './App.css'

function App() {
  const [currentMood, setCurrentMood] = useState(null)
  const [moodHistory, setMoodHistory] = useState([])
  const [note, setNote] = useState('')

  const handleMoodSelect = (mood) => {
    setCurrentMood(mood)
  }

  const handleLogMood = () => {
    if (!currentMood) return
    const entry = {
      mood: currentMood,
      note: note.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      date: new Date().toLocaleDateString([], { month: 'short', day: 'numeric' }),
      id: Date.now(),
    }
    setMoodHistory(prev => [entry, ...prev].slice(0, 10))
    setNote('')
  }

  return (
    <div className={`app ${currentMood ? `app--${currentMood.id}` : ''}`}>
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container">
        <header className="header">
          <div className="header-icon">🧠</div>
          <h1 className="header-title">MoodBoard</h1>
          <p className="header-subtitle">How are you feeling today?</p>
        </header>

        <MoodSelector currentMood={currentMood} onSelect={handleMoodSelect} />

        {currentMood && (
          <MoodDisplay
            mood={currentMood}
            note={note}
            onNoteChange={setNote}
            onLog={handleLogMood}
          />
        )}

        {moodHistory.length > 0 && <MoodHistory history={moodHistory} />}
      </div>
    </div>
  )
}

export default App
