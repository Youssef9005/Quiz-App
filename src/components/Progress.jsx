import { useEffect, useState } from "react"

export default function Progress({timeout , onTimeout , mode}) {
  const [remainingTime , setRemainingTime] = useState(timeout)

  useEffect(() => {
    const timer = setTimeout(onTimeout , timeout);

    return () => {
      clearTimeout(timer);
    }
  } , [timeout , onTimeout]);

  useEffect(() => {
    const INTERVAL = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(INTERVAL);
    };

  } , []);

  return(
    <progress id="progress-timer" max={timeout} value={remainingTime} className={mode}/>
  )
}