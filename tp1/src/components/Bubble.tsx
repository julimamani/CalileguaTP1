import React from 'react';
import './Bubble.css'; // Asegúrate de crear este archivo CSS

const Bubble: React.FC = () => {
    return (
      <div className="bubble-container">
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
      </div>
    );
  };

export default Bubble;