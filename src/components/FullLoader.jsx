import "../styles/fullLoader.css";

export const FullLoader = ({ variant = "full-screen" }) => {
  return (
    <div className={`loader-container ${variant}`}>
      <svg width="77" height="83" viewBox="0 0 77 83" className="global-loader">
        <path
          d="M41 6L6.00007 28.5L6 32L6.00007 34.5L41 57.5"
          fill="none"
          stroke="#262641"
          strokeWidth="12px"
          strokeDasharray="100 100"
          className="path-1"
        />
        <path
          d="M36 77.5L70.9999 55L71 51.5L70.9999 49L36 26"
          fill="none"
          stroke="#262641"
          strokeWidth="12px"
          strokeDasharray="100 100"
          className="path-2"
        />
      </svg>
    </div>
  );
};
