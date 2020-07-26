import React, { useState, useEffect } from "react";
import TimerInput from "./TimeInput";
import Timer from "./Timer";

const CountDown = () => {
   const [startInMinutes, setStartInMinutes] = useState("");
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [isActive, setIsActive] = useState(false);
   const [isOver, setIsOver] = useState(false);
   
   let timeLeft;

   const handleInput = (e) => {
      e.preventDefault();

      let mins = Number(e.target.value);
      setError(validate(mins));
      setStartInMinutes(mins);
      setMinutes(mins);
   };

   const tick = () => {
      timeLeft = minutes * 60 + seconds;

      timeLeft--;
      if (timeLeft < 0) {
         setIsOver(true);
      } else {
         let min = Math.floor(timeLeft / 60);
         setMinutes(min);
         setSeconds(timeLeft - min * 60);
         checkTimeLeft();
      }
   };

   useEffect(() => {
      let timerId;
      let speed = 1000 / Number(selectedSpeed);

      if (isActive) {
         timerId = setInterval(() => {
            tick();
         }, speed);
      } else if (!isActive && minutes > 0 && seconds > 0) {
         clearInterval(timerId);
      }

      return () => clearInterval(timerId);
   });

   return (
      <div>
         <label htmlFor='timeInput'>CountDown: </label>         
         <TimerInput startInMinutes={startInMinutes} handleInput={handleInput} />         
         <Timer minutes={minutes} seconds={seconds} className={className} />         
      </div>
   );
};

export default CountDown;
