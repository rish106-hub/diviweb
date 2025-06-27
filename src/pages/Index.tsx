
import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
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
    // Set state to show forgiveness
    setForgiven(true);
    setShowConfetti(true);
    
    // Redirect to WhatsApp with predefined message
    const whatsappMessage = encodeURIComponent('Forgiven, aage se mt preshaan krna');
    const whatsappUrl = `https://wa.me/+919749452397?text=${whatsappMessage}`;
    // Replace +91XXXXXXXXXX with your actual WhatsApp number
    window.location.href = whatsappUrl;
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
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xl sparkle-animation"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            >
              {['🎉', '👫', '✨', '🌟', '🤗', '😊'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 py-6 md:py-8 relative z-10">
        {/* Landing Header */}
        <section className="text-center mb-12 md:mb-16 animate-on-scroll">
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-pacifico text-pink-700 mb-4 leading-tight drop-shadow-sm">
              Disha, from your techie brother<br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-purple-600">
                who teases a bit too much... 🙈
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl font-caveat text-gray-700 max-w-2xl mx-auto font-semibold">
              Here's my sorry, packaged in pink and pixels 💕
            </p>
          </div>
          
          {/* Floating sibling emojis animation */}
          <div className="relative">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-pink-500 float-animation hidden md:block"
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${Math.sin(i) * 20}px`,
                  animationDelay: `${i * 0.5}s`,
                  fontSize: '20px'
                }}
              >
                {['👫', '🤝', '😊', '🎉', '🌟', '🤗'][i]}
              </div>
            ))}
          </div>
        </section>

        {/* Leg Pulling Chronicles */}
        <section className="mb-12 md:mb-16 animate-on-scroll">
          <Card className="glass-card border-pink-200 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-caveat font-bold text-pink-700 mb-6 text-center">
                📚 Leg Pulling Chronicles
              </h2>
              <p className="text-base md:text-lg text-gray-800 text-center mb-6 md:mb-8 font-poppins font-medium">
                We've roasted, laughed, poked fun like true siblings. But sometimes, the teasing gets buggy 🐛
              </p>
              
              {/* Comic strip timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: '🥚', title: 'Egg Incidents', desc: 'Remember the chaos?' },
                  { icon: '😂', title: 'Laugh Bombs', desc: 'Too many to count!' },
                  { icon: '🎭', title: 'Drama Queen', desc: 'Both of us, honestly' }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-white/60 rounded-2xl bounce-gentle shadow-sm" style={{animationDelay: `${i * 0.2}s`}}>
                    <div className="text-3xl md:text-4xl mb-3">{item.icon}</div>
                    <h3 className="font-caveat font-bold text-lg text-pink-700">{item.title}</h3>
                    <p className="text-gray-700 text-sm font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Error Report */}
        <section className="mb-12 md:mb-16 animate-on-scroll">
          <Card className="glass-card border-red-200 bg-red-50/40">
            <CardContent className="p-6 md:p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-caveat font-bold text-red-600 mb-6">
                🚨 The Error Report
              </h2>
              <div className="bg-red-100/80 border-l-4 border-red-500 p-4 md:p-6 rounded-lg mb-6">
                <h3 className="text-lg md:text-xl font-bold text-red-800 mb-2">Yesterday's Bug: Overshot Masti Threshold</h3>
                <p className="text-red-700 font-medium">You stopped talking.</p>
              </div>
              
              {/* Cartoon brother */}
              <div className="relative inline-block p-4 md:p-6 bg-white/80 rounded-2xl">
                <div className="text-4xl md:text-6xl mb-4">🧑‍💻</div>
                <div className="absolute -top-2 -right-2 bg-red-500 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold">
                  404: Disha not talking
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why You Matter */}
        <section className="mb-12 md:mb-16 animate-on-scroll">
          <Card className="glass-card border-blue-200 bg-blue-50/40">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-caveat font-bold text-blue-700 mb-6 text-center">
                💎 Why You Matter
              </h2>
              <p className="text-base md:text-lg text-gray-800 text-center mb-6 md:mb-8 font-poppins font-medium max-w-3xl mx-auto">
                You're not just a friend. You sketch better than I code, your UI game is strong, and yeah, you're the only one who can shut me up with just a look. ✨
              </p>
              
              {/* Fun stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { label: 'Sketching Power', value: '💯', color: 'text-purple-700' },
                  { label: 'Chaos Level', value: '🔥🔥🔥', color: 'text-red-600' },
                  { label: 'Smile Brightness', value: '🌞 x 100', color: 'text-yellow-600' }
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 md:p-6 bg-white/70 rounded-2xl float-animation shadow-sm" style={{animationDelay: `${i * 0.3}s`}}>
                    <div className={`text-xl md:text-2xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="font-caveat text-base md:text-lg text-gray-800 font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Art tools illustration */}
              <div className="mt-6 md:mt-8 text-center">
                <div className="inline-flex space-x-2 md:space-x-4 text-2xl md:text-3xl">
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
        <section className="mb-12 md:mb-16 animate-on-scroll">
          <Card className="glass-card border-green-200 bg-green-50/40">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-caveat font-bold text-green-700 mb-6 text-center">
                🔧 Patch Notes from Brother
              </h2>
              
              <div className="bg-green-100/80 border-l-4 border-green-500 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-bold text-green-800 mb-4">Version 2.0 Deployed:</h3>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✅</span>
                    <span className="font-medium">Teasing limit patched</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✅</span>
                    <span className="font-medium">Added Respect Protocol</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-600 mr-3">✅</span>
                    <span className="font-medium">Sincere apology API active</span>
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-yellow-100/80 rounded-lg">
                  <p className="text-yellow-900 font-semibold text-sm md:text-base">
                    ⏳ Waiting for: <code className="bg-yellow-200 px-2 py-1 rounded text-xs md:text-sm">forgivenessStatus = true</code>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Final Section: Forgive Brother */}
        <section className="text-center animate-on-scroll">
          <Card className="glass-card border-pink-300 bg-pink-50/60">
            <CardContent className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-pacifico text-pink-700 mb-6">
                Let's reboot this sibling bond? 🔄
              </h2>
              
              {!forgiven ? (
                <div>
                  <p className="text-base md:text-lg text-gray-800 mb-6 md:mb-8 font-poppins font-medium">
                    One click to restore our chaotic, loving brother-sister connection 🤗
                  </p>
                  <Button
                    onClick={handleForgiveness}
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-caveat font-bold rounded-full transform transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <span className="mr-2">🤗</span>
                    Forgive Brother
                  </Button>
                </div>
              ) : (
                <div className="space-y-4 md:space-y-6">
                  <div className="text-4xl md:text-6xl bounce-gentle">😊</div>
                  <h3 className="text-xl md:text-2xl font-caveat font-bold text-green-700">
                    Forgiveness granted! 🎉
                  </h3>
                  <p className="text-base md:text-lg text-gray-800 font-poppins font-medium">
                    Leg pulling re-enabled, softly :) 
                  </p>
                  <div className="flex justify-center space-x-4 text-2xl md:text-3xl">
                    <span className="bounce-gentle">👫</span>
                    <span className="bounce-gentle" style={{animationDelay: '0.2s'}}>🤗</span>
                    <span className="bounce-gentle" style={{animationDelay: '0.4s'}}>🌟</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="mt-12 md:mt-16 text-center animate-on-scroll">
          <div className="p-4 md:p-6 bg-white/40 rounded-2xl inline-block">
            <p className="font-caveat text-base md:text-lg text-gray-700 italic font-semibold">
              From your annoying dev <a href="https://www.linkedin.com/in/rishav-dewan/" className="text-blue-600 hover:text-blue-800 transition-colors" target="_blank">brother</a>, with love — and less teasing. Maybe.
            </p>
            <div className="mt-4 flex justify-center space-x-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-pink-500" />
              <span className="text-purple-500">🤗</span>
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-purple-500" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
