'use client';
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Success() {
  const [pieces, setPieces] = useState(200);
  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 5000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <m.main
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    className='h-screen flex items-center justify-center bg-gradient-to-l from-cyan-500 to-teal-500'
    >
      <div className="bg-white rounded-lg w-3/4 font-latoRegular text-center text-gray-700 p-8">
        <h1 className="text-2xl pb-4 font-latoBold">
          Thanks for the email 💫
        </h1>
        <p className="text-md text-gray-500">
          I'll get back to you as soon as possible.
        </p>
      </div>
      <Confetti gravity={0.1} numberOfPieces={pieces} />
    </m.main>
  )
}
