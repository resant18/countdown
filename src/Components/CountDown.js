import React, { useState, useEffect } from "react";
import TimerInput from "./TimeInput";
import Timer from "./Timer";

const CountDown = () => {
   const [startInMinutes, setStartInMinutes] = useState("");
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [isActive, setIsActive] = useState(false);
   const [isOver, setIsOver] = useState(false);
   const [isHalfway, setIsHalfway] = useState(false);
   const [className, setClassName] = useState("");   

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

   const checkTimeLeft = () => {
      let mins = startInMinutes;
      let halfTime = Math.floor((mins * 60) / 2);

      timeLeft <= halfTime ? setIsHalfway(true) : setIsHalfway(false);

      timeLeft <= 10
         ? setClassName((className) => className + " blink")
         : setClassName((className) => className.replace("blink", ""));
      timeLeft <= 20
         ? setClassName((className) => className + " red")
         : setClassName((className) => className.replace("red", ""));
   };

   const renderNotification = () => {
      if (isOver) {
         return <h1>Time's up!</h1>;
      } else if (isHalfway) {
         return <h1>More than halfway there!</h1>;
      } else return null;
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
         {renderNotification()}
         <Timer minutes={minutes} seconds={seconds} className={className} />         
      </div>
   );
};

export default CountDown;
