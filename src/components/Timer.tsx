import { useState, useEffect } from "react";
import { getTime } from "../utils/GetTime";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "october, 10,2024";

  const updateTimer = () => {
    const { days, hours, minutes, seconds } = getTime(deadline);
    setDays(days);
    console.log(days);
    
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  useEffect(() => {
    const interval = setInterval(() => updateTimer(), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex gap-10">
        <div className="">
          <p className="text-2xl text-indigo-900">
            {days < 10 ? "0" + days : days}
          </p>
          <span className="text-2xl text-indigo-900">Days</span>
        </div>
        <div className="">
          <p className="text-2xl text-indigo-900">
            {hours < 10 ? "0" + hours : hours}
          </p>
          <span className="text-2xl text-indigo-900">Hours</span>
        </div>
        <div className="">
          <p className="text-2xl text-indigo-900">
            {minutes < 10 ? "0" + minutes : minutes}
          </p>
          <span className="text-2xl text-indigo-900">Minutes</span>
        </div>
        <div className="">
          <p className="text-2xl text-indigo-900">
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
          <span className="text-2xl text-indigo-900">Seconds</span>
        </div>
      </div>
    </>
  );
};

export default Timer;
