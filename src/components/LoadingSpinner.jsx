import "./LoadingSpinner.css"

const LoadingSpinner = ({ size = "medium", color = "#e50914" }) => {
  return (
    <div className={`loading-spinner ${size}`}>
      <div className="spinner" style={{ borderTopColor: color }}></div>
    </div>
  )
}

export default LoadingSpinner
