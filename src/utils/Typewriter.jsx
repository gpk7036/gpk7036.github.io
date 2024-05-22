import React, { useState, useEffect } from "react";

const Typewriter = ({ textArray = [], speed = 120 }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentText = textArray[currentIndex];
      const textLength = currentText.length;

      if (!isDeleting) {
        // Typing
        setDisplayText((prev) => {
          return prev + currentText.charAt(prev.length);
        });

        if (displayText.length === textLength) {
          setIsDeleting(true);
          clearInterval(interval);
          setTimeout(() => setCurrentIndex((prev) => (prev + 1) % textArray.length), 1000);
        }
      } else {
        // Deleting
        setDisplayText((prev) => {
          return prev.slice(0, -1);
        });

        if (displayText.length === 0) {
          setIsDeleting(false);
          clearInterval(interval);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [currentIndex, displayText, isDeleting, speed, textArray]);

  return <span>{displayText}</span>;
};

export default Typewriter;
