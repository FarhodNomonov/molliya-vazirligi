import React, { useState, useEffect } from "react";

const Timer = ({ delayResend = "800", setTimeEnd = () => {} }) => {
  const [delay, setDelay] = useState(+delayResend);
  const minutes = Math.floor(delay / 60);
  const seconds = Math.floor(delay % 60);
  useEffect(() => {
    const timer = setInterval(() => {
      setDelay(delay - 1);
    }, 1000);

    if (delay === 0) {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  });

  React.useEffect(() => {
    if (minutes < 1 && seconds < 1) setTimeEnd(true);
  }, [minutes, seconds, setTimeEnd]);

  return (
    <>
      <span>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    </>
  );
};

export default Timer;
