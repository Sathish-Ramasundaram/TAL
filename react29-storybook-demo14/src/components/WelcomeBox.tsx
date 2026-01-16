import React from 'react';

// This 'interface' tells TypeScript what kind of data 
// this component expects to receive (Props).
interface WelcomeBoxProps {
  title: string;
  message: string;
  backgroundColor?: string; // The '?' means this is optional
}

/**
 * A simple WelcomeBox component built with React and TypeScript.
 */
const WelcomeBox: React.FC<WelcomeBoxProps> = ({ 
  title, 
  message, 
  backgroundColor = '#f0f9ff' 
}) => {
  return (
    <div 
      style={{ 
        padding: '20px', 
        borderRadius: '12px', 
        border: '2px solid #3b82f6',
        backgroundColor: backgroundColor,
        fontFamily: 'sans-serif',
        maxWidth: '400px'
      }}
    >
      <h2 style={{ color: '#1e40af', marginTop: 0 }}>{title}</h2>
      <p style={{ color: '#1e3a8a', lineHeight: '1.5' }}>{message}</p>
    </div>
  );
};

export default WelcomeBox;