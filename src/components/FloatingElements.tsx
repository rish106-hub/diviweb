
import React from 'react';

const FloatingElements: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating sibling emojis */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`sibling-${i}`}
          className="absolute text-pink-300/20 float-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            fontSize: `${Math.random() * 8 + 12}px`
          }}
        >
          {['👫', '🤝', '😊', '🎉', '💭', '🌟'][i]}
        </div>
      ))}

      {/* Floating sparkles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute text-purple-300/25 sparkle-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            fontSize: `${Math.random() * 8 + 6}px`
          }}
        >
          ✨
        </div>
      ))}

      {/* Floating bubbles */}
      {[...Array(4)].map((_, i) => (
        <div
          key={`bubble-${i}`}
          className="absolute w-3 h-3 bg-pink-200/15 rounded-full float-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 2 + 3}s`
          }}
        />
      ))}

      {/* Memory & tech emojis */}
      {['💻', '🎨', '📱', '🤗'].map((emoji, i) => (
        <div
          key={`memory-${i}`}
          className="absolute text-blue-300/20 float-animation"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            fontSize: '16px'
          }}
        >
          {emoji}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements;
