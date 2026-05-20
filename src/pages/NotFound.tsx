// src/pages/NotFound.tsx
import React from 'react';

interface NotFoundProps {
  onNavigate: (page: string) => void;
}

export default function NotFound({ onNavigate }: NotFoundProps) {
  return (
    <div className="pt-navbar">
      <div className="error-container">
        <div className="error-card">
          {/* 404 icon */}
          <div className="error-icon">
            <i className="fas fa-map-signs"></i>
          </div>

          <h1 className="error-title">404 – Page not found</h1>
          <p className="error-message">
            The page you are looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>

          <button
            className="btn btn-primary error-retry-btn"
            onClick={() => onNavigate('home')}
          >
            <i className="fas fa-home me-2"></i>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}