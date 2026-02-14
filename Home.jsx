import React, { useState } from 'react';
import MoodTracker from '../components/MoodTracker';
import QuoteDisplay from '../components/QuoteDisplay';
import PomodoroTimer from '../components/PomodoroTimer';
import AmbientSounds from '../components/AmbientSounds';
import WebcamWidget from '../components/WebcamWidget';
import AICompanion from '../components/AICompanion';
import WallpaperGallery from '../components/WallpaperGallery';
import FloatingBubbles from '../components/FloatingBubbles';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const [currentMood, setCurrentMood] = useState('happy');
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  const handleTimerChange = (active, onBreak) => {
    setIsTimerActive(active);
    setIsBreak(onBreak);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 relative overflow-hidden">
      <FloatingBubbles />

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border-2 border-pink-200 mb-4">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Wellness Dashboard
            </h1>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </div>
          <p className="text-gray-600 text-lg">Your daily companion for mood tracking, productivity & peace ✨</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column */}
          <div className="space-y-6">
            <MoodTracker currentMood={currentMood} onMoodChange={setCurrentMood} />
            <PomodoroTimer onTimerChange={handleTimerChange} />
          </div>

          {/* Middle Column */}
          <div className="space-y-6">
            <QuoteDisplay mood={currentMood} />
            <AmbientSounds isTimerActive={isTimerActive} isBreak={isBreak} />
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <WallpaperGallery />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl px-6 py-4 inline-block border border-pink-100">
            <p className="text-sm text-gray-600">
              Made with 💖 for your wellbeing • Try the webcam mirror & AI chat!
            </p>
          </div>
        </div>
      </div>

      {/* Floating Widgets */}
      <WebcamWidget />
      <AICompanion currentMood={currentMood} />
    </div>
  );
}
