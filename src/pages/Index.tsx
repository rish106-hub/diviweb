
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import LoadingScreen from '@/components/LoadingScreen';
import FloatingElements from '@/components/FloatingElements';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [forgiven, setForgiven] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleForgiveness = () => {
    setForgiven(true);
    setShowConfetti(true);
    // Hide confetti after 3 seconds
    setTimeout(() => setShowConfetti(false), 3000);
  };

  useEffect(() => {
    // Add some scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen relative">
      <FloatingElements />
      
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl sparkle-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {['🎉', '💖', '✨', '🌸', '💝'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Landing Header */}
        <section className="text-center mb-16 animate-on-scroll">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-pacifico text-pink-600 mb-4 leading-tight">
              Disha, from your techie bhai<br />
              <span className="text-3xl md:text-4xl text-purple-500">
                who teases a bit too much... 🙈
              </span>
            </h1>
            <p className="text-xl font-caveat text-gray-600 max-w-2xl mx-auto">
              Here's my sorry, packaged in pink and pixels 💕
            </p>
          </div>
          
          {/* Floating hearts animation */}
          <div className="relative">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-pink-400 float-animation"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${Math.sin(i) * 20}px`,
                  animationDelay: `${i * 0.5}s`,
                  fontSize: '24px'
                }}
              >
                💖
              </div>
            ))}
          </div>
        </section>

        {/* Leg Pulling Chronicles */}
        <section className="mb-16 animate-on-scroll">
          <Card className="glass-card border-pink-200 overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-3xl font-caveat font-bold text-pink-600 mb-6 text-center">
                📚 Leg Pulling Chronicles
              </h2>
              <p className="text-lg text-gray-700 text-center mb-8 font-poppins">
                We've roasted, laughed, poked fun like true siblings. But sometimes, the teasing gets buggy 🐛
              </p>
              
              {/* Comic strip timeline */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '🥚', title: 'Egg Incidents', desc: 'Remember the chaos?' },
                  { icon: '😂', title: 'Laugh Bombs', desc: 'Too many to count!' },
                  { icon: '🎭', title: 'Drama Queen', desc: 'Both of us, honestly' }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white/50 rounded-2xl bounce-gentle" style={{animationDelay: `${i * 0.2}s`}}>
                    <div className="text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-caveat font-bold text-lg text-pink-600">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Error Report */}
        <section className="mb-16 animate-on-scroll">
          <Card className="glass-card border-red-200 bg-red-50/30">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-caveat font-bold text-red-500 mb-6">
                🚨 The Error Report
              </h2>
              <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-red-700 mb-2">Yesterday's Bug: Overshot Masti Threshold</h3>
                <p className="text-red-600">You stopped talking. That moment froze my entire system. 💔</p>
              </div>
              
              {/* Cartoon brother */}
              <div className="relative inline-block p-6 bg-white/70 rounded-2xl">
                <div className="text-6xl mb-4">🧑‍💻</div>
                <div className="absolute -top-2 -right-2 bg-red-400 text-white px-3 py-1 rounded-full text-sm font-bold">
                  404: Disha not talking
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why You Matter */}
        <section className="mb-16 animate-on-scroll">
          <Card className="glass-card border-blue-200 bg-blue-50/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-caveat font-bold text-blue-600 mb-6 text-center">
                💎 Why You Matter
              </h2>
              <p className="text-lg text-gray-700 text-center mb-8 font-poppins max-w-3xl mx-auto">
                You're not just a friend. You're the art bomb from Pithoragarh, the UI/UX queen, 
                the smile machine I can always count on. ✨
              </p>
              
              {/* Fun stats */}
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: 'Sketching Power', value: '💯', color: 'text-purple-600' },
                  { label: 'Chaos Level', value: '🔥🔥🔥', color: 'text-red-600' },
                  { label: 'Smile Brightness', value: '🌞 x 100', color: 'text-yellow-600' }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-6 bg-white/60 rounded-2xl float-animation" style={{animationDelay: `${i * 0.3}s`}}>
                    <div className={`text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="font-caveat text-lg text-gray-700">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Art tools illustration */}
              <div className="mt-8 text-center">
                <div className="inline-flex space-x-4 text-3xl">
                  {['🎨', '✏️', '🖌️', '📐', '🖍️'].map((tool, i) => (
                    <span key={i} className="bounce-gentle" style={{animationDelay: `${i * 0.2}s`}}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Patch Notes */}
        <section className="mb-16 animate-on-scroll">
          <Card className="glass-card border-green-200 bg-green-50/30">
            <CardContent className="p-8">
              <h2 className="text-3xl font-caveat font-bold text-green-600 mb-6 text-center">
                🔧 Patch Notes from Bhaiya
              </h2>
              
              <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-green-700 mb-4">Version 2.0 Deployed:</h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    Teasing limit patched
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    Added Respect Protocol
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✅</span>
                    Sincere apology API active
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
                  <p className="text-yellow-800 font-semibold">
                    ⏳ Waiting for: <code className="bg-yellow-200 px-2 py-1 rounded">forgivenessStatus = true</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Section: Forgive Bhaiya */}
        <section className="text-center animate-on-scroll">
          <Card className="glass-card border-pink-300 bg-pink-50/50">
            <CardContent className="p-8">
              <h2 className="text-4xl font-pacifico text-pink-600 mb-6">
                Let's reboot this sibling bond? 🔄
              </h2>
              
              {!forgiven ? (
                <div>
                  <p className="text-lg text-gray-700 mb-8 font-poppins">
                    One click to restore our chaotic, loving brother-sister connection 💕
                  </p>
                  <Button
                    onClick={handleForgiveness}
                    className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white px-8 py-4 text-lg font-caveat font-bold rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Forgive Bhaiya 💗
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-6xl bounce-gentle">😊</div>
                  <h3 className="text-2xl font-caveat font-bold text-green-600">
                    Forgiveness granted! 🎉
                  </h3>
                  <p className="text-lg text-gray-700 font-poppins">
                    Leg pulling re-enabled, softly :) 
                  </p>
                  <div className="flex justify-center space-x-4 text-3xl">
                    <span className="bounce-gentle">👫</span>
                    <span className="bounce-gentle" style={{animationDelay: '0.2s'}}>💖</span>
                    <span className="bounce-gentle" style={{animationDelay: '0.4s'}}>🌟</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-16 text-center animate-on-scroll">
          <div className="p-6 bg-white/30 rounded-2xl inline-block">
            <p className="font-caveat text-lg text-gray-600 italic">
              "From your annoying dev bhaiya, with love — and less teasing. Maybe." 
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-pink-500">💕</span>
              <Sparkles className="w-5 h-5 text-purple-400" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
