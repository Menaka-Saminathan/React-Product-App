import { useState, useEffect } from "react";

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "october, 5,2024";

  const getTime = (deadline: string) => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

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
