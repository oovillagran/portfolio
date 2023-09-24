'use client';
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../DarkModeContext";

export default function Success() {
  const { darkMode } = useDarkMode();

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
    className='h-screen flex-column justify-center'
    >
      <div className={darkMode ? "dark" : ""}>
        <Navbar />
        <div className="bg-white my-44 justify-center m-auto rounded-lg w-3/4 font-latoRegular text-center p-4">
          <h1 className="text-lg md:text-2xl pb-4 font-latoBold dark:text-teal-500">
            Thanks for the message 💫
          </h1>
          <p className="text-md text-gray-500 dark:text-gray-200">
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>
        <Confetti gravity={0.1} numberOfPieces={pieces} />
      </div>
    </m.main>
  )
}
