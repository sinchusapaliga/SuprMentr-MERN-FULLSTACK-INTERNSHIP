export function Loading() {
  return (
    <div className="status-container fade-in">
      <div className="loader"></div>
      <p>Fetching weather data...</p>
    </div>
  );
}

export function Error({ message, onRetry }) {
  return (
    <div className="status-container fade-in">
      <div className="error-title">Oops!</div>
      <p className="error-msg">{message}</p>
      {onRetry && (
        <button className="retry-btn" onClick={onRetry}>
          Try Again
        </button>
      )}
    </div>
  );
}
