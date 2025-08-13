import React from 'react';

const FinancialAnimation = ({ variant = 'charts' }) => {
  const animations = {
    charts: (
      <div className="relative w-full h-32 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="xMidYMid meet">
          {/* Animated bar chart */}
          <g className="animate-fade-up">
            <rect x="20" y="50" width="30" height="0" fill="#10b981" className="origin-bottom">
              <animate attributeName="height" from="0" to="35" dur="1s" fill="freeze" />
              <animate attributeName="y" from="85" to="50" dur="1s" fill="freeze" />
            </rect>
            <rect x="60" y="30" width="30" height="0" fill="#3b82f6" className="origin-bottom animation-delay-200">
              <animate attributeName="height" from="0" to="55" dur="1s" begin="0.2s" fill="freeze" />
              <animate attributeName="y" from="85" to="30" dur="1s" begin="0.2s" fill="freeze" />
            </rect>
            <rect x="100" y="40" width="30" height="0" fill="#8b5cf6" className="origin-bottom animation-delay-400">
              <animate attributeName="height" from="0" to="45" dur="1s" begin="0.4s" fill="freeze" />
              <animate attributeName="y" from="85" to="40" dur="1s" begin="0.4s" fill="freeze" />
            </rect>
            <rect x="140" y="25" width="30" height="0" fill="#10b981" className="origin-bottom animation-delay-500">
              <animate attributeName="height" from="0" to="60" dur="1s" begin="0.6s" fill="freeze" />
              <animate attributeName="y" from="85" to="25" dur="1s" begin="0.6s" fill="freeze" />
            </rect>
          </g>
          
          {/* Animated trend line */}
          <path
            d="M 20 70 Q 85 40 140 35 T 250 25"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
            strokeDasharray="400"
            strokeDashoffset="400"
            opacity="0.8"
          >
            <animate attributeName="stroke-dashoffset" from="400" to="0" dur="2s" begin="0.5s" fill="freeze" />
          </path>

          {/* Floating percentage indicators */}
          <text x="270" y="40" fontSize="24" fontWeight="bold" fill="#10b981" opacity="0" className="font-mono">
            +52.7%
            <animate attributeName="opacity" from="0" to="1" dur="1s" begin="1.5s" fill="freeze" />
            <animateTransform
              attributeName="transform"
              type="translate"
              from="0 10"
              to="0 0"
              dur="1s"
              begin="1.5s"
              fill="freeze"
            />
          </text>
        </svg>
      </div>
    ),
    
    dataFlow: (
      <div className="relative w-full h-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Animated data points flowing */}
          <div className="flex gap-4 items-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse animation-delay-${i * 100}`}
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100">
            <line x1="0" y1="50" x2="400" y2="50" stroke="#e5e7eb" strokeWidth="1" />
            <line x1="0" y1="50" x2="400" y2="50" stroke="url(#gradient)" strokeWidth="2" strokeDasharray="10 5" className="data-stream" />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    ),
    
    creditScore: (
      <div className="relative w-full h-32 flex items-center justify-center">
        <div className="relative">
          {/* Circular progress indicator */}
          <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#e5e7eb"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              fill="none"
              strokeDasharray="314"
              strokeDashoffset="314"
              className="transition-all duration-1000"
            >
              <animate attributeName="stroke-dashoffset" from="314" to="94" dur="2s" fill="freeze" />
            </circle>
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Score number in center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800 font-mono animate-fade-in animation-delay-500">750</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider animate-fade-in animation-delay-700">Score</div>
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <div className="relative">
        {/* Background subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />
        </div>
        
        {/* Main animation content */}
        <div className="relative z-10">
          {animations[variant]}
        </div>
      </div>
    </div>
  );
};

export default FinancialAnimation;