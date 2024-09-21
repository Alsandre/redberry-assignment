import { useState, useEffect } from "react";
import { EMOTIONS } from "../constants";

export const QuoteSlider = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % EMOTIONS.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-rdbryPrimary-100 opacity-55">
      <div
        className={`transition-opacity duration-1000 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}
      >
        <h2 className="text-xl font-semibold text-center p-4">
          {EMOTIONS[currentQuoteIndex]}
        </h2>
      </div>
    </div>
  );
};
