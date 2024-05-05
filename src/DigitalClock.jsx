import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function formatTime(time) {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
  }
  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }
  return (
    <div className="digital-clock">
      <div className="clock">
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
