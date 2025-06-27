
import React from 'react';
import { Sparkles } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center gradient-pink">
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-white/30 sparkle-animation`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              fontSize: `${Math.random() * 20 + 10}px`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main loading content */}
      <div className="text-center z-10">
        {/* Spinning loading icon */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center spin-sparkle">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          {/* Orbiting sparkles */}
          <div className="absolute inset-0 animate-spin" style={{animationDuration: '4s'}}>
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full sparkle-animation"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `rotate(${i * 60}deg) translateY(-40px)`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-caveat font-bold text-white">
            Disha.exe is booting up...
          </h2>
          <p className="text-white/80 font-poppins">
            Fetching sibling memories 💭
          </p>
          
          {/* Loading bar */}
          <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white rounded-full loading-bar-animation" />
          </div>
        </div>

        {/* Cute brother illustration (text-based) */}
        <div className="mt-8 text-4xl bounce-gentle">
          🙏
        </div>
        <p className="text-white/60 text-sm font-poppins mt-2">
          Your brother is preparing the ultimate sorry...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
