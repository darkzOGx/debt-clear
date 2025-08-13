import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900 py-4">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 20px
            )`
          }}
          animate={{
            x: [0, 40],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Flowing particles effect */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              top: `${20 + (i * 10)}%`,
              left: `-2%`
            }}
            animate={{
              x: ['0vw', '100vw'],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 6 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-center">
          {/* Left decorative line */}
          <motion.div
            className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-400 to-gray-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          
          {/* Center content */}
          <div className="px-8 flex items-center gap-4">
            {/* Pulsing indicator */}
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Text with typewriter effect */}
            <motion.div
              className="text-white font-mono text-sm tracking-[0.15em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 2, delay: 1 }}
                className="inline-block overflow-hidden whitespace-nowrap"
              >
                PROFESSIONAL DEBT RESOLUTION SYSTEMS
              </motion.span>
            </motion.div>
            
            {/* Pulsing indicator */}
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
          
          {/* Right decorative line */}
          <motion.div
            className="flex-1 h-px bg-gradient-to-l from-transparent via-gray-400 to-gray-600"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          />
        </div>
      </div>

      {/* Bottom border glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
        animate={{
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}