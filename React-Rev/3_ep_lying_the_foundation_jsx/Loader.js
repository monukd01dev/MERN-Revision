import React from 'react';

const Loader = () => {
  // Styles for centering the loader on the screen
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '50vh', // Takes up half the screen height while waiting
    fontFamily: 'system-ui, -apple-system, sans-serif',
  };

  // Styles for the rotating spinner ring
  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '5px solid rgba(255, 255, 255, 0.1)', // Faint track line
    borderTop: '5px solid #ffffff',               // Solid glowing indicator
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',        // Tied to the keyframe below
  };

  const textStyle = {
    color: '#ffffff',
    marginTop: '1rem',
    fontSize: '1rem',
    letterSpacing: '1px',
    opacity: 0.8,
  };

  return (
    <div style={containerStyle}>
      {/* Dynamic injection of the keyframe rotation animation */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      
      <div style={spinnerStyle}></div>
      <p style={textStyle}>Loading Users...</p>
    </div>
  );
};

export default Loader;
