'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Commercial() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timeline = [
      { delay: 0, phase: 1 },      // Logo reveal
      { delay: 1500, phase: 2 },   // Zoom out to pedestals
      { delay: 3500, phase: 3 },   // Show all packages with text
      { delay: 7000, phase: 4 },   // Full glory with orbiting items
    ];

    const timers = timeline.map(({ delay, phase }) =>
      setTimeout(() => setPhase(phase), delay)
    );

    // Loop the animation
    const loopTimer = setTimeout(() => setPhase(0), 10000);
    const restartTimer = setTimeout(() => setPhase(1), 10500);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(loopTimer);
      clearTimeout(restartTimer);
    };
  }, [phase]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-purple-800">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="30" fill="none" stroke="gold" strokeWidth="2"/>
              <circle cx="50" cy="50" r="20" fill="none" stroke="gold" strokeWidth="1"/>
              <path d="M 50 20 L 50 80 M 20 50 L 80 50" stroke="gold" strokeWidth="1"/>
              <path d="M 30 30 L 70 70 M 70 30 L 30 70" stroke="gold" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)"/>
        </svg>
      </div>

      {/* Festive Lanterns */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: '5%',
            }}
            animate={{
              y: [0, 20, 0],
              rotate: [-5, 5, -5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <div className="w-12 h-16 bg-gradient-to-b from-amber-500 to-orange-600 rounded-lg shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-4 bg-yellow-700 rounded-t-lg"></div>
              <div className="absolute inset-2 bg-yellow-300 opacity-50 rounded"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Phase 1: Golden Sparkles and Logo Reveal */}
      <AnimatePresence>
        {phase >= 1 && phase < 2 && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {/* Sparkles */}
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos(i * 12) * 200,
                  y: Math.sin(i * 12) * 200,
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              />
            ))}

            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 drop-shadow-[0_0_30px_rgba(251,191,36,0.8)] tracking-wider">
                APNA RASHAN
              </h1>
              <p className="text-5xl font-bold text-yellow-300 mt-2 drop-shadow-[0_0_20px_rgba(253,224,71,0.6)]">
                STORE
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Phase 2-4: Pedestals with Packages */}
      <AnimatePresence>
        {phase >= 2 && (
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo at top */}
            <motion.div
              className="absolute top-8 left-0 right-0 text-center z-10"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                APNA RASHAN STORE
              </h1>
            </motion.div>

            {/* Three Pedestals */}
            <div className="absolute inset-0 flex items-center justify-center gap-8 px-4">
              {/* Package 1 */}
              <motion.div
                className="relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Pedestal color="from-green-600 to-green-800">
                  <PackageBox color="from-green-400 to-green-600" />
                </Pedestal>
                {phase >= 3 && (
                  <PriceTag
                    text="Package 1"
                    price="3,499 PKR"
                    color="from-green-400 to-green-600"
                    delay={0}
                  />
                )}
              </motion.div>

              {/* Package 2 */}
              <motion.div
                className="relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <Pedestal color="from-blue-600 to-blue-800">
                  <PackageBox color="from-blue-400 to-blue-600" />
                </Pedestal>
                {phase >= 3 && (
                  <PriceTag
                    text="Package 2"
                    price="4,999 PKR"
                    color="from-blue-400 to-blue-600"
                    delay={0.2}
                  />
                )}
              </motion.div>

              {/* Package 3 */}
              <motion.div
                className="relative"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <Pedestal color="from-yellow-600 to-yellow-800">
                  <PackageBox color="from-yellow-400 to-yellow-600" />
                </Pedestal>
                {phase >= 3 && (
                  <PriceTag
                    text="Package 3"
                    price="8,099 PKR"
                    color="from-yellow-400 to-yellow-600"
                    delay={0.4}
                  />
                )}
              </motion.div>
            </div>

            {/* Orbiting Grocery Items */}
            {phase >= 4 && (
              <div className="absolute inset-0 pointer-events-none">
                {/* Flour Bags */}
                <OrbitingItem icon="🌾" radius={300} duration={4} delay={0} />
                <OrbitingItem icon="🌾" radius={300} duration={4} delay={2} />

                {/* Oil Bottles */}
                <OrbitingItem icon="🫗" radius={280} duration={5} delay={0.5} />
                <OrbitingItem icon="🫗" radius={280} duration={5} delay={2.5} />

                {/* Rice */}
                <OrbitingItem icon="🍚" radius={320} duration={4.5} delay={1} />
                <OrbitingItem icon="🍚" radius={320} duration={4.5} delay={3} />

                {/* Sugar */}
                <OrbitingItem icon="🧂" radius={290} duration={5.5} delay={1.5} />

                {/* Spices */}
                <OrbitingItem icon="🌶️" radius={310} duration={4.8} delay={0.8} />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Pedestal Component
function Pedestal({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <div className="flex flex-col items-center">
      {/* Platform */}
      <div className="relative mb-4">
        {children}
      </div>
      {/* Pedestal Base */}
      <div className={`w-32 h-40 bg-gradient-to-b ${color} rounded-lg shadow-2xl relative`}>
        <div className="absolute inset-2 bg-white/10 rounded"></div>
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-black/30 rounded-b-lg"></div>
      </div>
    </div>
  );
}

// Package Box Component
function PackageBox({ color }: { color: string }) {
  return (
    <motion.div
      className={`w-32 h-32 bg-gradient-to-br ${color} rounded-lg shadow-2xl relative`}
      animate={{
        y: [-5, 5, -5],
        rotateY: [0, 360],
      }}
      transition={{
        y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 8, repeat: Infinity, ease: "linear" },
      }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-4 border-4 border-white/30 rounded"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
        📦
      </div>
    </motion.div>
  );
}

// Price Tag Component
function PriceTag({ text, price, color, delay }: { text: string; price: string; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute -top-20 left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
    >
      <div className={`bg-gradient-to-r ${color} text-white font-black text-xl px-6 py-3 rounded-lg shadow-2xl border-4 border-white/50`}>
        <div className="text-sm font-bold tracking-wider">{text}</div>
        <div className="text-2xl drop-shadow-lg">{price}</div>
      </div>
    </motion.div>
  );
}

// Orbiting Item Component
function OrbitingItem({ icon, radius, duration, delay }: { icon: string; radius: number; duration: number; delay: number }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 text-5xl"
      style={{
        marginLeft: -25,
        marginTop: -25,
      }}
      animate={{
        rotate: 360,
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        delay,
      }}
    >
      <motion.div
        style={{
          x: radius,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [-360, 0, -360],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {icon}
      </motion.div>
    </motion.div>
  );
}
