import React from 'react';

const OfflineComponent = () => {
    return (
        <div className="offline-wrapper">
            <div className="offline-content">
                {/* Animated Icon Container */}
                <div className="animated-icon-container">
                    <div className="radar-pulse"></div>
                    <div className="icon-box">
                        {/* Custom SVG: Fork & Knife with a Slash (Disconnected) */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="food-offline-svg">
                            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                            <path d="M7 2v20" />
                            <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                            {/* The "Slash" indicating no connection */}
                            <line x1="2" y1="2" x2="22" y2="22" className="slash-line" />
                        </svg>
                    </div>
                </div>

                {/* Typography */}
                <h2 className="offline-title">Oops! Connection Lost</h2>
                <p className="offline-subtitle">
                    Looks like your internet took a tea break. <br />
                    Don't let your cravings fade away!
                </p>

                {/* Retry Button */}
                <button 
                    className="retry-btn" 
                    onClick={() => window.location.reload()}
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
};

export default OfflineComponent;