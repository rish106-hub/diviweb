
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`heart-${i}`}
          className="absolute text-pink-300/30 float-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${Math.random() * 15 + 15}px`
          }}
        >
          💖
        </div>
      ))}

      {/* Floating sparkles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute text-purple-300/40 sparkle-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            fontSize: `${Math.random() * 12 + 8}px`
          }}
        >
          ✨
        </div>
      ))}

      {/* Floating bubbles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`bubble-${i}`}
          className="absolute w-4 h-4 bg-pink-200/20 rounded-full float-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 2 + 3}s`
          }}
        />
      ))}

      {/* Art tools floating around */}
      {['🎨', '✏️', '🖌️', '📐', '🖍️'].map((emoji, i) => (
        <div
          key={`tool-${i}`}
          className="absolute text-blue-300/30 float-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            fontSize: '20px'
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
