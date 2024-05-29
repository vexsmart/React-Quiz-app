import { useState, useEffect } from "react";

export default function ProgressTimer({ timeout, onTimeout, mode }) {
  const [barProgress, setBarProgress] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBarProgress((prevState) => prevState - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={barProgress} max={timeout} className={mode} />;
}
